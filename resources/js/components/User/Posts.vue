<template>
    <div class="grid h-full gap-4 pt-5 grid-cols-2 pr-1 lg:grid-cols-3 xl:grid-cols-4 3.5xl:grid-cols-6 ml-2"
         :class="props.posts.length < 4 ? 'lg:grid-rows-[325px_minmax(100px,_1fr)_100px]' : 'grid-flow-row-dense'">
        <template v-for="post in props.posts" class="py-4">
            <LittlePost v-if="post.size === '1'" :id="post.id" :file="post.file" :type_post="post.type_post"
                        :description="post.description" />
            <LargePost v-else-if="post.size === '2'" :id="post.id" :file="post.file" :type_post="post.type_post"
                       :description="post.description" />
        </template>
    </div>
</template>
<script setup >
import LittlePost from '../PostCard/LittlePost.vue'
import LargePost from '../PostCard/LargePost.vue'

const props = defineProps({user: Object, posts: Object})

</script>