<template>
    <div class="flex justify-between">
        <div class="flex my-auto">
            <img v-if="($page.props.currentUser as userType).avatar" alt=""
                :src="($page.props.currentUser as userType).avatar?.url"
                class="border-2 border-secondary rounded-full w-[60px] h-fit"> <!-- put correct user avatar -->
            <img v-else src="../../../assets/defaultUser.png" alt=""
                class="border-2 border-secondary rounded-full w-[60px] h-fit">
            <div class=" ml-4 my-auto text-xl">
                {{ ($page.props.currentUser as userType).username }}
            </div>
        </div>
        <div v-if="type === 2" class="break-words text-center my-auto">
            {{ props.desc }}
        </div>
        <div class="text-right my-auto flex mx-5 justify-end">
            <div>
                <font-awesome-icon :icon="['far', 'heart']" size="2xl" class="pr-5" />
                <span>{{ props.like }}</span>
            </div>
            <div>
                <font-awesome-icon :icon="['far', 'message']" size="2xl" class="px-5" />
                <span>{{ comments.length }}</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
import ky from 'ky';
import { onMounted, ref } from 'vue';
import type { userType } from '../../types/type'

interface Props {
    user_id: number
    like: number
    desc: string
    size: string
    type: number
}

const props = defineProps<Props>()

type Comment = { id: number; content: string; user_id: number; post_id: number; like: number; created_at: string }
const comments = ref<Comment[]>([])

onMounted( async () => {
    const params = (usePage().props.params as { id: number })
    comments.value = await ky.get(`/comment/${params.id}`).json()
})
</script>