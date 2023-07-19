<template>
    <div class="toast toast-bottom toast-end mt-5 z-50">
        <div v-for="error in props.error" class="alert alert-error">
            <span>{{ error }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
interface props { error: Object }
const props = defineProps<props>()
</script>