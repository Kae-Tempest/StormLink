<template>
    <div class="h-screen overflow-y-hidden">
        <NavBar />
        <div class="pl-[8rem] md:pl-[max(0px,15%)]">
            <UserInfo :userid="userid.id" />
            <Posts />
        </div>
    </div>
</template>
<script setup lang="ts">
import UserInfo from '../components/User/UserInfo.vue'
import NavBar from '../components/Navbar/NavBar.vue'
import Posts from '../components/User/Posts.vue'
import type { postType } from '../types/type'
import { usePage } from '@inertiajs/vue3'
import { onMounted, ref } from "vue"
import ky from "ky"

const posts = ref<postType[]>([])
const userid = (usePage().props.params as { id: number })

onMounted(async () => {
    const params = (usePage().props.params as { id: number })
    posts.value = await ky.get(`/postuser/${params.id}`).json()
})

</script>
