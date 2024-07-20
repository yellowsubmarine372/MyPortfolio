// fragmentShader.js
export const fragmentShader = `
  uniform vec3 emissive;
  uniform float emissiveIntensity ;
  varying vec3 vColor;
  varying vec3 vPosition;

  void main() {
    float radius = length(vPosition);
    float outerRadius = 1000.0; // 은하의 외각 영역 반경 (필요에 따라 조정)
    vec3 color = vColor;

    if (radius > outerRadius) {
      color *= emissive * emissiveIntensity;
    }

    gl_FragColor = vec4(color, 1.0);
  }
`;
