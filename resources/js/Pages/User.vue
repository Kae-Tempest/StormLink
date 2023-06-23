<template>
    <div class="h-screen overflow-y-hidden">
        <NavBar />
        <div class="pl-[8rem] md:pl-[max(0px,15%)]">
            <UserInfo :nb_post="posts.length" :userID="userid" />
            <Posts/>
        </div>
    </div>
</template>
<script setup lang="ts">
import NavBar from '../components/Navbar/NavBar.vue';
import UserInfo from '../components/User/UserInfo.vue';
import Posts from '../components/User/Posts.vue'
import type { postType } from '../types/type'
import { usePage } from '@inertiajs/vue3';
import { ref, onMounted } from "vue";
import ky from "ky";

const posts = ref<postType[]>([])
const userid = (usePage().props.params as { id: number }).id

onMounted(async () => {
    const params = (usePage().props.params as { id: number })
    const post: postType[] = await ky.get(`/postuser/${params.id}`).json()
    posts.value = post
})

</script>