<template>
  <div
    ref="magneticElement"
      class="fixed top-16 left-4 sm:top-20 sm:left-6 md:top-24 md:left-8 z-50 cursor-pointer"
    @click="openCV"
    @mouseenter="showTooltip = true"
    @mouseleave="showTooltip = false"
  >
    <!-- Magnetic Circle with Video -->
    <div
      ref="circle"
      class="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-flax-smoke-300 bg-flax-smoke-50 shadow-lg transition-all duration-300 ease-out"
      :style="{ transform: `translate(${magneticX}px, ${magneticY}px)` }"
    >
      <!-- Video Background -->
      <video
        ref="video"
        class="w-full h-full object-cover"
        autoplay
        muted
        loop
        playsinline
      >
        <source :src="abim" type="video/mp4" />
      </video>
    </div>

    <!-- Tooltip -->
    <div
      v-if="showTooltip"
      class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 sm:px-3 sm:py-1 bg-flax-smoke-800 text-flax-smoke-100 text-xs sm:text-sm rounded-md whitespace-nowrap pointer-events-none"
    >
      CV
      <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-flax-smoke-800"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { abim } from '@/assets/videos';

const magneticElement = ref<HTMLElement>();
const circle = ref<HTMLElement>();
const video = ref<HTMLVideoElement>();
const showTooltip = ref(false);
const magneticX = ref(0);
const magneticY = ref(0);

let targetX = 0;
let targetY = 0;
let animationId: number;

const handleMouseMove = (e: MouseEvent) => {
  if (!magneticElement.value) return;
  
  const rect = magneticElement.value.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  const deltaX = e.clientX - centerX;
  const deltaY = e.clientY - centerY;
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  
  // Magnetic effect radius - responsive
  const isMobile = window.innerWidth < 768;
  const maxDistance = isMobile ? 80 : 100;
  
  if (distance < maxDistance) {
    const strength = (maxDistance - distance) / maxDistance;
    targetX = deltaX * strength * 0.3;
    targetY = deltaY * strength * 0.3;
  } else {
    targetX = 0;
    targetY = 0;
  }
};

const handleTouchMove = (e: TouchEvent) => {
  if (!magneticElement.value || e.touches.length === 0) return;
  
  const touch = e.touches[0];
  const rect = magneticElement.value.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  const deltaX = touch.clientX - centerX;
  const deltaY = touch.clientY - centerY;
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  
  // Magnetic effect radius - responsive for touch
  const maxDistance = 60; // Smaller radius for touch
  
  if (distance < maxDistance) {
    const strength = (maxDistance - distance) / maxDistance;
    targetX = deltaX * strength * 0.2; // Reduced strength for touch
    targetY = deltaY * strength * 0.2;
  } else {
    targetX = 0;
    targetY = 0;
  }
};

const animate = () => {
  magneticX.value += (targetX - magneticX.value) * 0.1;
  magneticY.value += (targetY - magneticY.value) * 0.1;
  animationId = requestAnimationFrame(animate);
};

const openCV = () => {
  window.open('/orhan-ekinci-cv.pdf', '_blank');
};

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('touchmove', handleTouchMove);
  animate();
});

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('touchmove', handleTouchMove);
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
});
</script>
