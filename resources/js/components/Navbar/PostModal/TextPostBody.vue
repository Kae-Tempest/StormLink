<template>
    <div id="ModalBody">
        <form @submit.prevent="submit">
            <textarea v-model="form.description" rows="22"
                class="my-5 mx-28 h-full w-5/6 text-white border-2 border-primary bg-primary/25 resize-none outline outline-none rounded-sm p-2"
                placeholder="Add Text ..." />
            <hr class="border border-secondary" />
            <div class="flex justify-between h-32">
                <div class="flex flex-col text-2xl my-5 mx-3">
                    <label class="py-5">
                        <input name="PostSize" type="radio" value="1" v-model="form.size"
                            class="checkbox checkbox-secondary mr-2 my-auto" />Small
                    </label>
                    <label class="py-5">
                        <input name="PostSize" type="radio" value="2" v-model="form.size"
                            class="checkbox checkbox-secondary mr-2 my-auto" />Large
                    </label>
                </div>
                <div class="my-auto mx-5">
                    <button type="submit" class="bg-primary py-5 px-7 cursor-pointer rounded-sm w-96">
                        POST
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { useForm } from "@inertiajs/vue3"

const props = defineProps<{ userId: number}>()

type Form = { size: string; description: string; user_id: number; };
const form = useForm<Form>({ size: '', description: '', user_id: props.userId });

const submit = async () => { form.post("/postT", { onSuccess: () => location.reload() }) };
</script>
