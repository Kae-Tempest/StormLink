<template>
    <div class="bg-ctp-mantle h-screen w-[25%] font-['Arial_Black'] border-y-4 border-r-4 rounded-r-[40px] border-ctp-blue">
        <div class="flex items-center xl:flex xl:flex-col 2xl:flex-col 3xl:flex-row">
            <img src="../../assets/TempestLogo.png" alt="logo" class="h-[123px] w-[123px] mx-auto xl:mx-0">
            <span class="font-bold hidden lg:text-xl xl:block xl:text-2xl">Tempest</span>
        </div>
        <div class="flex flex-col justify-between h-full text-lg" id="navbar">
            <div class="flex flex-col justify-between">
                <TLink href="/" class="py-5 mx-auto">Home</TLink>
                <TLink href="/search" class="py-5 mx-auto">Search</TLink>
                <TLink href="/chat" class="py-5 mx-auto">Chat</TLink>
                <button @click="ShowModal()" class="py-5 mx-auto"> Post</button>
            </div>
            <TLink href="/user/:id" class="mx-auto pb-5">
                User
            </TLink>
        </div>
      <PostModal v-if="showModal" v-model="showModal"/>
    </div>
</template>

<script setup lang="ts">
import PostModal from './PostModal.vue'
import { ref } from 'vue';
let showModal = ref(true)
const ShowModal = async () =>{
  console.log('24')
  showModal.value = true
}
</script>

<style>
:root{
    --NameWidth: 123px;
}
#navbar{
    height: calc(95% - var(--NameWidth));
}
</style>
