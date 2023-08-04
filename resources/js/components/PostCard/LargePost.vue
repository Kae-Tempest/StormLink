<template>
      <div class="w-full h-[323px] overflow-hidden text-center overflow-y-auto col-span-2 rounded-[1.875rem] shadow-[2px_6px_4px_0px_#181929] bg-gradient-to-b from-base-100 to-base-200"
           :class="props.type_post === 2 ? 'opacity-90' : ''">
        <deleteModal v-if="usePage().url != '/'" :connectUserId="props.connectUserId" :postUserId="props.postUserId" :postId="props.id"/>
        <TLink :href="`/post/${props.id}`">
          <div v-if="props.type_post === 2 && props.description" class="flex items-center w-full h-full" :class="props.description?.length >= 1000 ? 'pt-4' : ''">
            <span  class="break-words w-full">{{ props.description }}</span>
          </div>
          <img v-if="props.type_post === 1" :src="props.file" :alt="props.file" class="aspect-video object-cover w-full h-full rounded-[1.875rem] shadow-[2px_6px_4px_0px_#181929]">
        </TLink>
      </div>
</template>
<script setup lang="ts">
import {usePage} from "@inertiajs/vue3";
import deleteModal from './deleteModal.vue'
interface Props {
  type_post: number
  file?: string
  description?: string
  id: number
  connectUserId: number,
  postUserId: number
}
const props = defineProps<Props>()
</script>