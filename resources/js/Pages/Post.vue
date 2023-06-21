<template>
    <NavBar />
    <div class="px-10 pl-[8rem] md:pl-[max(0px,17%)] w-screen">
        <img v-if="post.file" :src="post.file.url" :alt="post.file.url"
            class="w-full h-full max-w-[50%] 3.5xl:max-w-[35%] rounded-sm border-2 border-secondary my-5 mx-auto"
            :class="{ 'max-w-[35%]': post.size === 'small' }">

        <div v-if="!post.file" class="text-center p-2 border-2 border-secondary rounded-sm mx-auto my-5">
            <span class="">{{ post.description }}</span>
        </div>

        <PostInfo :user_id="post.user_id" :like="post.like" :desc="post.description" :size="post.size"
            :type="post.type_post" />
        <InputComment />
    </div>
</template>
<script setup lang="ts">
import NavBar from '../components/Navbar/NavBar.vue'
import { onMounted, ref } from 'vue';
import { usePage } from '@inertiajs/vue3'
import PostInfo from '../components/Post/PostInfo.vue'
import InputComment from '../components/Post/InputComment.vue'
import ky from 'ky'
import type { user } from '../types/type'

const currentUser = usePage().props.currentUser
type postFile = { url: string; name: string; size: string; mimeType: string; }
type post = { id: number; size: string; file: postFile | undefined; type_post: number; description: string; user_id: number; like: number };
const post = ref<post>({ id: 0, size: '', file: undefined, type_post: 1, description: '', user_id: (currentUser as user).id, like: 0 })

onMounted(async () => {
    const params = (usePage().props.params as { id: number })
    const postInfo: post = await ky.get(`/postinfo/${params.id}`).json()
    post.value = postInfo
})
</script>