import './style.css';
import App from './App.vue';
import { createApp } from 'vue';
import Lenis from 'lenis';

// smooth scroll
const lenis = new Lenis({
  duration: 0.8,
});

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

const app = createApp(App);
app.mount('#app');

// Start the animation loop after a short delay to ensure DOM is ready
setTimeout(() => {
  requestAnimationFrame(raf);
}, 100);

export { raf, lenis };
