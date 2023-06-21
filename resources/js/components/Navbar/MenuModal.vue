<template>
    <!-- Extra Large Modal -->
    <div class="overflow-y-auto fixed z-40 bottom-[max(0px,10vh)] left-[max(0px,2.35vw)] w-[max(0px,10%)]">
        <div class="relative w-full h-52 max-w-2xl md:max-w-[1800px] xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl py-5"
            id="modal">
            <!-- Modal content -->
            <div class="relative rounded-sm shadow-lg bg-base-200 h-full border-2 border-secondary">
                <!-- Modal body -->
                <div class="text-center h-full grid grid-rows-3">
                    <span @click="logout" class="my-auto md:text-xl">Log Out</span>
                    <TLink :href="`/user/${($page.props.currentUser as user).id}`" class="my-auto md:text-xl">Profile
                    </TLink>
                    <span class="my-auto md:text-xl leading-none">{{ ($page.props.currentUser as user).username }}</span>
                </div>
                <hr class="relative bottom-[50px] border-secondary mx-5">
            </div>
        </div>

        <div class="z-[51] fixed bottom-[max(0px,11vh)] left-[max(0px,6.8vw)]
            w-0 h-0 border-l-[11.5px] border-l-transparent border-r-[11.5px] border-r-transparent
            border-t-[11px] border-t-secondary">
        </div>
        <div class="z-[51] fixed bottom-[max(0px,11.2vh)] left-[max(0px,6.8vw)]
            w-0 h-0 border-l-[11.5px] border-l-transparent border-r-[11.5px] border-r-transparent
            border-t-[11px] border-t-base-200">
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import type { user } from '../../types/type'
import { router } from '@inertiajs/vue3'

const logout = async () => {
    router.post('/logout')
}
</script>
