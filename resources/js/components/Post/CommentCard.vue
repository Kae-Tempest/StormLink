<template>
    <div class="w-full xl:w-[48%] break-all h-fit bg-base-100/40 rounded-2xl shadow-[2px_6px_4px_0px_#181929] bg-gradient-to-b from-base-100 to-base-200">
        <div class="flex justify-between" :class="props.index % 2 == 0 ? '' : 'flex-row-reverse'">
          <div class="flex pt-1" :class="props.index % 2 == 0 ? 'flex-row-reverse' : ''">
            <div v-if="props.connectUserId == props.user.id" @click="destroy()"
                 class="w-0 h-0" :class="props.index % 2 == 0 ? '' : 'pr-8'">
              <div class="btn btn-square btn-outline btn-error btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </div>
            </div>
            <span class="p-1 flex items-center">{{ new Date(props.created_at).toLocaleDateString() }}</span>
          </div>
            <div class="flex items-center" :class="props.index % 2 == 0 ? '' : 'flex-row-reverse'">
                <span class="mx-2">{{ props.user.username }}</span>
                <img v-if="props.user.avatar" :src="props.user.avatar" alt="" class="w-10 border-2 border-t-0 border-primary" :class="props.index % 2 == 0 ? 'rounded-l-md rounded-tr-md border-r-0' : 'rounded-r-md rounded-tl-md border-l-0'">
                <img v-else src="/assets/defaultUser.png" alt="" class="w-10 border-2 border-t-0 border-primary" :class="props.index % 2 == 0 ? 'rounded-l-md rounded-tr-md border-r-0' : 'rounded-r-md rounded-tl-md border-l-0'">
            </div>
        </div>
        <div class="pl-2">{{ props.content }}</div>
    </div>
</template>

<script setup lang="ts">
import {router, useForm} from "@inertiajs/vue3";
import {User} from "../../types/type.ts";

interface Props {
  content: string
  like: number
  created_at: string
  index: number
  user: User
  connectUserId: number
  id: number
  PostId: number
}

const props = defineProps<Props>()

const form = useForm({comment_id: props.id})

const destroy = () => {
  form.delete('/comment',{
    onSuccess: () => {
      router.visit(`/post/${props.PostId}`,{
        only: ['comments']
      })
    }
  })
}
</script>