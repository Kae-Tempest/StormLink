<template>
    <div class="border-2 border-primary w-full xl:w-[48%] break-all h-fit rounded-md">
        <div class="flex justify-between" :class="props.index % 2 == 0 ? '' : 'flex-row-reverse'">
            <span class="p-1 flex items-center">{{ new Date(props.created_at).toLocaleDateString() }}</span>
            <div class="flex items-center" :class="props.index % 2 == 0 ? '' : 'flex-row-reverse'">
                <span class="mx-2">{{ props.user.username }}</span>
                <img v-if="props.user.avatar" :src="props.user.avatar" alt="" class="w-10 border-2 border-t-0 border-primary" :class="props.index % 2 == 0 ? 'rounded-l-md rounded-tr-md border-r-0' : 'rounded-r-md rounded-tl-md border-l-0'">
                <img v-else src="/assets/defaultUser.png" alt="" class="w-10 border-2 border-t-0 border-primary" :class="props.index % 2 == 0 ? 'rounded-l-md rounded-tr-md border-r-0' : 'rounded-r-md rounded-tl-md border-l-0'">
            </div>
        </div>
        <div :class="props.index % 2 == 0 ? 'pl-1' : ''">{{ props.content }}</div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({ content: String, user_id: Number, like: Number, created_at: String, index: Number, user: Object })
</script>