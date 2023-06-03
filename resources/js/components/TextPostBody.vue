<template>
    <div id="ModalBody">
        <form @submit.prevent="submit" action="">
            <div v-if="$page.props.errors">{{ $page.props.errors }}</div>
            <textarea v-model="form.description" rows="22"
                class="my-5 mx-28 h-full w-5/6 text-ctp-text/50 border border-ctp-blue bg-ctp-mantle/50 resize-none outline outline-none rounded-xl p-2"
                placeholder="Add Text ..." />
            <hr class="border border-ctp-blue" />
            <div class="flex justify-between h-32">
                <div class="flex flex-col text-2xl my-[25.5px] mx-3">
                    <label class="2xl:py-5">
                        <input name="PostSize" type="radio" value="small" v-model="form.size"
                            class="p-2 mr-3.5 ml-1.5 appearance-none rounded-md h-2 w-2 outline outline-3 outline-ctp-blue outline-offset-4 checked:inline-block checked:bg-ctp-blue" />Small
                    </label>
                    <label class="py-5">
                        <input name="PostSize" type="radio" value="large" v-model="form.size"
                            class="p-2 mr-3.5 ml-1.5 appearance-none rounded-md h-2 w-2 outline outline-3 outline-ctp-blue outline-offset-4 checked:inline-block checked:bg-ctp-blue" />Large
                    </label>
                </div>
                <div class="my-auto mx-5">
                    <button type="submit" class="bg-ctp-blue py-5 px-7 cursor-pointer rounded-lg w-96">
                        POST
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { useForm } from "@inertiajs/vue3";

defineProps({ errors: Object })

type Form = { size: string; description: string; type_post: number; user_id: number; };
const form = useForm<Form>({ size: '', description: '', type_post: 1, user_id: 1 });

const submit = async () => {
    console.log(form)
    form.post("/posting", {
        onSuccess: page => { console.log(page, 'page') },
        // onFinish: () => { location.reload() },
    });
};
</script>
