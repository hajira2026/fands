import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const Petal = ({
  position,
  scale,
  speed,
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
}) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.z = Math.sin(t * speed) * 0.35;
    ref.current.rotation.x = Math.cos(t * speed * 0.6) * 0.22;
    ref.current.position.y = position[1] + Math.sin(t * speed * 0.55) * 0.28;
    ref.current.position.x = position[0] + Math.cos(t * speed * 0.38) * 0.12;
  });

  return (
    <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh ref={ref} position={position} scale={[scale * 1.1, scale * 0.6, scale * 0.3]}>
        <sphereGeometry args={[0.42, 24, 24]} />
        <meshStandardMaterial
          color="#dcb469"
          emissive="#f6e8bf"
          emissiveIntensity={0.35}
          metalness={0.3}
          roughness={0.58}
          transparent
          opacity={0.38}
        />
      </mesh>
    </Float>
  );
};

const HangingLantern = ({ x }: { x: number }) => {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.z = Math.sin(t * 0.45 + x) * 0.05;
    ref.current.position.y = 2.2 + Math.sin(t * 0.55 + x) * 0.06;
  });

  return (
    <group ref={ref} position={[x, 2.2, -0.4]}>
      <mesh position={[0, 0.72, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 1.4, 8]} />
        <meshStandardMaterial color="#8e6c30" transparent opacity={0.55} />
      </mesh>
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.18, 0.24, 0.48, 8]} />
        <meshStandardMaterial
          color="#f2deb0"
          emissive="#f7ebc7"
          emissiveIntensity={0.95}
          transparent
          opacity={0.62}
        />
      </mesh>
    </group>
  );
};

const Scene3D = () => (
  <div className="pointer-events-none absolute inset-0 -z-[1]">
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.32} color="#f6e8bf" />
        <pointLight position={[0, 3.5, 2.8]} intensity={1.15} color="#f6e8bf" />
        <pointLight position={[2.8, 0.8, 1.5]} intensity={0.32} color="#c89a4f" />
        <pointLight position={[-2.8, 0.6, 1.2]} intensity={0.26} color="#c89a4f" />

        <HangingLantern x={-1.8} />
        <HangingLantern x={1.8} />

        <Petal position={[-2.4, 0.2, -0.8]} scale={0.42} speed={0.5} />
        <Petal position={[-1.3, -1.1, 0.2]} scale={0.34} speed={0.7} />
        <Petal position={[1.5, -0.5, -0.6]} scale={0.38} speed={0.6} />
        <Petal position={[2.4, 0.9, -0.5]} scale={0.32} speed={0.78} />
        <Petal position={[0.4, -1.7, 0.4]} scale={0.36} speed={0.56} />
        <Petal position={[-0.1, 1.4, -0.9]} scale={0.28} speed={0.64} />
      </Suspense>
    </Canvas>
  </div>
);

export default Scene3D;
