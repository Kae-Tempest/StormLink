<template>
    <NavBar />
    <div class="px-10 pl-[8rem] md:pl-[max(0px,17%)] z-s">
        <div class="grid h-screen gap-4 pt-5 grid-cols-2 pr-1 lg:grid-cols-3 3.5xl:grid-cols-4 grid-flow-row-dense"
            :class="posts.length < 4 ? 'lg:grid-rows-[325px_minmax(100px,_1fr)_100px]' : 'grid-flow-row'">
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
import NavBar from '../components/Navbar/NavBar.vue'
import LittlePost from '../components/Home/LittlePost.vue'
import LargePost from '../components/Home/LargePost.vue'
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