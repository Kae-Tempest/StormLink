<template>
    <div class="flex">
        <NavBar />
        <div class="grid h-screen gap-4 pt-5 grid-cols-2 mx-24 pr-1 lg:grid-cols-3 grid-flow-row overflow-x-hidden overflow-y-auto"
            :class="posts.length < 4 ? 'lg:grid-rows-[325px_minmax(100px,_1fr)_100px]' : 'grid-flow-row'" id='screen'>
            <template v-for="post in posts" class="py-4">
                <LittlePost v-if="post.size === 'small'" :id="post.id" :file="post.file?.url" :type_post="post.type_post"
                    :description="post.description" />
                <LargePost v-else-if="post.size === 'large'" :id="post.id" :file="post.file?.url"
                    :type_post="post.type_post" :description="post.description" />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import NavBar from '../components/navbar/NavBar.vue'
import LittlePost from '../components/home/LittlePost.vue'
import LargePost from '../components/home/LargePost.vue'
import { ref, onMounted } from "vue";
import ky from "ky";

type postFile = { url: string; name: string; size: string; mimeType: string; }
type post = { id: number; size: string; file: postFile | undefined; type_post: number; description: string; };
const posts = ref<post[]>([{ id: 0, size: '', file: undefined, type_post: 1, description: '', }])

onMounted(async () => {
    const post: post[] = await ky.get('/post').json()
    posts.value = post
})

</script>

<style>
#screen {
    width: 100%;
    scrollbar-width: thin;
}
</style>
