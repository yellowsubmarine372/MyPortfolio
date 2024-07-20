import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import enduranceModel from "../assets/3d/endurance.glb";

const Endurance = ({ scale = 0.006, position = [5, 1.6, -0.6], ...props }) => {
  const ref = useRef();
  const { scene } = useGLTF(enduranceModel);

  return (
    <mesh {...props} ref={ref} scale={scale} position={position}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Endurance;
