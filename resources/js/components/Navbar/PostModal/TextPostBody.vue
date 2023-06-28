<template>
    <div id="ModalBody">
        <form @submit.prevent="submit">
            <div v-if="$page.props.errors">
                <AlertError :error="$page.props.errors.msg" />
            </div>
            <textarea v-model="form.description" rows="22"
                class="my-5 mx-28 h-full w-5/6 text-white border-2 border-primary bg-primary/25 resize-none outline outline-none rounded-sm p-2"
                placeholder="Add Text ..." />
            <hr class="border border-secondary" />
            <div class="flex justify-between h-32">
                <div class="flex flex-col text-2xl my-5 mx-3">
                    <label class="py-5">
                        <input name="PostSize" type="radio" value="small" v-model="form.size" checked="true"
                            class="checkbox checkbox-secondary mr-2 my-auto" />Small
                    </label>
                    <label class="py-5">
                        <input name="PostSize" type="radio" value="large" v-model="form.size"
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
import type { userType } from '../../../types/type'
import { useForm, usePage } from "@inertiajs/vue3"
import AlertError from "./AlertError.vue"


const currentUser = usePage().props.currentUser
defineProps({ errors: Object })

type Form = { size: string; description: string; type_post: number; user_id: number; };
const form = useForm<Form>({ size: 'small', description: '', type_post: 1, user_id: (currentUser as userType).id });

const submit = async () => { form.post("/posttxt", { onSuccess: () => location.reload() }) };
</script>
