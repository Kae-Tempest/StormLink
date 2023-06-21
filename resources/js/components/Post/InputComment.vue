<template>
    <div class="grid h-fit my-5">
        <input type="text" placeholder="Send Comment..."
            class="input input-bordered input-primary pl-2 col-[1/1] row-[1/1]">
        <button class="bg-primary rounded-[5px] py-2 px-5 ml-auto col-[1/1] row-[1/1]" @click="submit()">
            <font-awesome-icon :icon="['fas', 'paper-plane']" size="xl" />
        </button>
    </div>
</template>

<script setup lang="ts">
const submit = () => {
    console.log('submit')
}
</script>




<input type="text" placeholder="Send Comment..."
class="h-full border-2 border-blue-900 rounded-[5px] bg-gray-900/75 pl-2 col-[1/1] row-[1/1]">