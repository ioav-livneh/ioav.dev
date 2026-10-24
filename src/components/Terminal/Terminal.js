import React from "react";
import "./Terminal.css";
import {
  about,
  help,
  projects,
  skills,
  social,
  banner,
  bannerMobile,
  timeline1,
  timeline2,
  timeline3,
  timeline4,
  timeline5,
  egg,
  theme,
  cmds,
  themeCmds,
  secretThemeCmd,
  konamiUnlocked,
  hiddenCommandResponse,
} from "../../commands";
import NewLines from "../NewLines/NewLines";

// CSS variables for each theme. --command is the accent color, --link-hover-* the selection colors.
const THEME_COLORS = {
  dark: {
    "--main-bg": "#0F111A",
    "--main-bg-inverse": "#F0EEE550",
    "--secondary-bg-inverse": "#F0EEE515",
    "--link-hover-bg": "#717CB480",
    "--link-hover-text": "#FFFFFF",
    "--command": "#84FFFF",
    "--main-text": "#EEFFFF",
    "--link-text": "#82AAFF",
    "--color2-text": "#C3E88D",
    "--scanline-opacity": "1",
  },
  light: {
    "--main-bg": "#F4F4F4",
    "--main-bg-inverse": "#0b0b0b50",
    "--secondary-bg-inverse": "#0b0b0b15",
    "--link-hover-bg": "#FFFFFF",
    "--link-hover-text": "#232324",
    "--command": "#2979ff",
    "--main-text": "#986801",
    "--link-text": "#4078F2",
    "--color2-text": "#50A14E",
    "--scanline-opacity": "0.5",
  },
  forest: {
    "--main-bg": "#002626",
    "--main-bg-inverse": "#ffd9d950",
    "--secondary-bg-inverse": "#ffd9d915",
    "--link-hover-bg": "#1E611E",
    "--link-hover-text": "#FFFFFF",
    "--command": "#FFCC80",
    "--main-text": "#eeffff",
    "--link-text": "#82aaff",
    "--color2-text": "#c3e88d",
    "--scanline-opacity": "1",
  },
  beach: {
    "--main-bg": "#FFF8ED",
    "--main-bg-inverse": "#00071250",
    "--secondary-bg-inverse": "#00071215",
    "--link-hover-bg": "#e7c496",
    "--link-hover-text": "#FFFFFF",
    "--command": "#53c7f0",
    "--main-text": "#272727",
    "--link-text": "#7C4DFF",
    "--color2-text": "#91B859",
    "--scanline-opacity": "0.5",
  },
  space: {
    "--main-bg": "#1B2240",
    "--main-bg-inverse": "#e4ddbf50",
    "--secondary-bg-inverse": "#e4ddbf15",
    "--link-hover-bg": "#383f56",
    "--link-hover-text": "#FFFFFF",
    "--command": "#ad9bf6",
    "--main-text": "#eeffff",
    "--link-text": "#82aaff",
    "--color2-text": "#c3e88d",
    "--scanline-opacity": "1",
  },
};

// "party" is the secret Konami theme: dark theme's colors over the animated rainbow background.
function applyTheme(name) {
  const colors = THEME_COLORS[name === "party" ? "dark" : name];
  Object.entries(colors).forEach(([variable, value]) =>
    document.documentElement.style.setProperty(variable, value),
  );
  document.body.classList.toggle("konami", name === "party");
}

// On touchscreens, focusing the input pops up the keyboard, so only focus it when the visitor taps the command line.
const isTouchDevice = () => window.matchMedia("(pointer: coarse)").matches;

const QUICK_COMMANDS = [
  "about",
  "projects",
  "timeline",
  "skills",
  "social",
  "theme",
  "help",
];

// Shell-style colored prompt. PROMPT_HTML is the same prompt for lines rendered from HTML strings.
const PROMPT_HTML = `<span className='prompt-user'>visitor@ioav.dev</span>: <span className='prompt-path'>~</span> <span className='prompt-symbol'>$</span>`;

