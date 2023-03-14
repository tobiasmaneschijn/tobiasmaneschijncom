import * as THREE from 'three';

const vertexShader = `
  varying vec3 vUv;

  void main() {
    vUv = position;
    vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewPosition;
  }
`;

const fragmentShader = `
  uniform vec2 u_resolution;
  varying vec3 vUv;

  vec3 getColor(float progress) {
    vec3 color = mix(vec3(0.0, 1.0, 0.0), vec3(1.0, 0.0, 0.0), progress);
    return color;
  }

  void main() {
    float progress = smoothstep(0.0, 1.0, vUv.y / u_resolution.y);
    gl_FragColor = vec4(getColor(progress), 1.0);
  }
`;

export const GradientShaderMaterial = new THREE.ShaderMaterial({
  uniforms: {
    u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
  },
  vertexShader,
  fragmentShader,
});