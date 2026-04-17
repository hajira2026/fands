import { ReactNode } from "react";
import { useScrollCamera } from "@/hooks/useScrollCamera";
import { useIsMobile } from "@/hooks/use-mobile";

const CameraStage = ({ children }: { children: ReactNode }) => {
  const p = useScrollCamera();
  const isMobile = useIsMobile();

  const scale = 1 + p * (isMobile ? 0.012 : 0.04);
  const rotX = isMobile ? 0 : (p - 0.5) * 1.2;
  const rotY = isMobile ? Math.sin(p * Math.PI) * 0.45 : Math.sin(p * Math.PI) * 1.5;

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
