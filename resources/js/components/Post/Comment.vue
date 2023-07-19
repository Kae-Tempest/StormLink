<template>
    <div v-for="comment in props.comments" class="mb-5 last:mb-0"
        :class="props.comments.indexOf(comment) % 2 == 0 ? 'flex justify-start' : 'flex justify-end'">
        <CommentCard :index="props.comments.indexOf(comment)" :content="comment.content"
                     :like="comment.like" :created_at="comment.created_at"
                     :user="comment.user" :connectUserId="props.ConnectUser.id" :id="comment.id"/>
    </div>
</template>
<script setup lang="ts">
import CommentCard from './CommentCard.vue'
import {User, Comment} from "../../types/type.ts";
interface Props {
  ConnectUser: User,
  comments: Comment[]
}
const props = defineProps<Props>()

</script>
