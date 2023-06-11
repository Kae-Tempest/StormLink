<template>
    <div class="flex justify-between pl-20">
        <div class="flex my-auto">
            <img src="../../../assets/TempestLogo.png" alt="" class="border border-ctp-blue rounded-full w-[60px] h-fit">
            <div class=" ml-4 my-auto text-xl">
                {{ user.username }}
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
import { onMounted, ref } from 'vue';
import ky from 'ky'

interface Props {
    user_id: number
    like: number
    desc: string
    size: string
    type: number
}

const props = defineProps<Props>()
const user = ref({ username: 'Kae' })

onMounted(async () => {
    const user = await ky.get(`/user/${props.user_id}`)
})
</script>