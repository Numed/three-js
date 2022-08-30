import { Canvas } from "@react-three/fiber";

const Capsule = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh>
        <boxGeometry args={[2, 2, 5]} />
        <capsuleGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
};

export default Capsule;
