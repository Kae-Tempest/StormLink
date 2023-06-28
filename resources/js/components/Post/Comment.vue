<template>
    <div v-for="comment in comments" class="mb-5"
        :class="comments.indexOf(comment) % 2 == 0 ? 'flex justify-start' : 'flex justify-end'">
        <CommentCard :index="comments.indexOf(comment)" :content="comment.content" :like="comment.like" :user_id="comment.user_id" :created_at="comment.created_at"/>
    </div>
</template>
<script setup lang="ts">
import { usePage } from '@inertiajs/vue3'
import CommentCard from './CommentCard.vue'
import { onMounted, ref } from 'vue'
import ky from 'ky'

type Comment = { id: number; content: string; user_id: number; post_id: number; like: number; created_at: string }
const comments = ref<Comment[]>([])


onMounted(async () => {
    const params = (usePage().props.params as { id: number })
    comments.value = await ky.get(`/comment/${params.id}`).json()
})

</script>
