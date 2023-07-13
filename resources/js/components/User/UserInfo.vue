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
                        <span class="label-text-alt">{{ props.user.nb_followed }} Followed</span>
                        <span class="label-text-alt">{{ props.user.nb_follower }} Followers</span>
                    </label>
                    <p class="w-60 h-24 border border-secondary rounded-md bg-base-200/[35] text-xs p-1">{{
                        props.user.bio || 'any bio' }}</p>
                    <div class="label">
                        <button class="btn btn-sm"
                            :class="$page.url.replace('/user/', '') == props.user.id ? 'btn-disabled border border-secondary' : 'btn-secondary'">Follow</button>
                        <button class="btn btn-sm"
                            :class="$page.url.replace('/user/', '') == props.user.id ? 'btn-disabled border border-secondary' : 'btn-secondary'">Message</button>
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
const props = defineProps({ user: Object, errors: Object, nbPost: Number })
</script>
