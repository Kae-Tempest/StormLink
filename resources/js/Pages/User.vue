<template>
    <div>
        <NavBar :user="props.ConnectUser"/>
        <div class="pl-[8rem] md:pl-[max(0px,15%)]">
            <UserInfo :user="props.user" :errors="props.errors" :nbPost="props.posts.length"/>
            <Posts :user="props.user" :posts="props.posts"/>
        </div>
    </div>
</template>
<script setup lang="ts">
import UserInfo from '../components/User/UserInfo.vue'
import NavBar from '../components/Navbar/NavBar.vue'
import Posts from '../components/User/Posts.vue'

const props = defineProps({user: Object, posts: Object, ConnectUser: Object, errors: Object})
</script>
