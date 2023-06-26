<template>
    <NavBar />
    <div class="px-10 pl-[8rem] md:pl-[max(0px,17%)]">
        <div class="grid h-screen gap-4 pt-5 grid-cols-2 pr-1 lg:grid-cols-3 xl:grid-cols-4 3.5xl:grid-cols-5 overflow-y-auto"
            :class="posts.length < 4 ? 'lg:grid-rows-[325px_minmax(100px,_1fr)_100px]' : 'grid-flow-row-dense'">
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
import LittlePost from '../components/PostCard/LittlePost.vue'
import LargePost from '../components/PostCard/LargePost.vue'
import NavBar from '../components/Navbar/NavBar.vue'
import type { postType } from '../types/type'
import { onMounted, ref } from "vue"
import ky from "ky"

const posts = ref<postType[]>([{ id: 0, size: '', file: undefined, type_post: 1, description: '', like: 0, user_id: 0 }])

onMounted(async () => { posts.value = await ky.get('/post').json() })
</script>