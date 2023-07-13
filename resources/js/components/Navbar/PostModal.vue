<template>
  <button class="btn btn-ghost text-lg my-2.5" onclick="postmodal.showModal()">Post</button>
  <dialog id="postmodal" class="modal text-white bg-base-300/50">
    <div v-if="props.errors">
      <AlertError :error="props.errors" />
    </div>
    <form method="dialog"
      class="modal-box w-11/12 max-w-7xl h-fit p-2 bg-base-300 border-2 border-secondary overflow-hidden">
      <div class="relative rounded-sm shadow-lg h-full pb-6">
        <div class="flex items-center border-b-2 border-secondary">
          <div class="flex justify-between w-full">
            <h3 @click="SwitchPostType(1)" class="text-xl mx-auto p-5"
              :class="{ 'text-white': active_el === 1, 'text-white/25': active_el !== 1 }" id="img">IMAGES</h3>
            <hr class="border-l-2 border-secondary h-auto mb-2">
            <h3 @click="SwitchPostType(2)" class="text-xl mx-auto p-5"
              :class="{ 'text-white': active_el === 2, 'text-white/25': active_el !== 2 }" id="txt">TEXT</h3>
          </div>
        </div>
        <ImgPostBody v-if="active_el === 1" class="active" :userId="props.user.id"/>
        <TextPostBody v-else :userId="props.user.id"/>
      </div>
      <div class="modal-action">
        <button class="btn btn-ghost border-none outline-none text-red-500 text-sm p-1.5 absolute top-0 right-0">
          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </form>
  </dialog>
</template>

<script lang="ts" setup>
import TextPostBody from './PostModal/TextPostBody.vue'
import ImgPostBody from './PostModal/ImgPostBody.vue'
import { ref } from 'vue'
import AlertError from "./PostModal/AlertError.vue";

const props = defineProps({ errors: Object, user: Object})

let active_el = ref(1)
const SwitchPostType = (el: number) => { active_el.value = el }
</script>
