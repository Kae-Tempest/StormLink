<template>
    <div class="grid h-fit my-5 pl-10">
        <input type="text" placeholder="Send Comment..."
            class=" mx-5 h-full border-2 border-ctp-blue rounded-md bg-ctp-mantle/75 pl-2 col-[1/1] row-[1/1]">
        <button class="bg-ctp-blue rounded-lg py-2 px-5 ml-auto col-[1/1] row-[1/1]" @click="submit()">
            <font-awesome-icon :icon="['fas', 'paper-plane']" size="xl" />
        </button>
    </div>
</template>

<script setup lang="ts">
const submit = () => {
    console.log('submit')
}
</script>