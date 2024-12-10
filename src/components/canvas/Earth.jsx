import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = ({ isMobile }) => {
  const earth = useGLTF("./log_cabin/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.4}
        penumbra={1}
        rotation={true}
        intensity={1}
        castShadow
        shadow-mapSize={102}
      />
      <pointLight intensity={1} />
      <primitive
        object={earth.scene}
        position-y={0}
        rotation-y={0}
        scale={isMobile ? 0.008 : 0.007}
        position={[0, isMobile ? -3 : -0.5, -0.5]}
        rotation={[-0.06, 0.1, -0.1]}
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches); // Set initial value
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 3]}
      camera={{ position: [35, 3, 5], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 3}
        />
        <Earth isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
