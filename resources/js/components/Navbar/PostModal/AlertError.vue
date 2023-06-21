<template>
    <div class="toast toast-top toast-end mt-5">
        <div v-for="(error, errorID) in props.error" class="alert alert-error">
            <span v-if="errorID.toString() == 'file'">File missing or wrong type</span>
            <span v-if="errorID.toString() == 'size'">Size is missing</span>
            <span v-if="errorID.toString() == 'description'">Description Missing</span>
        </div>
    </div>
</template>

<script setup lang="ts">
interface props {
    error: Object,
}

const props = defineProps<props>()
</script>