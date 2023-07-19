<template>
    <div>
        <NavBar :user="props.ConnectUser"/>
        <div class="pl-[8rem] md:pl-[max(0px,15%)]">
            <UserInfo :user="props.user" :errors="props.errors" :nbPost="props.posts.length" :ConnectUserId="props.ConnectUser.id" :Followers="props.followers" :Followed="props.followed"/>
            <Posts :user="props.user" :posts="props.posts" :ConnectUser="props.ConnectUser"/>
        </div>
    </div>
</template>
<script setup lang="ts">
import UserInfo from '../components/User/UserInfo.vue'
import NavBar from '../components/Navbar/NavBar.vue'
import Posts from '../components/User/Posts.vue'
import {Post, User} from "../types/type.ts";

interface Props {
  user: User
  posts: Post[]
  ConnectUser: User
  errors: {}
  followers: []
  followed: []
}


const props = defineProps<Props>()
</script>
