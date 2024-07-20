import { useState, Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import HomeInfo from "../components/HomeInfo";

import { Space } from "../models/Space";
import Endurance from "../models/Endurance";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(5);

  const adjustSpaceForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [15, -2, -30]; // Z축 위치를 변경하여 모델과의 거리를 조정
    let rotation = [Math.PI / 10, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.02, 0.02, 0.02];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [spaceScale, spacePosition, spaceRotation] = adjustSpaceForScreenSize();

  return (
    <section className="relative w-full h-screen">
      <div className="absolute left-0 right-0 z-10 flex items-center justify-center top-32">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{
          position: [-2, -0.2, 3.5], // 카메라를 좀 더 멀리 배치
          fov: 80, // 카메라의 시야를 넓혀서 모델이 더 잘 보이도록 함
          near: 0.1,
          far: 1000,
        }}
        style={{ background: "black" }} // 배경 색상 검정색 설정
      >
        <Suspense fallback={<Loader />}>
          <Space
            position={spacePosition}
            scale={spaceScale}
            rotation={spaceRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <directionalLight position={[10, 10, 5]} intensity={2} />
          <ambientLight intensity={0.1} />
          <hemisphereLight skyColor="#b1e1ff" groundColor={"#000000"} />
          <Endurance />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
