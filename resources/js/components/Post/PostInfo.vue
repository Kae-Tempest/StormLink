<template>
    <div class="flex justify-between">
        <div class="flex my-auto">
            <img src="../../../assets/TempestLogo.png" alt="" class="border-2 border-secondary rounded-full w-[60px] h-fit">
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
                <span>0</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { userType } from '../../types/type'

interface Props {
    user_id: number
    like: number
    desc: string
    size: string
    type: number
}

const props = defineProps<Props>()
</script>