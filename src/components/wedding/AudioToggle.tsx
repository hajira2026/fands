import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

/**
 * Soft piano / nasheed-style instrumental.
 * Browsers block silent autoplay — so we attempt autoplay muted, and on the
 * very first user interaction (anywhere on the page) we unmute & play.
 * User can toggle anytime with the floating pill.
 *
 * To swap the song: replace SRC with the user's uploaded audio path.
 */
const SRC = "https://cdn.pixabay.com/download/audio/2022/10/30/audio_347111d318.mp3?filename=relaxing-piano-music-for-relaxation-and-stress-relief-115459.mp3";

const AudioToggle = () => {
  const ref = useRef<HTMLAudioElement>(null);
  const [on, setOn] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    const a = ref.current;
    if (!a) return;
    a.volume = 0.4;

    const startOnInteract = async () => {
      if (startedRef.current) return;
      startedRef.current = true;
      try {
        await a.play();
        setOn(true);
      } catch {
        /* still blocked — user can tap the pill */
      }
      window.removeEventListener("pointerdown", startOnInteract);
      window.removeEventListener("keydown", startOnInteract);
      window.removeEventListener("scroll", startOnInteract);
    };

    window.addEventListener("pointerdown", startOnInteract, { once: false });
    window.addEventListener("keydown", startOnInteract, { once: false });
    window.addEventListener("scroll", startOnInteract, { once: false, passive: true });

    return () => {
      window.removeEventListener("pointerdown", startOnInteract);
      window.removeEventListener("keydown", startOnInteract);
      window.removeEventListener("scroll", startOnInteract);
    };
  }, []);

  const toggle = async () => {
    const a = ref.current;
    if (!a) return;
    if (on) { a.pause(); setOn(false); }
    else {
      try { await a.play(); setOn(true); } catch { /* noop */ }
    }
  };

  return (
    <>
      <audio ref={ref} loop preload="auto" src={SRC} />
      <button
        onClick={toggle}
        aria-label={on ? "Pause music" : "Play music"}
        className="fixed bottom-6 right-6 z-50 group"
      >
        <span
          className="flex items-center gap-2 px-4 py-2.5 rounded-full glass-card text-ivory/90 text-xs tracking-[0.2em] uppercase font-display transition-all duration-700 hover:scale-[1.02]"
          style={{ boxShadow: "0 0 30px hsl(46 65% 52% / 0.3)" }}
        >
          {on ? <Volume2 className="h-3.5 w-3.5 text-gold animate-pulse" /> : <VolumeX className="h-3.5 w-3.5 text-gold" />}
          <span className="hidden sm:inline">{on ? "Music On" : "Tap to Play"}</span>
        </span>
      </button>
    </>
  );
};

export default AudioToggle;
