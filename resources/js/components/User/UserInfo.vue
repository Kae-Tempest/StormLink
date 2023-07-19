<template>
    <div class="h-1/5 border-b-2 border-secondary w-full">
        <div class="flex h-full items-center justify-evenly">
            <img v-if="props.user.avatar" :src="props.user.avatar" alt=""
                class="border border-secondary rounded-full w-32 mt-2 ml-4">
            <img v-else src="../../../../public/assets/defaultUser.png" alt=""
                 class="border border-secondary rounded-full w-32 mt-2 ml-4">
            <div class="mx-auto text-4xl">
                {{ props.user.username }}
            </div>
            <div class="flex">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text-alt">{{ props.nbPost }} Posts</span>
                        <span class="label-text-alt">{{ props.Followed.length }} Followed</span>
                        <span class="label-text-alt">{{ props.Followers.length }} Followers</span>
                    </label>
                    <p class="w-60 h-24 border border-secondary rounded-md bg-base-200/[35] text-xs p-1">{{
                        props.user.bio || 'any bio' }}</p>
                    <div class="label">
                      <button v-if="!followed" class="btn btn-sm" @click="follow()"
                            :class="ConnectUserId == props.user.id ? 'btn-disabled border border-secondary' : 'btn-secondary'">Follow</button>
                      <button v-else class="btn btn-sm btn-primary" @click="unfollow()">UnFollow</button>
                        <button class="btn btn-sm"
                            :class="ConnectUserId == props.user.id ? 'btn-disabled border border-secondary' : 'btn-secondary'">Message</button>
                    </div>
                </div>
                <div>
                    <UserSettingsModal :user="props.user" :errors="props.errors"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import UserSettingsModal from './UserSettingsModal.vue'
import {User} from "../../types/type.ts";
import {useForm} from "@inertiajs/vue3";
import {onMounted, ref} from "vue";

interface Props {
  user: User
  errors: {}
  nbPost: number
  ConnectUserId: number
  Followers: []
  Followed: []
}
const props = defineProps<Props>()
const form = useForm({followed_id: props.user.id})
const followed = ref(false)
const follow = () => {
  form.post('/follow');
  followed.value = true
}
const unfollow = () => {
  form.delete('/unfollow');
  followed.value = false
}

onMounted(() => {
  for (let follow of props.Followers) {
    if(follow['follower_id'] == props.ConnectUserId){
      followed.value = true
    }
  }
})
</script>
