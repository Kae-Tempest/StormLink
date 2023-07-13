<template>
    <div v-for="comment in props.comments" class="mb-5 last:mb-0"
        :class="props.comments.indexOf(comment) % 2 == 0 ? 'flex justify-start' : 'flex justify-end'">
        <CommentCard :index="props.comments.indexOf(comment)" :content="comment.content" :like="comment.like" :user_id="comment.user_id" :created_at="comment.created_at" :user="comment.user"/>
    </div>
</template>
<script setup lang="ts">
import CommentCard from './CommentCard.vue'
import { defineProps } from 'vue'

const props = defineProps({comments: Object})

</script>
