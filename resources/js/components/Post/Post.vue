<template>
    <div class="px-14 pl-[18rem]">
        <div class="border-2 border-ctp-blue w-full h-fit mx-auto my-5 rounded-[10px]"
            :class="post.type_post == 1 ? 'h-fit mx-10' : post.size != 'small' ? 'w-fit min-w-[25%] max-w-[75%]' : 'h-full w-fit min-w-[25%] max-w-[30%]'">
            <img v-if="post.file" :src="post.file.url" :alt="post.file.url" class="w-full h-full rounded-[10px]">
            <div v-if="!post.file" class="text-center">
                <span class="break-words">{{ post.description }}</span>
            </div>
        </div>

        <PostInfo :user_id="post.user_id" :like="post.like" :desc="post.description" :size="post.size"
            :type="post.type_post" />
        <InputComment />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { usePage } from '@inertiajs/vue3'
import PostInfo from './PostInfo.vue'
import InputComment from './InputComment.vue'
import ky from 'ky'

type postFile = { url: string; name: string; size: string; mimeType: string; }
type post = { id: number; size: string; file: postFile | undefined; type_post: number; description: string; user_id: number; like: number };
const post = ref<post>({ id: 0, size: '', file: undefined, type_post: 1, description: '', user_id: 1, like: 0 })

onMounted(async () => {
    const params = (usePage().props.params as { id: number })
    const postInfo: post = await ky.get(`/postinfo/${params.id}`).json()
    post.value = postInfo
})
</script>