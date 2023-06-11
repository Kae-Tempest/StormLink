<template>
    <div
        class="hidden lg:block fixed z-20 inset-0 left-0 right-auto w-[19.5rem] pb-10 px-8 bg-ctp-mantle border-y-4 border-r-4 rounded-r-[40px] border-ctp-blue">
        <nav class="lg:text-sm lg:leading-6 relative" id="nav">
            <TLink href="/" class="flex items-center xl:flex xl:flex-col 2xl:flex-col 3xl:flex-row">
                <img src="../../../assets/TempestLogo.png" alt="logo"
                    class="h-[123px] w-[123px] 3xl:h-[100px] 3xl:w-[100px] mx-auto xl:mx-0">
                <span class="font-bold hidden lg:text-xl xl:block xl:text-2xl">Tempest</span>
            </TLink>
            <div class="flex flex-col justify-between h-full text-lg" id="navbar">
                <div class="flex flex-col justify-between">
                    <TLink href="/" class="py-5 mx-auto">Home</TLink>
                    <TLink href="/search" class="py-5 mx-auto">Search</TLink>
                    <TLink href="/chat" class="py-5 mx-auto">Chat</TLink>
                    <button @click="ShowModal()" class="py-5 mx-auto"> Post</button>
                </div>
                <TLink v-if="!connect" href="/login" class="mx-auto pb-5">Login</TLink>
                <TLink v-else href="/user/:id" class="mx-auto pb-5">
                    User
                </TLink>
            </div>
            <PostModal v-if="showModal" v-model="showModal" />
        </nav>
    </div>
</template>

<script setup lang="ts">
import PostModal from './PostModal.vue'
import { ref } from 'vue';

let showModal = ref(false)
let connect = ref(false)
const ShowModal = async () => {
    showModal.value = true
}
</script>

<style>
:root {
    --NameWidth: 123px;
}

#navbar {
    height: calc(100vh - var(--NameWidth));
}
</style>
