import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import "./App.css";
import Terminal from "./components/Terminal/Terminal";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

// Two bursts thrown up from the bottom corners toward the middle of the screen.
const launchConfetti = () => {
  const shared = {
    particleCount: 120,
    spread: 70,
    startVelocity: 65,
    disableForReducedMotion: true,
  };
  confetti({ ...shared, angle: 60, origin: { x: 0, y: 1 } });
  confetti({ ...shared, angle: 120, origin: { x: 1, y: 1 } });
};

// A faint accent-colored glow that trails the mouse. Hidden by CSS on touchscreens.
function CursorGlow() {
  const glowRef = useRef();

  useEffect(() => {
    const glow = glowRef.current;
    let frame = null;

    const handleMouseMove = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        glow.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
        glow.style.opacity = 1;
      });
    };
    const handleMouseLeave = () => {
      glow.style.opacity = 0;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <div className="cursor-glow" ref={glowRef} aria-hidden="true" />;
}

function App() {
  useEffect(() => {
    let recentKeys = [];

    const handleKeyDown = (event) => {
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      recentKeys = [...recentKeys, key].slice(-KONAMI_CODE.length);
      if (recentKeys.join() === KONAMI_CODE.join()) {
        recentKeys = [];
        event.preventDefault(); // keep the final "a" out of the command input
        launchConfetti();
        // Terminal.js listens for this to print the unlock message and apply the secret theme.
        window.dispatchEvent(new Event("konami"));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="App">
      <CursorGlow />
      <Terminal />
      {/* Bottom right corner of screen, hide a link that pops up on hover that takes you to my old website with matrix
      to show off ability to do mouse tracking and css animation to slide things in off the screen. */}
    </div>
  );
}

export default App;
