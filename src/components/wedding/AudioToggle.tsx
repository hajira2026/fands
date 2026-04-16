import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const AudioToggle = () => {
  const ref = useRef<HTMLAudioElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.volume = 0.35;
  }, []);

  const toggle = async () => {
    const a = ref.current;
    if (!a) return;
    if (on) { a.pause(); setOn(false); }
    else {
      try { await a.play(); setOn(true); } catch { /* autoplay blocked */ }
    }
  };

  return (
    <>
      {/* Soft instrumental — replaceable */}
      <audio ref={ref} loop preload="none" src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_50f4a1a6bc.mp3?filename=arabian-nights-110260.mp3" />
      <button
        onClick={toggle}
        aria-label={on ? "Mute music" : "Play music"}
        className="fixed bottom-6 right-6 z-50 group"
      >
        <span className="flex items-center gap-2 px-4 py-2.5 rounded-full glass-card text-ivory/90 text-xs tracking-[0.2em] uppercase font-display transition-all duration-700 hover:scale-[1.02]"
          style={{ boxShadow: "0 0 30px hsl(46 65% 52% / 0.25)" }}>
          {on ? <Volume2 className="h-3.5 w-3.5 text-gold" /> : <VolumeX className="h-3.5 w-3.5 text-gold" />}
          <span className="hidden sm:inline">{on ? "Sound On" : "Play Music"}</span>
        </span>
      </button>
    </>
  );
};

export default AudioToggle;
