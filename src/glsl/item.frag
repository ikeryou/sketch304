uniform float rate;
uniform float rate2;
uniform float time;
uniform float circle;
uniform vec3 color;
uniform vec3 color2;
uniform vec2 center;

varying vec2 vUv;


void main(void) {
  float d = distance(vUv, center);
  float a = mix(step(rate, d), 1.0 - step(rate, d), circle);
  if(a <= 0.01) {
    discard;
  }
  // gl_FragColor = vec4(mix(color, color2, step(rate + sin(vUv.x * 100.1 + time * 0.01) * 0.1, d)), a);
  gl_FragColor = vec4(mix(color, color2, step(rate2, d)), a);
}
