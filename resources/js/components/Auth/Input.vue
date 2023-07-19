<template>
  <div class="form-control my-5">
    <label class="input-group input-group-md">
      <span><font-awesome-icon :icon="props.iconName" class="w-6" /></span>
      <input :type="props.type" :placeholder="props.placeholder" min="3"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        class="input input-bordered w-full"  icon-name=""/>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  placeholder: string,
  iconName: string[],
  type: string,
}

const props = defineProps<Props>()
const input = ref()

</script>