function Prompt() {
  return (
    <>
      <span className="prompt-user">visitor@ioav.dev</span>:{" "}
      <span className="prompt-path">~</span>{" "}
      <span className="prompt-symbol">$</span>{" "}
    </>
  );
}

function Terminal() {
  const [tentativeCommand, setTentativeCommand] = React.useState("");
  const [lines, setLines] = React.useState([]);
  const [commandHistory, setCommandHistory] = React.useState([]);
  const [historyIndex, setHistoryIndex] = React.useState(0);
  // Which timeline section was shown last (1-5) while its "continue? [Y/n]" prompt is open; 0 otherwise.
  const [timelineStep, setTimelineStep] = React.useState(0);
  // The secret party theme stays locked on every visit until the Konami code is entered.
  const [secretUnlocked, setSecretUnlocked] = React.useState(false);
  const availableThemeCmds = secretUnlocked
    ? [...themeCmds, secretThemeCmd]
    : themeCmds;
  const [hints, setHints] = React.useState([]);
  // How many characters the visible cursor sits to the left of the end of the command.
  const [caretOffset, setCaretOffset] = React.useState(0);
  const [isFocused, setIsFocused] = React.useState(false);
  const [isTypingOutput, setIsTypingOutput] = React.useState(false);

  const inputRef = React.useRef();
  React.useEffect(() => {
    if (!isTouchDevice()) inputRef.current.focus();
  }, []);

  // Follow new output and typing. Not on every render: a re-render from focus changes would jump
  // the page mid-click, so the mouseup lands elsewhere and the clicked command never runs.
  // Nothing to follow on first load, so short screens open at the top of the banner.
  React.useEffect(() => {
    if (lines.length === 0 && tentativeCommand === "" && hints.length === 0)
      return;
    window.scrollTo(0, document.body.offsetHeight);
  }, [lines, tentativeCommand, hints]);
  const linerRef = React.useRef();
  const contentRef = React.useRef();

  // Clickable commands are plain spans from HTML strings, so make them keyboard-reachable here.
  React.useEffect(() => {
    contentRef.current
      .querySelectorAll(".command:not(.heading), .choice")
      .forEach((element) => {
        element.tabIndex = 0;
        element.setAttribute("role", "button");
      });
  });

  function handleSubmit(command = tentativeCommand) {
    setHints([]);
    const isBlank = command.trim() === "";
    const answersTimeline =
      timelineStep > 0 && (command === "y" || command === "n");

    // History is what the visitor typed: no blank entries and no y/n answers to the timeline prompt.
    const updatedHistory =
      isBlank || answersTimeline
        ? commandHistory
        : [...commandHistory, command];
    setCommandHistory(updatedHistory);
    // Any other command closes the timeline's "continue?" prompt.
    if (!answersTimeline) setTimelineStep(command === "timeline" ? 1 : 0);

    let commandLiner = `<br><p className='echo'>${PROMPT_HTML} <span>${command}</span></p><br>`;
    let history = `<p className='color2'>
    ${updatedHistory.join(`<br>
    `)}</p>`;

    switch (command) {
      case "help":
        setLines([...lines, commandLiner, ...help]);
        break;
      case "clear":
        setLines([]);
        break;
      case "history":
        setLines([...lines, commandLiner, history]);
        break;
      case "about":
        setLines([...lines, commandLiner, ...about]);
        break;
      case "projects":
        setLines([...lines, commandLiner, ...projects]);
        break;
      case "skills":
        setLines([...lines, commandLiner, ...skills]);
        break;
      case "theme":
        setLines([...lines, commandLiner, ...theme(secretUnlocked)]);
        break;
      case "theme dark":
      case "theme light":
      case "theme forest":
      case "theme beach":
      case "theme space": {
        const name = command.slice("theme ".length);
        setLines([
          ...lines,
          commandLiner,
          `${name[0].toUpperCase()}${name.slice(1)} theme applied`,
        ]);
        applyTheme(name);
        break;
      }
      case secretThemeCmd:
        if (!secretUnlocked) {
          setLines([
            ...lines,
            commandLiner,
            `<p className='color2'>Command not found: ${command}. For a list of commands, type <span class="command">'help'</span>.</p>`,
          ]);
          break;
        }
        setLines([...lines, commandLiner, "Party theme applied ✨"]);
        applyTheme("party");
        break;
      case "social":
        setLines([...lines, commandLiner, ...social]);
        break;
      case "timeline":
        setLines([...lines, commandLiner, ...timeline1]);
        break;
      case "n":
        if (answersTimeline) {
          setTimelineStep(0);
          let response = `<p className='color2'>  You're no fun :( </p>`;
          setLines([...lines, commandLiner, response]);
        } else {
          setLines([
            ...lines,
            commandLiner,
            `<p className='color2'>Command not found: ${command}. For a list of commands, type <span class="command">'help'</span>.</p>`,
          ]);
        }
        break;
      case "y":
        switch (answersTimeline ? timelineStep : 0) {
          case 1:
            setLines([...lines, commandLiner, ...timeline2]);
            setTimelineStep(2);
            break;
          case 2:
            setLines([...lines, commandLiner, ...timeline3]);
            setTimelineStep(3);
            break;
          case 3:
            setLines([...lines, commandLiner, ...timeline4]);
            setTimelineStep(4);
            break;
          case 4:
            setLines([...lines, commandLiner, ...timeline5]);
            setTimelineStep(5);
            break;
          case 5:
            let response = `<a href='${egg}'>  There was an egg...</a>`;
            setLines([...lines, commandLiner, response]);
            setTimelineStep(0);
            setTimeout(function () {
              window.open(egg, "_blank");
            }, 1000);
            break;
          default:
            setLines([
              ...lines,
              commandLiner,
              `<p className='color2'>Command not found: ${command}. For a list of commands, type <span class="command">'help'</span>.</p>`,
            ]);
            break;
        }
        break;
      default:
        if (isBlank) {
          setLines([...lines, commandLiner]); // like a real shell: just a fresh prompt
          break;
        }
        setLines([
          ...lines,
          commandLiner,
          ...(hiddenCommandResponse(command) ?? [
            `<p className='color2'>Command not found: ${command}. For a list of commands, type <span class="command">'help'</span>.</p>`,
          ]),
        ]);
    }
    setTentativeCommand("");
    setCaretOffset(0);
  }

  // App.js detects the Konami code (and fires the confetti); the terminal answers and unlocks the theme.
  function handleKonami() {
    setTentativeCommand(""); // the code's "b" was typed into the input
    setCaretOffset(0);
    setHistoryIndex(0);
    setHints([]);
    setTimelineStep(0);
    setSecretUnlocked(true);
    applyTheme("party");
    setLines([
      ...lines,
      `<br><p className='echo'>${PROMPT_HTML} <span>↑ ↑ ↓ ↓ ← → ← → b a</span></p><br>`,
      ...konamiUnlocked,
    ]);
  }
  const handleKonamiRef = React.useRef(handleKonami);
  handleKonamiRef.current = handleKonami;
  React.useEffect(() => {
    const onKonami = () => handleKonamiRef.current();
    window.addEventListener("konami", onKonami);
    return () => window.removeEventListener("konami", onKonami);
  }, []);

  function runClickedCommand(event) {
    const commandSpan = event.target.closest(".command, .choice");
    if (!commandSpan) return;

    const command = (commandSpan.dataset.command ?? commandSpan.textContent)
      .replace(/'/g, "")
      .trim()
      .toLowerCase();
    const isChoice = command === "y" || command === "n";
    const isKnown =
      cmds.includes(command) ||
      availableThemeCmds.includes(command) ||
      hiddenCommandResponse(command) !== null;
    if (!isChoice && !isKnown) return;

    handleSubmit(command);
    if (!isTouchDevice()) inputRef.current.focus();
  }

  function moveCaret(event) {
    let keyCode = event.key;
    if (keyCode === "ArrowUp" && commandHistory.length > historyIndex) {
      const nextIndex = historyIndex + 1;
      setHistoryIndex(nextIndex);
      setTentativeCommand(commandHistory[commandHistory.length - nextIndex]);
      setCaretOffset(0);
    }
    if (keyCode === "ArrowDown" && historyIndex > 0) {
      const nextIndex = historyIndex - 1;
      setHistoryIndex(nextIndex);
      setTentativeCommand(commandHistory[commandHistory.length - nextIndex]);
      if (nextIndex === 0) {
        setTentativeCommand("");
        setCaretOffset(0);
      }
    }
    if (keyCode === "ArrowLeft" && caretOffset < tentativeCommand.length) {
      setCaretOffset(caretOffset + 1);
    }
    if (keyCode === "ArrowRight" && caretOffset > 0) {
      setCaretOffset(caretOffset - 1);
    }
    // Shift+Tab is left alone so keyboard users can move focus out of the input.
    if (keyCode === "Tab" && !event.shiftKey) {
      event.preventDefault();

      let hintCmds = [];

      cmds.forEach(function (cmd) {
        if (cmd.startsWith(tentativeCommand)) {
          hintCmds = [...hintCmds, cmd];
        }
      });

      if (tentativeCommand.startsWith("theme")) {
        availableThemeCmds.forEach(function (cmds) {
          if (cmds.startsWith(tentativeCommand)) {
            hintCmds = [...hintCmds, cmds];
          }
        });
      }

      if (hintCmds.length > 1) {
        setHints(hintCmds);
      } else {
        if (hintCmds.length > 0) {
          setTentativeCommand(hintCmds[0]);
          setHints([]);
        }
      }
    }
    const input = document.getElementById("command-field");
    const length = input.value.length;
    input.focus();
    input.setSelectionRange(length, length);
  }

  return (
    <div className="terminal-wrapper">
      {/* TODO: create separate component for tracking history */}
      <div className="screen-overlay"></div>
      <div
        className="terminal-wrapper-content"
        ref={contentRef}
        onClick={runClickedCommand}
        onKeyDown={(event) => {
          const isClickable = event.target.matches(".command, .choice");
          if (isClickable && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            runClickedCommand(event);
          }
        }}
      >
        <div className="bannerWrapper">
          <NewLines lines={banner} type={"banner"} />
          <NewLines lines={bannerMobile} type={"mobile-banner"} />
        </div>

        <br />
        <p className="color2">Welcome to my terminal portfolio!</p>
        <br />
        <p className="color2">
          {`Type a command, or ${isTouchDevice() ? "tap" : "click"} one to get started:`}
        </p>
        <p className="quick-menu">
          {QUICK_COMMANDS.map((command) => (
            <span className="command" key={command}>
              {command}
            </span>
          ))}
        </p>

        <NewLines
          lines={lines}
          typeOutNewLines
          onTypingChange={setIsTypingOutput}
        />

        {/* TODO:  create separate component just for command line*/}

        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <input
            ref={inputRef}
            id="command-field"
            value={tentativeCommand}
            autoComplete="off"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={(event) => {
              moveCaret(event);
            }}
            onChange={(event) => {
              let nextCommand = event.target.value.toLowerCase();
              if (nextCommand === "<") {
                nextCommand = "";
              }
              setTentativeCommand(
                nextCommand,
              ); /*TODO: Keep a separate component for this state or cache this data so that component doesnt rerender on every key stroke.*/
            }}
          />
        </form>
        <div
          ref={linerRef}
          id="command-line"
          className={isTypingOutput ? "typing" : ""}
          onClick={() => {
            inputRef.current.focus();
          }}
        >
          <br />
          <p>
            <Prompt />
            <span>{tentativeCommand}</span>
            <b
              className={isFocused ? "cursor" : "cursor unfocused"}
              id="cursor"
              style={{ left: `${-caretOffset}ch` }}
            >
              █
            </b>
          </p>
          <p>
            {hints.map((hint) => (
              <React.Fragment key={hint}>{hint} &nbsp;&nbsp;</React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terminal;
