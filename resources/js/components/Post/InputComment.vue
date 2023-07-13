<template>
    <div class="grid h-fit py-5">
        <input v-model="form.content" type="text" placeholder="Send Comment..."
            class="input input-bordered input-primary pl-2 col-[1/1] row-[1/1]">
        <button class="bg-primary rounded-[5px] py-2 px-5 ml-auto col-[1/1] row-[1/1]" @click="submit()">
            <font-awesome-icon :icon="['fas', 'paper-plane']" size="xl" />
        </button>
    </div>
</template>

<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
interface Props {
  user: Object
  post_id: number
}

const props = defineProps<Props>()

type Form = { content: string; post_id: number }
const form = useForm<Form>({ content: '', post_id: props.post_id })

const submit = () => {
    form.post('/comment')
    form.content = ''
}
</script>