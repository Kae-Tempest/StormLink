<template>
    <div
        class="fixed z-20 inset-0 left-0 right-auto w-[max(0px,15%)] min-w-[20%] md:min-w-[15%] pb-10 2xl:px-8 bg-base-300 border-r-2 border-secondary">
        <nav class="lg:text-sm lg:leading-6 relative flex flex-col short:justify-between h-screen" id="nav">
            <TLink href="/" class="flex items-center md:flex-col xl:flex-row">
                <img src="../../../assets/TempestLogo.png" alt="logo" class="h-28 w-28 3xl:h-241 3xl:w-241 mx-auto xl:mx-0">
                <span class="font-bold hidden lg:text-xl xl:block xl:text-2xl 3.5xl:mx-auto 3.5xl:text-3xl">STORM</span>
            </TLink>
            <div class="short:text-sm flex flex-col text-xl flex-grow">
                <TLink href="/" class="py-5 mx-auto">Home</TLink>
                <TLink href="/search" class="py-5 mx-auto">Search</TLink>
                <TLink href="/chat" class="py-5 mx-auto">Chat</TLink>
                <button @click="ShowModal()" class="py-5 mx-auto"> Post</button>
            </div>
            <div class="h-16 w-16 mx-auto mb-8 short:mb-2" @click="ShowMenu()">
                <img v-if="($page.props.currentUser as userType).avatar" alt="" src="" class="border rounded-full">
                <img v-else src="../../../assets/defaultUser.png" alt="" class="border rounded-full short:w-10 mx-auto">
            </div>
            <PostModal v-if="showModal" v-model="showModal" />
            <MenuModal v-if="showMenu" v-model="showMenu" />
        </nav>
    </div>
</template>

<script setup lang="ts">
import type { userType } from '../../types/type'
import PostModal from './PostModal.vue'
import MenuModal from './MenuModal.vue'
import { ref } from 'vue'

let showModal = ref(false)
let showMenu = ref(false)

const ShowMenu = async () => { showMenu.value = !showMenu.value }
const ShowModal = async () => { showModal.value = true }
</script>