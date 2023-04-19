import React from 'react';
import { Canvas } from 'react-three-fiber';

function Halo(props) {
  return (
    <mesh {...props}>
      <circleBufferGeometry attach="geometry" args={[1, 64]} />
      <meshStandardMaterial
        attach="material"
        color="gold"
        emissive="white"
        emissiveIntensity={1}
        metalness={1}
        roughness={0}
      />
    </mesh>
  );
}

function Background() {
  return (
    <mesh position={[0, 0, -5]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" color="black" />
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <pointLight
        position={[0, 0, 5]}
        color="white"
        intensity={2}
        distance={10}
      />
      <Halo position={[0, 0, 0]} />
      <Background />
    </Canvas>
  );
}

export default App;
