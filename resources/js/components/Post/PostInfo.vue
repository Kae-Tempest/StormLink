<template>
    <div class="flex justify-between">
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
import type { user } from '../../types/type'
import ky from 'ky'

interface Props {
    user_id: number
    like: number
    desc: string
    size: string
    type: number
}

const props = defineProps<Props>()
const user = ref<user>({ id: 0, username: '', email: '', password: '', role_id: 1, avatar: null, nb_followed: 0, nb_follower: 0, twitch_id: null, remember_me_token: null, created_at: '', updated_at: '' })

onMounted(async () => {
    const data: user = await ky.get(`/userinfo/${props.user_id}`).json()
    user.value = data

})
</script>