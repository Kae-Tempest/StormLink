<template>
  <div id="ModalBody">
    <div class="text-9xl flex my-24  m-auto w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
        class="w-52 h-52 rotate-[19deg] z-10 m-auto mr-0 translate-x-10 stroke-black stroke-1">
        <path fill-rule="evenodd"
          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
          clip-rule="evenodd" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
        class="w-52 h-52 -rotate-[9deg] z-20 m-auto ml-0 -translate-x-10 stroke-black stroke-1">
        <path fill-rule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
          clip-rule="evenodd" />
      </svg>
    </div>
    <div class="text-center text-2xl">Drag photos and videos here</div>
    <div v-if="$page.props.errors">
      <AlertError :error="$page.props.errors.msg" />
    </div>
    <form @submit.prevent="submit">
      <div class="text-center mt-10 text-xl">
        <label class="bg-primary rounded-sm py-4 px-7 cursor-pointer">
          <input @input="form.file = ($event.target as HTMLInputElement).files?.[0]" type="file" class="hidden" />
          Select from computer
        </label>
      </div>
      <hr class="border border-secondary mt-24" />
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
        <div class="my-auto h-full">
          <textarea name="PostDescription" cols="40" rows="5" placeholder="Add Description..." v-model="form.description"
            class="bg-primary/25 2xl:p-2 my-5 mx-3.5 rounded-sm resize-none caret-secondary ring-2 ring-secondary outline-none"></textarea>
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

type Form = { size: string; file: File | undefined; description: string; type_post: number; user_id: number; };
const form = useForm<Form>({ size: '', file: undefined, description: '', type_post: 2, user_id: (currentUser as userType).id });

const submit = async () => {
  form.post("/postimg", {
    onSuccess: () => location.reload(),
  });
};
</script>
