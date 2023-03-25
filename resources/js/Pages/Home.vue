<template>
    <div class="flex">
        <NavBar />
        <div class="grid h-screen gap-4 pt-5 grid-cols-2 mx-10 lg:grid-cols-3 grid-flow-row lg:mx-28 xl:mx-44 2xl:mx-58 3xl:mx-72 overflow-x-hidden overflow-y-auto " id='screen'>
            <LittlePost v-bind="text"/>
            <LargePost v-bind="img"/>
            <LargePost v-bind="text"/>
            <LittlePost v-bind="text"/>
            <LittlePost v-bind="text"/>
            <LittlePost v-bind="text"/>
            <LittlePost v-bind="text"/>

        </div>
    </div>
</template>

<script setup lang="ts">
    import NavBar from '../components/NavBar.vue'
    import LittlePost from '../components/LittlePost.vue'
    import LargePost from '../components/LargePost.vue'

    const text = {modelType: 'text'}
    const img = {modelType: 'img'}
</script>

<style>
    #screen {
        width : 100%;
        scrollbar-width: thin;
    }
</style>
