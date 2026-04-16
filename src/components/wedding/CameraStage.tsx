import { ReactNode } from "react";
import { useScrollCamera } from "@/hooks/useScrollCamera";

/** Wraps page content with a slow scroll-driven scale + tilt — the "virtual camera". */
const CameraStage = ({ children }: { children: ReactNode }) => {
  const p = useScrollCamera();
  // scale 1 → 1.04, tilt up to (1deg, 2deg)
  const scale = 1 + p * 0.04;
  const rotX = (p - 0.5) * 1.2;
  const rotY = Math.sin(p * Math.PI) * 1.5;

  return (
    <div className="perspective-stage">
      <div
        className="will-change-transform transition-transform duration-700"
        style={{
          transform: `scale(${scale}) rotateX(${rotX}deg) rotateY(${rotY}deg)`,
          transformOrigin: "center center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default CameraStage;
