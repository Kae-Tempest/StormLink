<template>
    <div class="w-full">
        <NavBar :user="props.ConnectUser"/>
        <div class="pr-10 pl-[8rem] md:pl-[max(0px,16%)] pt-5">
            <img v-if="props.post.file" :src="props.post.file" :alt="props.post.file"
                class="w-full h-full max-w-[50%] 3.5xl:max-w-[35%] rounded-sm border-2 border-secondary mb-5 mx-auto"
                :class="{ 'max-w-[35%]': props.post.size == 2 }">
            <div v-if="!props.post.file" class="text-center p-2 border-2 border-secondary rounded-sm mx-auto my-5">
                <span class="">{{ props.post.description }}</span>
            </div>

            <PostInfo :like="props.post.like" :desc="props.post.description || ''" :size="props.post.size"
                :type="props.post.type_post" :user="props.post.user" :nbPost="props.comments.length" :post_id="props.post.id" :liked="props.likedPost?.liked || false"/>
            <InputComment :user="props.post.user" :post_id="props.post.id"/>

            <Comments :comments="props.comments" :ConnectUser="props.ConnectUser"/>
        </div>
    </div>
</template>
<script setup lang="ts">
import InputComment from '../components/Post/InputComment.vue'
import PostInfo from '../components/Post/PostInfo.vue'
import Comments from '../components/Post/Comment.vue'
import NavBar from '../components/Navbar/NavBar.vue'
import {Post, User, Comment} from "../types/type.ts";

interface Props {
  post: Post
  comments: Comment[]
  ConnectUser: User
  likedPost: {
    liked: boolean
  }
}

const props = defineProps<Props>()

</script>