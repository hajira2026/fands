import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import nikahTheme from "/audio/nikah-theme.mp3?url";

/**
 * Cinematic background score — user-uploaded saxophone instrumental.
 * - Auto-starts on first user interaction (browsers block silent autoplay)
 * - Floating glass pill with play/pause + volume slider + mute
 */
const SRC = nikahTheme;

const AudioToggle = () => {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.45);
  const [muted, setMuted] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    const a = ref.current;
    if (!a) return;
    a.volume = volume;
    a.muted = muted;
  }, [volume, muted]);

  useEffect(() => {
    const a = ref.current;
    if (!a) return;

    const startOnInteract = async () => {
      if (startedRef.current) return;
      startedRef.current = true;
      try {
        await a.play();
        setPlaying(true);
      } catch {
        /* still blocked — user can tap the pill */
      }
      window.removeEventListener("pointerdown", startOnInteract);
      window.removeEventListener("keydown", startOnInteract);
      window.removeEventListener("scroll", startOnInteract);
    };

    window.addEventListener("pointerdown", startOnInteract);
    window.addEventListener("keydown", startOnInteract);
    window.addEventListener("scroll", startOnInteract, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", startOnInteract);
      window.removeEventListener("keydown", startOnInteract);
      window.removeEventListener("scroll", startOnInteract);
    };
  }, []);

  const toggle = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const a = ref.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      try {
        await a.play();
        setPlaying(true);
      } catch {
        /* noop */
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMuted((m) => !m);
  };

  return (
    <>
      <audio ref={ref} loop preload="auto" src={SRC} />
      <div
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        className="fixed bottom-6 right-6 z-50"
      >
        <div
          className="flex items-center gap-3 px-3 py-2.5 rounded-full glass-card transition-all duration-500"
          style={{ boxShadow: "0 0 30px hsl(46 65% 52% / 0.35)" }}
        >
          <button
            onClick={toggle}
            aria-label={playing ? "Pause music" : "Play music"}
            className="flex items-center justify-center h-8 w-8 rounded-full bg-gold/15 hover:bg-gold/25 transition-colors"
          >
            {playing ? (
              <Pause className="h-3.5 w-3.5 text-gold" fill="currentColor" />
            ) : (
              <Play className="h-3.5 w-3.5 text-gold ml-[1px]" fill="currentColor" />
            )}
          </button>

          <div
            className={`flex items-center gap-2 overflow-hidden transition-all duration-500 ${
              expanded ? "w-[140px] opacity-100" : "w-0 opacity-0 sm:w-[100px] sm:opacity-100"
            }`}
          >
            <button
              onClick={toggleMute}
              aria-label={muted ? "Unmute" : "Mute"}
              className="text-gold/80 hover:text-gold transition-colors"
            >
              {muted || volume === 0 ? (
                <VolumeX className="h-3.5 w-3.5" />
              ) : (
                <Volume2 className="h-3.5 w-3.5" />
              )}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={muted ? 0 : volume}
              onChange={(e) => {
                const v = parseFloat(e.target.value);
                setVolume(v);
                if (v > 0 && muted) setMuted(false);
              }}
              className="flex-1 h-[3px] appearance-none rounded-full bg-gold/20 accent-[hsl(46_65%_52%)] cursor-pointer
                         [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3
                         [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[hsl(48_82%_81%)]
                         [&::-webkit-slider-thumb]:shadow-[0_0_8px_hsl(46_65%_52%/0.8)]"
              aria-label="Volume"
            />
          </div>

          <span className="hidden sm:inline pr-2 font-display text-[9px] tracking-[0.3em] text-ivory/70 uppercase">
            {playing ? "Playing" : "Tap to play"}
          </span>
        </div>
      </div>
    </>
  );
};

export default AudioToggle;
