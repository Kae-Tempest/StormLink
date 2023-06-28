<template>
    <div class="h-1/5 border-b-2 border-secondary">
        <div class="flex h-full items-center justify-evenly">
            <img v-if="userInfo?.avatar" :src="userInfo?.avatar?.url" alt=""
                class="border border-secondary rounded-full w-32 mt-2 ml-4">
            <img v-else src="../../../assets/defaultUser.png" alt=""
                class="border border-secondary rounded-full w-32 mt-2 ml-4">
            <div class="mx-auto text-4xl">
                {{ userInfo?.username }}
            </div>
            <div class="flex">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text-alt">{{ nb_post }} Posts</span>
                        <span class="label-text-alt">{{ userInfo?.nb_followed }} Followed</span>
                        <span class="label-text-alt">{{ userInfo?.nb_follower }} Followers</span>
                    </label>
                    <p class="w-60 h-24 border border-secondary rounded-md bg-base-200/[35] text-xs p-1">{{
                        userInfo?.bio || 'any bio' }}</p>
                    <div class="label">
                        <button class="btn btn-sm"
                            :class="($page.props.currentUser as userType).id == userid ? 'btn-disabled border border-secondary' : 'btn-secondary'">Follow</button>
                        <button class="btn btn-sm"
                            :class="($page.props.currentUser as userType).id == userid ? 'btn-disabled border border-secondary' : 'btn-secondary'">Message</button>
                    </div>
                </div>
                <div>
                    <UserSettingsModal />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import UserSettingsModal from './UserSettingsModal.vue'
import type { userType } from '../../types/type'
import { useStore } from '../../store/store'
import { usePage } from '@inertiajs/vue3'
import { onMounted, ref } from 'vue'
import ky from 'ky'

defineProps({ userid: Number })
const userInfo = ref<userType>()
const nb_post = ref<number>(0)
const currentUser = usePage().props.currentUser

onMounted(async () => {
    const store = useStore()
    const params = (usePage().props.params as { id: number })
    userInfo.value = await ky.get(`/userinfo/${params.id}`).json()
    setTimeout(() => { nb_post.value = store.nb_post }, 2)
})
</script>
