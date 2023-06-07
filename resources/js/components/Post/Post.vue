<template>
        <div class="border-2 border-ctp-blue w-full h-[500px] mx-10 mt-10 mb-5 overflow-hidden rounded-[10px] hover:"
            :class="post.type_post == 1 ? 'h-fit px-10 py-5' : post.size != 'small' ? 'w-fit min-w-[25%] max-w-[75%] mx-auto' : 'h-full w-fit min-w-[25%] max-w-[30%] mx-auto'">
            <img v-if="post.file" :src="post.file.url" :alt="post.file.url" class="w-full h-full rounded-[10px]">
            <div v-if="!post.file" class="flex items-center justify-center text-center h-full">
                <span class="break-words w-full">{{ post.description }}</span>
            </div>
        </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { usePage } from '@inertiajs/vue3'
import ky from 'ky'

type postFile = { url: string; name: string; size: string; mimeType: string; }
type post = { id: number; size: string; file: postFile | undefined; type_post: number; description: string; };
const post = ref<post>({ id: 0, size: '', file: undefined, type_post: 1, description: '', })

onMounted(async () => {
    const params = (usePage().props.params as { id: number })
    const postInfo: post = await ky.get('/posts/' + params.id).json()
    post.value = postInfo
})

</script>