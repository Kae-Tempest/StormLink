<template>
    <div class="grid h-screen gap-4 pt-5 pb-48 grid-cols-2 px-5 lg:grid-cols-3 xl:grid-cols-4 3.5xl:grid-cols-5 overflow-y-auto"
        :class="posts.length < 4 ? 'lg:grid-rows-[325px_minmax(100px,_1fr)_100px]' : 'grid-flow-row-dense'">
        <template v-for="post in posts" class="py-4">
            <LittlePost v-if="post.size === 'small'" :id="post.id" :file="post.file?.url" :type_post="post.type_post"
                :description="post.description" />
            <LargePost v-else-if="post.size === 'large'" :id="post.id" :file="post.file?.url" :type_post="post.type_post"
                :description="post.description" />
        </template>
    </div>
</template>
<script setup lang="ts">
import LittlePost from '../PostCard/LittlePost.vue'
import LargePost from '../PostCard/LargePost.vue'
import type { postType } from '../../types/type'
import { usePage } from '@inertiajs/vue3';
import { ref, onMounted } from "vue";
import ky from "ky";

import { useStore } from '../../store/store';

const posts = ref<postType[]>([])

onMounted(async () => {
    const store = useStore()
    const params = (usePage().props.params as { id: number })
    const post: postType[] = await ky.get(`/postuser/${params.id}`).json()
    posts.value = post
    store.nb_post = post.length
})
</script>