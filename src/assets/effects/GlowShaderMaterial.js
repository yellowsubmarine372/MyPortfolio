import * as THREE from "three";
import { extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

const GlowShaderMaterial = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color(0.5, 0.5, 1.0),
  },
  // Vertex Shader
  `
  uniform float time;
  void main() {
    vec3 transformed = position;
    float glow = sin(time + length(position.xy) * 10.0) * 0.5 + 0.5;
    transformed.xy *= (1.0 + glow * 0.2);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
  }
  `,
  // Fragment Shader
  `
  uniform vec3 color;
  void main() {
    gl_FragColor = vec4(color, 1.0);
  }
  `
);

extend({ GlowShaderMaterial });
export { GlowShaderMaterial };
