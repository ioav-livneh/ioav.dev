// Retro UI sound effects, synthesized with the Web Audio API (no audio files).
// Browsers only allow audio after the visitor interacts with the page, so the audio context is
// created on the first click or key press (unlockAudio) and sounds before that are skipped.

const SOUND_PREFERENCE_KEY = "soundEnabled";

let context = null;
let enabled = loadPreference();

function loadPreference() {
  try {
    return window.localStorage.getItem(SOUND_PREFERENCE_KEY) !== "false";
  } catch {
    return true;
  }
}

export function isSoundEnabled() {
  return enabled;
}

export function setSoundEnabled(value) {
  enabled = value;
  try {
    window.localStorage.setItem(SOUND_PREFERENCE_KEY, String(value));
  } catch {}
}

export function unlockAudio() {
  if (!context) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    context = new AudioContext();
  }
  if (context.state === "suspended") context.resume();
}

// A short square-wave blip with a fast fade-out, optionally sliding in pitch.
function blip({ frequency, endFrequency, duration, volume }) {
  if (!enabled || !context || context.state !== "running") return;
  const now = context.currentTime;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "square";
  oscillator.frequency.setValueAtTime(frequency, now);
  if (endFrequency)
    oscillator.frequency.exponentialRampToValueAtTime(
      endFrequency,
      now + duration,
    );
  gain.gain.setValueAtTime(volume, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  oscillator.connect(gain).connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + duration);
}

export const playHoverSound = () =>
  blip({ frequency: 1800, duration: 0.03, volume: 0.015 });
export const playClickSound = () =>
  blip({ frequency: 900, endFrequency: 450, duration: 0.08, volume: 0.04 });
