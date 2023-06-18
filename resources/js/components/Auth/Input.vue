<template>
  <div class="flex flex-wrap items-stretch w-full relative h-14 bg-slate-900 rounded mb-4 ring-1 ring-blue-900">
    <div class="flex -mr-px justify-center w-15 p-4">
      <span class="flex items-center leading-normal px-3 border-0 rounded rounded-r-none text-2xl text-white/25">
        <font-awesome-icon :icon="props.iconName" class="w-6" />
      </span>
    </div>
    <input :type="props.type" :placeholder="props.placeholder" min="3"
      @input="$emit('update:modelValue', $event.target.value)"
      class="flex-shrink flex-grow flex-auto leading-normal w-px border-0 h-full rounded rounded-l-none px-3 self-center relative text-xl outline-none bg-slate-800 text-white" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  placeholder: String,
  iconName: String,
  type: String,
}

const props = defineProps<Props>()
const input = ref()

</script>