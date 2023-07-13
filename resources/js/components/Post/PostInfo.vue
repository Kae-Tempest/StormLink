<template>
    <div class="flex justify-between">
        <div class="flex my-auto">
            <img v-if="props.user.avatar" alt=""
                :src="props.user.avatar"
                class="border-2 border-secondary rounded-full w-[60px] h-fit"> <!-- put correct user avatar -->
            <img v-else src="/assets/defaultUser.png" alt=""
                 class="border-2 border-secondary rounded-full w-[60px] h-fit">
            <div class=" ml-4 my-auto text-xl">
                {{ props.user.username }}
            </div>
        </div>
        <div v-if="type === 1" class="break-words text-center my-auto">
            {{ props.desc }}
        </div>
        <div class="text-right my-auto flex mx-5 justify-end">
            <div>
                <font-awesome-icon :icon="['far', 'heart']" size="2xl" class="pr-5" />
                <span>{{ props.like }}</span>
            </div>
            <div>
                <font-awesome-icon :icon="['far', 'message']" size="2xl" class="px-5" />
                <span>0</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  user: Object,
  like: Number,
  desc: String,
  size: String,
  type: Number
})

</script>