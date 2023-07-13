<template>
    <TLink :href="`/post/${props.id}`" :key="props.id" class="col-span-2 lg:col-span-1">
        <div v-if="props.type_post === 2"
            class="border-2 border-secondary w-full h-[323px] overflow-hidden rounded-sm flex items-center justify-center text-center overflow-y-auto">
            <span class="break-words w-full">{{ props.description }}</span>
        </div>
        <div v-if="props.type_post === 1"
            class="flex border-2 border-secondary w-full h-[323px] overflow-hidden rounded-sm">
            <img :src="props.file" :alt="props.file" class="aspect-video object-cover w-full rounded-sm">
        </div>
    </TLink>
</template>
<script setup lang="ts">
interface Props {
    type_post: number
    file?: string
    description?: string
    id: number
}

const props = defineProps<Props>()
</script>
