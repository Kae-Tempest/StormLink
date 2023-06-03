<template>
    <div class="flex">
        <NavBar />
        <div class="grid h-screen gap-4 pt-5 grid-cols-2 mx-10 lg:grid-cols-3 grid-flow-row lg:mx-28 xl:mx-44 2xl:mx-58 3xl:mx-72 overflow-x-hidden overflow-y-auto"
            :class="posts.length < 4 ? 'lg:grid-rows-[325px_minmax(100px,_1fr)_100px]' : 'grid-flow-row'" id='screen'>
            <template v-for="post in posts" class="py-4">
                <LittlePost v-if="post.size === 'small'" :file="post.file?.url" :type_post="post.type_post"
                    :description="post.description" />
                <LargePost v-else-if="post.size === 'large'" :file="post.file?.url" :type_post="post.type_post"
                    :description="post.description" />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
import LittlePost from '../components/LittlePost.vue'
import LargePost from '../components/LargePost.vue'
import { ref, onMounted } from "vue";
import axios from "axios";

type postFile = { url: string; name:string; size: string; mimeType: string; }
type post = { size: string; file: postFile | undefined; type_post: number; description: string; };
const posts = ref<post[]>([{ size: '', file: undefined , type_post: 1, description: '', }])

onMounted(async () => {
    const { data: post } = await axios.get('/post')
    posts.value = post
})

</script>

<style>
#screen {
    width: 100%;
    scrollbar-width: thin;
}
</style>
