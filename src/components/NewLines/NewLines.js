import React from "react";
import "./NewLines.css";
import parse from "html-react-parser";

const TYPING_MIN_SPEED = 0.25; // characters per ms (250/s)
const TYPING_MAX_DURATION = 800; // ms; long output speeds up to finish within this
const SCRAMBLE_AHEAD = 40; // characters of shuffling symbols shown ahead of the settled text
const SCRAMBLE_GLYPHS = "!#$%&*+-=?@^_~[]{}|/\\§±•x";

// Random symbols for each non-space character, so the band keeps the real text's word shapes and wrapping.
const scramble = (text) =>
  text.replace(/\S/g, () => SCRAMBLE_GLYPHS[Math.floor(Math.random() * SCRAMBLE_GLYPHS.length)]);

// Types out the given line elements in place, with a band of shuffling symbols running ahead of the
// settled text. Text nodes are emptied and refilled in reading order; text-less elements (<br>, theme
// swatches) appear when the band reaches them. Returns a function that finishes immediately.
function typeOut(lineElements, onTypingChange) {
  const steps = [];
  let total = 0;
  for (const root of lineElements) {
    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
    );
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeType === Node.TEXT_NODE) {
        if (node.data.length > 0) {
          steps.push({ node, text: node.data, start: total });
          total += node.data.length;
          node.data = "";
        }
      } else if (node.tagName === "BR" || node.classList.contains("swatch")) {
        steps.push({ node, start: total });
        total += 1;
        node.style.display = "none";
      }
    }
  }

  // The settled text has to travel the whole output plus the band before typing is done.
  const charsPerMs = Math.max(TYPING_MIN_SPEED, (total + SCRAMBLE_AHEAD) / TYPING_MAX_DURATION);
  let firstUnsettled = 0;
  let frame = null;
  let done = false;

  const render = (settled) => {
    const front = settled + SCRAMBLE_AHEAD;
    for (let i = firstUnsettled; i < steps.length; i++) {
      const step = steps[i];
      if (step.start >= front) break; // not reached yet; still hidden
      if (step.text) {
        const length = step.text.length;
        const real = Math.min(Math.max(settled - step.start, 0), length);
        const shown = Math.min(front - step.start, length);
        step.node.data = step.text.slice(0, real) + scramble(step.text.slice(real, shown));
        if (real === length && i === firstUnsettled) firstUnsettled++;
      } else {
        step.node.style.display = "";
        if (step.start < settled && i === firstUnsettled) firstUnsettled++;
      }
    }
  };

  const finish = () => {
    if (done) return;
    done = true;
    cancelAnimationFrame(frame);
    for (const step of steps) {
      if (step.text) step.node.data = step.text;
      else step.node.style.display = "";
    }
    onTypingChange?.(false);
  };

  const start = performance.now();
  const tick = (now) => {
    const settled = Math.floor((now - start) * charsPerMs);
    if (settled >= total) {
      finish();
      return;
    }
    render(settled);
    window.scrollTo(0, document.body.offsetHeight);
    frame = requestAnimationFrame(tick);
  };

  onTypingChange?.(true);
  frame = requestAnimationFrame(tick);
  return finish;
}

function NewLines({ lines, type = "", typeOutNewLines = false, onTypingChange }) {
  const containerRef = React.useRef();
  const typedLineCountRef = React.useRef(0);
  const finishTypingRef = React.useRef(null);

  // Runs before paint, so new output is emptied before it's ever shown in full.
  React.useLayoutEffect(() => {
    if (!typeOutNewLines) return;
    finishTypingRef.current?.();
    finishTypingRef.current = null;

    const lineElements = [...containerRef.current.children];
    if (lineElements.length < typedLineCountRef.current) typedLineCountRef.current = 0; // cleared
    const newLines = lineElements
      .slice(typedLineCountRef.current)
      .filter((element) => !element.querySelector(".echo")); // the echoed command shows instantly
    typedLineCountRef.current = lineElements.length;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (newLines.length > 0 && !reduceMotion) {
      finishTypingRef.current = typeOut(newLines, onTypingChange);
    }
  }, [lines, typeOutNewLines, onTypingChange]);

  React.useEffect(() => () => finishTypingRef.current?.(), []);

  return (
    <div className={"NewLines"} ref={containerRef}>
      {/* Lines are only ever appended (or all cleared), so index keys keep earlier lines mounted
          and only new output is typed out. Each .line wrapper is display: contents, so it doesn't
          affect layout; it just lets the typing effect find which lines are new. */}
      {lines.map((line, index) => {
        if (line.startsWith("<")) {
          // Source indentation before </p> would otherwise become &nbsp; and render as an extra blank line.
          const html = line.replace(/\s+<\/p>/g, "</p>");
          var t = "";
          for (let i = 0; i < html.length; i++) {
            if (html.charAt(i) === " " && html.charAt(i + 1) === " ") {
              t += "&nbsp;&nbsp;";
              i++;
            } else {
              t += html.charAt(i);
            }
          }
          return (
            <div className="line" key={index}>
              {parse(t)}
            </div>
          );
        } else {
          return (
            <div className="line" key={index}>
              <p className={`${type} color2`}>{line}</p>
            </div>
          );
        }
      })}
    </div>
  );
}

export default NewLines;
