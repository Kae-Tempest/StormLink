<template>
  <!-- Extra Large Modal -->
  <div
    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex bg-base-300/75">
    <button @click="$emit('update:modelValue', false)" type="button"
      class="text-red-500 bg-transparent ml-auto text-sm p-1.5 inline-flex items-center absolute top-0 right-0">
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"></path>
      </svg>
      <span class="sr-only">Close modal</span>
    </button>
    <div class="relative w-full h-screen max-w-2xl md:max-w-[1800px] xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl py-5"
      id="modal">
      <!-- Modal content -->
      <div class="relative rounded-sm shadow-lg bg-base-300 h-full border-2 border-secondary">
        <!-- Modal header -->
        <div class="flex items-center border-b-2 border-secondary">
          <div class="flex justify-between w-full">
            <h3 @click="SwitchPostType(1)" class="text-xl mx-auto p-5"
              :class="{ 'text-white': active_el === 1, 'text-white/25': active_el !== 1 }" id="img">IMAGES</h3>
            <hr class="border-l-2 border-secondary h-auto">
            <h3 @click="SwitchPostType(2)" class="text-xl mx-auto p-5"
              :class="{ 'text-white': active_el === 2, 'text-white/25': active_el !== 2 }" id="txt">TEXT</h3>
          </div>
        </div>
        <!-- Modal body -->
        <ImgPostBody v-if="active_el === 1" class="active" />
        <TextPostBody v-else />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TextPostBody from './PostModal/TextPostBody.vue'
import ImgPostBody from './PostModal/ImgPostBody.vue'
import { ref } from 'vue'

let active_el = ref(1)
defineEmits(['update:modelValue'])
const SwitchPostType = (el: number) => { active_el.value = el }
</script>
