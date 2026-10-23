import { useEffect } from "react";
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

function App() {
  useEffect(() => {
    let recentKeys = [];

    const handleKeyDown = (event) => {
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      recentKeys = [...recentKeys, key].slice(-KONAMI_CODE.length);
      if (recentKeys.join() === KONAMI_CODE.join()) {
        recentKeys = [];
        const activated = document.body.classList.toggle("konami");
        if (activated) {
          launchConfetti();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="App">
      <Terminal />
      {/* Bottom right corner of screen, hide a link that pops up on hover that takes you to my old website with matrix
      to show off ability to do mouse tracking and css animation to slide things in off the screen. */}
    </div>
  );
}

export default App;
