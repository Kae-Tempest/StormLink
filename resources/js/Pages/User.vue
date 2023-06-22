<template>
    <div class="h-screen overflow-y-hidden">
        <NavBar />
        <div class="pl-[8rem] md:pl-[max(0px,15%)]">
            <UserInfo :nb_post="posts.length" :userID="userid" />
            <div class="grid h-screen gap-4 pt-5 pb-48 grid-cols-2 px-5 lg:grid-cols-3 3.5xl:grid-cols-4 grid-flow-row-dense overflow-y-auto"
                :class="posts.length < 4 ? 'lg:grid-rows-[325px_minmax(100px,_1fr)_100px]' : 'grid-flow-row'">
                <template v-for="post in posts" class="py-4">
                    <LittlePost v-if="post.size === 'small'" :id="post.id" :file="post.file?.url"
                        :type_post="post.type_post" :description="post.description" />
                    <LargePost v-else-if="post.size === 'large'" :id="post.id" :file="post.file?.url"
                        :type_post="post.type_post" :description="post.description" />
                </template>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import NavBar from '../components/Navbar/NavBar.vue';
import UserInfo from '../components/User/UserInfo.vue';
import LittlePost from '../components/Home/LittlePost.vue'
import LargePost from '../components/Home/LargePost.vue'
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