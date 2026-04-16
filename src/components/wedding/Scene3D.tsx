import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/** Soft floating gold petals — Mughal floral wedding vibe (no stars/space feel). */
const Petal = ({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.z = Math.sin(t * speed) * 0.4;
    ref.current.rotation.x = Math.cos(t * speed * 0.7) * 0.3;
    ref.current.position.y = position[1] + Math.sin(t * speed * 0.5) * 0.3;
  });
  return (
    <Float speed={0.6} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={ref} position={position} scale={scale}>
        {/* Petal shape via flattened sphere */}
        <sphereGeometry args={[0.4, 24, 24]} />
        <meshStandardMaterial
          color="#D4AF37"
          emissive="#F5E6A8"
          emissiveIntensity={0.5}
          metalness={0.7}
          roughness={0.35}
          transparent
          opacity={0.55}
        />
      </mesh>
    </Float>
  );
};

/** Mughal-style ornamental ring — like a wedding henna motif. */
const HennaRing = ({ radius, tubeRadius, tilt, speed }: { radius: number; tubeRadius: number; tilt: number; speed: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed;
  });
  return (
    <mesh ref={ref} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, tubeRadius, 16, 120]} />
      <meshStandardMaterial color="#D4AF37" emissive="#F5E6A8" emissiveIntensity={0.35} metalness={0.9} roughness={0.25} transparent opacity={0.5} />
    </mesh>
  );
};

/** Glowing soft orb — like a hanging chandelier light at a wedding hall. */
const Chandelier = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.position.y = 1.2 + Math.sin(t * 0.4) * 0.1;
  });
  return (
    <mesh ref={ref} position={[0, 1.2, 0]}>
      <sphereGeometry args={[0.35, 32, 32]} />
      <meshStandardMaterial color="#F5E6A8" emissive="#F5E6A8" emissiveIntensity={1.2} transparent opacity={0.7} />
    </mesh>
  );
};

/** Background 3D scene — warm Nikah wedding vibe. Soft chandelier glow, floating gold petals, henna rings. */
const Scene3D = () => (
  <div className="pointer-events-none absolute inset-0 -z-[1]">
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} color="#F5E6A8" />
        <pointLight position={[0, 4, 3]} intensity={1.4} color="#F5E6A8" />
        <pointLight position={[-4, -2, 2]} intensity={0.5} color="#D4AF37" />

        <Chandelier />

        {/* Floating gold petals scattered in 3D space */}
        <Petal position={[-2.2, 0.6, 0]} scale={0.5} speed={0.6} />
        <Petal position={[2.0, -0.4, -1]} scale={0.4} speed={0.8} />
        <Petal position={[-1.5, -1.2, 1]} scale={0.35} speed={0.5} />
        <Petal position={[1.8, 1.0, 0.5]} scale={0.45} speed={0.7} />
        <Petal position={[0.3, -1.8, -0.5]} scale={0.4} speed={0.55} />
        <Petal position={[-2.6, -0.2, -1.5]} scale={0.3} speed={0.9} />
        <Petal position={[2.6, 1.6, -0.8]} scale={0.35} speed={0.65} />

        {/* Mughal henna rings */}
        <HennaRing radius={2.2} tubeRadius={0.005} tilt={Math.PI / 2.5} speed={0.05} />
        <HennaRing radius={2.6} tubeRadius={0.004} tilt={Math.PI / 2}   speed={-0.04} />
        <HennaRing radius={3.0} tubeRadius={0.003} tilt={Math.PI / 1.8} speed={0.03} />
      </Suspense>
    </Canvas>
  </div>
);

export default Scene3D;
