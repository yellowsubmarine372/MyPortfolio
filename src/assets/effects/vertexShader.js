// vertexShader.js
export const vertexShader = `
  varying vec3 vColor;
  varying vec3 vPosition;

  void main() {
    vColor = color;
    vPosition = position;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = 2.0 * (1.0 / - mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;
