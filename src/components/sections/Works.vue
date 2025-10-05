<template>
  <section id="works" class="common-padding mb-20">
    <div class="flex flex-col">
      <h3
        id="selectedWorks"
        v-html="selectedWorks"
        class="heading-1 text-start leading-none font-bold uppercase"
      ></h3>
      <p
        class="heading-1 text-flax-smoke-400 text-opacity-50 hidden w-4/5 text-end font-extrabold sm:block"
      >
        ( {{ selectedWorksProps.length }} )
      </p>

      <div
        id="selected-works-text"
        class="md:column-gap text-flax-smoke-300 mt-[5%] grid grid-cols-12 justify-end opacity-0 lg:grid"
      >
        <p
          class="heading-6 text-flax-smoke-300/85 col-span-4 text-center text-nowrap lg:col-start-2"
        >
          (
          <span class="inline sm:hidden">{{ selectedWorksProps.length }} </span>
          PROJECTS )
        </p>
        <p
          class="heading-4 font-fancy col-span-8 w-full text-balance sm:font-semibold lg:col-span-7"
        >
          A collection of intelligent systems designed to make technology truly human.
        </p>
      </div>
    </div>

    <div
      class="sm:column-gap relative mt-12 grid size-full grid-cols-12 lg:mt-[10%]"
    >
      <div
        class="text-flax-smoke-100 sticky top-12 col-span-5 hidden h-fit w-full overflow-hidden text-[22vw] leading-[0.8] font-semibold md:flex"
      >
        <span class="font-title! relative -tracking-wider">0</span>
        <span
          id="index"
          class="font-title! relative -tracking-wider will-change-transform"
          >{{ index + 1 }}.</span
        >
      </div>
      <aside
        @mouseenter="showCursor"
        @mouseleave="hideCursor"
        class="relative col-span-full flex flex-col space-y-10 md:col-span-7"
      >
        <div
          v-for="(work, i) in selectedWorksProps"
          :key="i"
          class="work-card @container"
          @mouseenter="updateCursorText(work.name)"
        >
          <div class="group">
            <div
              class="flex-center relative aspect-square overflow-clip rounded-lg border-2 border-dashed border-flax-smoke-400"
            >
              <div
                class="flex-center z-10 aspect-4/3 size-full overflow-clip rounded-lg object-cover"
              >
                <!-- autoplay="false" -->
                <video
                  v-if="!work.videoSrc.endsWith('.gif')"
                  ref="videoRefs"
                  :src="work.videoSrc"
                  muted
                  :autoplay="false"
                  type="video/webm"
                  :class="(work.name === 'Vision AI' || work.name === 'Data Labeling') ? 'h-full w-auto rounded-md object-cover transition-all duration-500 ease-in-out' : 'size-[85%] rounded-md object-contain transition-all duration-500 ease-in-out'"
                ></video>
                <img
                  v-else
                  :src="work.videoSrc"
                  alt="work preview"
                  class="size-[85%] rounded-md object-contain transition-all duration-500 ease-in-out"
                />
              </div>
            </div>
            <div>
              <p class="heading-6 font-title! mt-[2%] mb-[1%] leading-none">
                {{ work.category }}
              </p>
              <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h3 class="heading-3 font-title! font-bold uppercase">
                  {{ work.name }}
                </h3>
                <div class="flex flex-wrap gap-1.5 select-none">
                  <p
                    class="border-flax-smoke-300 hover:bg-flax-smoke-300 hover:text-flax-smoke-900 rounded-full border px-3 py-1.5 text-sm transition-[background-color,color] duration-500 ease-in-out whitespace-nowrap"
                    v-for="tag in work.tags"
                    :key="tag"
                  >
                    <span>{{ tag }}</span>
                  </p>
                  <p
                    class="border-flax-smoke-300 bg-flax-smoke-300 text-flax-smoke-900 hover:text-flax-smoke-300 rounded-full border px-3 py-1.5 text-sm transition-[background-color,color] duration-500 ease-in-out hover:bg-transparent whitespace-nowrap"
                  >
                    <span>{{ work.year }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { computed, onBeforeMount, onMounted, ref, useTemplateRef } from 'vue';
  import gsap from 'gsap';
  import { useWindowSize } from '@vueuse/core';
  import { work1, work2, work3, work4, work5 } from '@/assets/videos';
  import { workBg1, workBg2, workBg3, workBg4, workBg5 } from '@/assets/images';
  const videoRefs = useTemplateRef<HTMLVideoElement[]>('videoRefs');

  const isSmallScreen = computed(() => {
    return useWindowSize().width.value < 768;
  });
  const index = ref(0);
  const selectedWorks = ref('Selected Projects /');

  const tl = gsap
    .timeline({ defaults: { duration: 0.25 } })
    .to(['#cursor', '#inner'], {
      scale: 1,
      opacity: 1,
    })
    .paused(true);

  const showCursor = () => {
    tl.play();
  };
  const hideCursor = () => {
    tl.reverse();
  };

  const updateCursorText = (name: string) => {
    const cursorText = document.querySelector('#inner p');
    const cursor = document.querySelector('#cursor');
    if (cursorText) {
      cursorText.textContent = name;
      
      // Calculate width based on text length
      const textLength = name.length;
      const estimatedWidth = Math.max(6, textLength * 0.6 + 2); // minimum 6rem, scale with text
      
      if (cursor) {
        (cursor as HTMLElement).style.width = `${estimatedWidth}rem`;
      }
    }
  };

  const selectedWorksProps = [
    {
      name: 'Vision AI',
      category: 'Computer Vision – Visual Inspection & Anomaly Detection',
      tags: ['Anomaly Detection', 'Computer Vision', 'Deep Learning'],
      videoSrc: work5,
      imageBg: workBg5,
      url: 'https://github.com/dijwar/vision-ai',
      year: '2025',
    },
    {
      name: 'Teknofest',
      category: 'Computer Vision – Vehicle & Person Detection from Drone Footage',
      tags: ['Computer Vision', 'AI', 'Detection'],
      videoSrc: work2,
      imageBg: workBg2,
      url: 'https://github.com/dijwar/teknofest-detection',
      year: '2024',
    },
    {
      name: 'CBT',
      category: 'AI-Driven Cybersecurity – Threat Detection & Analysis Tool',
      tags: ['AI', 'Cybersecurity', 'Threat Detection'],
      videoSrc: work3,
      imageBg: workBg3,
      url: 'https://github.com/dijwar/axon',

      year: '2023',
    },
    {
      name: 'Data Labeling',
      category: 'Computer Vision – Vehicle, Person & Custom Class Detection: Data Collection, Labeling & Model Training',
      tags: ['Computer Vision', 'Data Labeling', 'Model Training'],
      videoSrc: work4,
      imageBg: workBg4,
      url: 'https://github.com/dijwar/data-labeling',
      year: '2023',
    },
    {
      name: 'Interactive Avatar',
      category: 'Voice & Video Enabled',
      tags: ['AI', 'Computer Vision', 'Voice AI'],
      videoSrc: work1,
      imageBg: workBg1,
      url: 'https://github.com/dijwar/interactive-avatar',
      year: '2025',
    },
  ];

  // Reusable function to handle forward scroll animation
  const createForwardTimeline = (
    index: any,
    i: any,
    selectedWorksProps: any[],
  ) => {
    const tl = gsap.timeline({
      defaults: { duration: 0.3 },
    });

    // Set and move the #index element
    tl.set('#index', {
      yPercent: 100,
      onComplete: () => {
        index.value = Math.min(i, selectedWorksProps.length - 1);
      },
    }).to('#index', {
      yPercent: 0,
      ease: 'power1.inOut',
    });

    return tl;
  };

  // Reusable function to handle backward scroll animation
  const createBackwardTimeline = (index: any, i: any) => {
    const tl = gsap.timeline({ defaults: { duration: 0.3 } });

    // Set and move the #index element
    tl.set('#index', {
      yPercent: -100,
      onComplete: () => {
        index.value = Math.max(i, 0);
      },
    }).to('#index', {
      yPercent: 0,
      duration: 0.3,
      ease: 'power1.inOut',
    });

    return tl;
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const video = entry.target as HTMLVideoElement;
      if (entry.isIntersecting) {
        video.play();
        video.classList.remove('blur');
      }
    });
  };

  const stopAllVideos = () => {
    videoRefs.value?.map((video: HTMLVideoElement) => {
      if (video && !video.paused) {
        video.pause();
        video.currentTime = 0; // Reset video to the start
      }
    });
  };
  onBeforeMount(() => {
    selectedWorks.value = textSplitterIntoChar('Selected Works / ', true);
  });

  onMounted(() => {
    stopAllVideos();

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.75, // Trigger when 75% of the video is visible
    });

    // Observe each video element
    videoRefs.value?.forEach((video) => {
      observer.observe(video);
    });

    animateSplitText(
      '#selectedWorks .letters',
      '#selected-works-text',
      0.7,
      0.01,
      0,
    );

    // Apply GSAP animations to each div
    if (!isSmallScreen.value)
      gsap.utils.toArray('.work-card').forEach((div: any, i: any) => {
        gsap.timeline({ defaults: { duration: 0.7 } }).to(div, {
          scrollTrigger: {
            trigger: div,
            // start: 'top 40%',
            start: 'top 25%',
            // end: 'bottom 40%',
            end: 'bottom 25%',
            scrub: 0.01,
            // markers: true,
            onLeaveBack: () => {
              // Backward scroll animation
              if (index.value !== 0) {
                gsap.to('#index', {
                  yPercent: 100,
                  duration: 0.3,
                  ease: 'power4.inOut',
                  onComplete: () => {
                    createBackwardTimeline(index, i - 1);
                  },
                });
              }
            },
          },
          ease: 'power1.inOut',
          onComplete: () => {
            // Forward scroll animation
            if (index.value !== selectedWorksProps.length - 1) {
              gsap.to('#index', {
                yPercent: -100,
                duration: 0.3,
                ease: 'power4.inOut',
                onComplete: () => {
                  createForwardTimeline(index, i + 1, selectedWorksProps);
                },
              });
            }
          },
        });
      });
  });
</script>
