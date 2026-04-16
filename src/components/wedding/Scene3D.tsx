import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from "three";

const GoldRing = ({ radius, tubeRadius, rotationSpeed, tilt }: { radius: number; tubeRadius: number; rotationSpeed: number; tilt: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * rotationSpeed * 0.3;
      ref.current.rotation.y += delta * rotationSpeed;
    }
  });
  return (
    <mesh ref={ref} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, tubeRadius, 32, 200]} />
      <meshStandardMaterial color="#D4AF37" emissive="#F5E6A8" emissiveIntensity={0.4} metalness={1} roughness={0.2} />
    </mesh>
  );
};

const Dome = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.05;
  });
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={ref} position={[0, -0.4, 0]}>
        <sphereGeometry args={[1.6, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial
          color="#0F2E2A"
          emissive="#D4AF37"
          emissiveIntensity={0.15}
          metalness={0.9}
          roughness={0.25}
          wireframe
        />
      </mesh>
    </Float>
  );
};

/** Subtle background 3D scene — gold rings + wireframe dome + stars. Pointer-events disabled. */
const Scene3D = () => (
  <div className="pointer-events-none absolute inset-0 -z-[1]">
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#F5E6A8" />
        <pointLight position={[-5, -3, 2]} intensity={0.6} color="#D4AF37" />
        <Stars radius={50} depth={40} count={800} factor={2} fade speed={0.3} />
        <Dome />
        <GoldRing radius={2.4} tubeRadius={0.008} rotationSpeed={0.15} tilt={Math.PI / 3} />
        <GoldRing radius={2.8} tubeRadius={0.006} rotationSpeed={0.1} tilt={Math.PI / 2.2} />
        <GoldRing radius={3.2} tubeRadius={0.005} rotationSpeed={0.08} tilt={Math.PI / 1.8} />
      </Suspense>
    </Canvas>
  </div>
);

export default Scene3D;
