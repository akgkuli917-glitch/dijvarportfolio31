<template>
  <section class="padding-x mb-[-100svh] py-0">
    <div
      id="hero"
      class="sticky top-0 z-0 flex min-h-svh w-full items-end pb-[clamp(2.25rem,2.1786rem_+_0.3571vi,2.5rem)]"
    >
      <div class="relative flex w-full flex-col items-center">
        <div class="w-full items-end overflow-clip mb-8 sm:mb-12 lg:mb-16">
          <div class="flex w-full items-start justify-end gap-4 sm:gap-6 lg:gap-10">
            <Star id="star" class="hide-on-mobile flex-shrink-0" />
          </div>
        </div>

        <div class="lg:column-gap spacing-t grid w-full grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          <div
            class="col-span-full flex flex-col items-start gap-8 sm:gap-10 lg:gap-14 sm:col-span-4"
          >
            <div class="overflow-hidden">
              <svg
                id="down-arrow"
                stroke="currentColor"
                fill="none"
                stroke-width="1.25"
                viewBox="6 6 12 12"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="hide-on-mobile m-0 size-4 -translate-x-full p-0 md:size-6"
                color="#8C8C73"
                style="color: #8c8c73"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="7" y1="7" x2="17" y2="17"></line>
                <polyline points="17 7 17 17 7 17"></polyline>
              </svg>
            </div>

            <p class="sr-only">
              A freelance full-stack and AI developer with global experience, I craft end-to-end digital solutions that merge intelligent automation with seamless user experiences. From building scalable web and mobile applications to deploying production-ready LLMs, chatbots, and vision-based AI systems, I bring cutting-edge technology to real-world challenges across industries.
            </p>
            <p
              v-html="whoAmI"
              id="whoAmI"
              class="who-am-i heading-5 w-full max-w-[30ch] overflow-clip leading-snug font-medium text-balance sm:max-w-[37ch] lg:text-start"
            ></p>

            <div class="relative origin-left overflow-hidden sm:scale-150">
              <div id="contact-btn" class="flex -translate-y-full">
                <!-- <Button
                  :data-cal-namespace="dataCalNamespace"
                  :data-cal-link="dataCalLink"
                  :data-cal-config="dataCalConfig"
                  class="contact"
                  label="Get in touch"
                /> -->
                <Button label="Get in touch" url="https://www.linkedin.com/in/dijvar/" />
              </div>
            </div>
          </div>

          <div
            id="profile-container"
            class="relative col-span-4 mt-8 h-[20vh] max-w-lg flex-col rounded-lg select-none sm:mt-0 sm:h-full md:flex md:h-[40vh] lg:h-[45vh]"
          >
            <div class="overlay bg-flax-smoke-50 absolute inset-0 z-2"></div>
            <img
              id="profile-img"
              :src="profile"
              alt="Orhan Dijvar Ekinci profile"
              class="size-full scale-90 rounded-lg object-cover object-center brightness-110 grayscale"
            />
          </div>

          <!-- content-end justify-self-end  -->
          <div
            class="relative col-span-8 size-full overflow-clip text-end sm:col-span-4"
          >
            <div
              id="available-for-work"
              class="absolute right-0 bottom-0 flex translate-y-full flex-col items-end mt-4 sm:mt-6 lg:mt-8"
            >
              <p
                class="3xl:text-base block leading-snug font-medium -tracking-tight uppercase"
              >
                OPEN TO AI ENGINEER ROLES
              </p>
              <h3
                class="3xl:heading-1 heading-1-alt font-fancy block leading-none font-bold -tracking-tight"
              >
                SEPT '25
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-svh"></div>
  </section>
</template>

<script setup lang="ts">
  import { onBeforeMount, ref } from 'vue';
  import { Star } from '../design';
  import { Button } from '@/components/common';
  import { profile } from '@/assets/images';
  import { textSplitterIntoChar } from '@/functions';
  // import { dataCalConfig, dataCalLink, dataCalNamespace } from '@/data';

  const whoAmI = ref(
    'A freelance full-stack and AI developer with global experience, I craft end-to-end digital solutions that merge intelligent automation with seamless user experiences. From building scalable web and mobile applications to deploying production-ready LLMs, chatbots, and vision-based AI systems, I bring cutting-edge technology to real-world challenges across industries.',
  );

  onBeforeMount(() => {
    whoAmI.value = textSplitterIntoChar(whoAmI.value);
  });
</script>
