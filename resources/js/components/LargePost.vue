<template>
    <div v-if="props.type_post === 1" class="border-2 border-ctp-blue w-full h-[323px] overflow-hidden rounded-[10px] col-span-2 break-words">
       {{ props.description }}
    </div>
    <div v-if="props.type_post === 2" class="border-2 border-ctp-blue w-full h-[323px] overflow-hidden rounded-[10px] col-span-2">
        <img :src="props.file" :alt="props.file" class="w-full h-full rounded-[10px]">
    </div>
</template>
<script setup lang="ts">

interface Props {
    type_post: number
    file?: string
    description: string
}

const props = defineProps<Props>()
</script>
