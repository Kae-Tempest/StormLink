<template>
    <div
        class="fixed z-20 inset-0 left-0 right-auto w-[max(0px,15%)] min-w-[20%] md:min-w-[15%] pb-10 2xl:px-8 bg-base-300 border-r-2 border-secondary">
        <nav class="lg:text-sm lg:leading-6 relative flex flex-col short:justify-between h-screen" id="nav">
            <TLink href="/" class="flex items-center xl:flex-col 3xl:flex-row">
                <img src="../../../assets/TempestLogo.png" alt="logo"
                    class="h-[123px] w-[123px] 3xl:h-[100px] 3xl:w-[100px] mx-auto xl:mx-0">
                <span class="font-bold hidden lg:text-xl xl:block xl:text-2xl">STORM</span>
            </TLink>
            <div class="short:text-sm flex flex-col text-xl flex-grow">
                <TLink href="/" class="py-5 mx-auto">Home</TLink>
                <TLink href="/search" class="py-5 mx-auto">Search</TLink>
                <TLink href="/chat" class="py-5 mx-auto">Chat</TLink>
                <button @click="ShowModal()" class="py-5 mx-auto"> Post</button>
            </div>
            <div class="h-16 w-16 mx-auto mb-8 short:mb-2" @click="ShowMenu()">
                <img v-if="($page.props.currentUser as user).avatar" class="border rounded-full">
                <img v-else src="../../../assets/defaultUser.png" alt="" class="border rounded-full short:w-10 mx-auto">
            </div>
            <PostModal v-if="showModal" v-model="showModal" />
            <MenuModal v-if="showMenu" v-model="showMenu" />
        </nav>
    </div>
</template>

<script setup lang="ts">
import PostModal from './PostModal.vue'
import MenuModal from './MenuModal.vue'
import { ref } from 'vue';
import type { user } from '../../types/type'

let showModal = ref(false)
let showMenu = ref(false)

const ShowMenu = async () => {
    showMenu.value = !showMenu.value
}
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
