<template>
  <div class="w-full">
    <NavBar :user="props.ConnectUser" :errors="props.errors"/>
    <div class="pr-[1%] pl-[8rem] md:pl-[max(0px,16%)]">
      <div class="grid h-full gap-4 pt-5 grid-cols-2 pr-1 lg:grid-cols-3 xl:grid-cols-4 3.5xl:grid-cols-5"
           :class="props.Posts.length < 4 ? 'lg:grid-rows-[325px_minmax(100px,_1fr)_100px]' : 'grid-flow-row-dense'">
        <template v-for="post in props.Posts" class="py-4">
          <LittlePost v-if="post.size == 1" :id="post.id" :file="post.file" :type_post="post.type_post"
                      :description="post.description" :connectUserId="props.ConnectUser.id" :postUserId="post.user.id"/>
          <LargePost v-else-if="post.size == 2" :id="post.id" :file="post.file"
                     :type_post="post.type_post" :description="post.description" :connectUserId="props.ConnectUser.id" :postUserId="post.user.id"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import NavBar from '../components/Navbar/NavBar.vue'
  import LargePost from "../components/PostCard/LargePost.vue";
  import LittlePost from "../components/PostCard/LittlePost.vue";
  import {User, Post} from "../types/type.ts";

  interface Props {
    Posts: Post[],
    ConnectUser: User,
    errors: {}
  }

  const props = defineProps<Props>()
</script>