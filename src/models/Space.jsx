import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import scene from "../assets/3d/space.glb";

const Space = ({ currentAnimation, ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log(actions);
  }, [actions, currentAnimation]);

  return null;
};

export default Space;
