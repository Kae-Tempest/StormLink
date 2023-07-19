<template>
      <div class="border-2 border-secondary w-full h-[323px] overflow-hidden rounded-sm text-center overflow-y-auto col-span-2 lg:col-span-1">
        <deleteModal v-if="usePage().url != '/'" :connectUserId="props.connectUserId" :postUserId="props.postUserId" :postId="props.id"/>
        <TLink :href="`/post/${props.id}`">
        <div v-if="props.type_post === 2" class="flex items-center w-full h-full">
          <span  class="break-words w-full">{{ props.description }}</span>
        </div>
        <img v-if="props.type_post === 1" :src="props.file" :alt="props.file" class="aspect-video object-cover w-full h-full rounded-sm">
        </TLink>
      </div>
</template>
<script setup lang="ts">
import deleteModal from './deleteModal.vue'
import { usePage } from "@inertiajs/vue3";

interface Props {
  type_post: number
  file?: string
  description?: string
  id: number,
  connectUserId: number,
  postUserId: number
}
const props = defineProps<Props>()
</script>