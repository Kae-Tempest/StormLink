<template>
    <div class="border-2 border-primary w-[45%] rounded-md">
        <div class="flex justify-between bg-primary/50" :class="comment.index % 2 == 0 ? '' : 'flex-row-reverse'">
            <span class="p-1 flex items-center">{{ new Date(comment.created_at).toLocaleDateString() }}</span>
            <div class="flex items-center" :class="comment.index % 2 == 0 ? '' : 'flex-row-reverse'">
                <span class="mx-2">{{ user?.username }}</span>
                <img v-if="user?.avatar" :src="user?.avatar?.url" alt="" class="w-10 border-2 border-t-0 border-primary" :class="comment.index % 2 == 0 ? 'rounded-l-md rounded-tr-md border-r-0' : 'rounded-r-md rounded-tl-md border-l-0'">
                <img v-else src="../../../assets/defaultUser.png" alt="" class="w-10">
            </div>
        </div>
        <div :class="comment.index % 2 == 0 ? 'pl-1' : ''">{{ comment.content }}</div>
    </div>
</template>
<script setup lang="ts">
import type { userType } from '../../types/type'
import { onMounted, ref } from 'vue'
import ky from 'ky'

type Comment = { content: string; user_id: number; like: number; created_at: string; index: number }
const comment = defineProps<Comment>()
const user = ref<userType>()

onMounted(async () => {
    setInterval(() => {
    }, 2)
    user.value = await ky.get(`/userinfo/${comment.user_id}`).json()
})

</script>