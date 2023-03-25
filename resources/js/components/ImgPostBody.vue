<template>
  <div id="ModalBody">
    <div class="text-9xl mt-32 mb-24 text-center w-full">
      <font-awesome-icon :icon="['fas', 'image']" size="2xl" class="text-[#1684C9] rotate-[19deg] z-10 translate-x-10"/>
      <font-awesome-icon :icon="['far', 'circle-play']" size="2xl" class="text-[#D9333C] -rotate-[9deg] z-20 -translate-x-5"/>
    </div>
    <div class="text-center text-3xl">Drag photos and videos here</div>
    <form @submit.prevent="submit" action="">
      <div class="text-center mt-10 text-2xl">
        <label class="bg-ctp-blue rounded-lg py-4 px-7 cursor-pointer">
          <input @input="form.file = $event.target.files[0]" type="file" class="hidden"/> Select from computer
        </label>
      </div>
      <hr class="border border-ctp-blue mt-16">
      <div class="flex">
        <div class="flex flex-col text-2xl my-5 mx-3">
          <label class="py-5">
            <input name="PostSize" type="radio" value="small" v-model="form.size"
                   class="p-2 mr-3.5 ml-1.5 appearance-none rounded-md h-2 w-2
                outline outline-3 outline-ctp-blue outline-offset-4
                checked:inline-block checked:bg-ctp-blue
        ">Small
          </label>
          <label class="py-5">
            <input name="PostSize" type="radio" value="large" v-model="form.size"
                   class="p-2 mr-3.5 ml-1.5 appearance-none rounded-md h-2 w-2
                outline outline-3 outline-ctp-blue outline-offset-4
                checked:inline-block checked:bg-ctp-blue"
            >Large
          </label>
        </div>
        <div class="my-auto ml-16">
        <textarea name="PostDescription" cols="40" rows="5" placeholder="Add Description..." v-model="form.desc"
                  class="bg-ctp-mantle/75 p-2 rounded-xl resize-none shadow-md shadow-ctp-blue caret-ctp-blue
                  focus:ring-2 focus:ring-ctp-blue focus:outline-none focus:shadow-none "
        ></textarea>
        </div>
        <div class="m-auto">
          <button type="submit" class="bg-ctp-blue py-5 px-7 cursor-pointer rounded-lg w-96">POST</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import {reactive} from "vue";
import { Inertia } from '@inertiajs/inertia'

const form = reactive({
  size: null,
  file: null,
  desc: null
})

const submit = async () => {
  await Inertia.post("/postimg", form, {
    forceFormData: true})
}
</script>
