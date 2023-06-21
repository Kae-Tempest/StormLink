<template>
  <div id="ModalBody">
    <div class="text-9xl mt-32 mb-24 text-center w-full">
      <font-awesome-icon :icon="['fas', 'image']" size="xl" class="text-white rotate-[19deg] z-10 translate-x-10" />
      <font-awesome-icon :icon="['far', 'circle-play']" size="xl" class="text-white -rotate-[9deg] z-20 -translate-x-5" />
      <!-- Changer les icons en PNG pour mettre une border -->
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
      <hr class="border border-secondary mt-32" />
      <div class="flex justify-between h-32">
        <div class="flex flex-col text-2xl my-5 mx-3">
          <label class="2xl:py-5">
            <input name="PostSize" type="radio" value="small" v-model="form.size"
              class="p-2 mr-3.5 ml-1.5 appearance-none rounded-[5px] h-2 w-2 outline outline-3 outline-secondary outline-offset-4 checked:inline-block checked:bg-secondary" />Small
          </label>
          <label class="py-5">
            <input name="PostSize" type="radio" value="large" v-model="form.size"
              class="p-2 mr-3.5 ml-1.5 appearance-none rounded-[5px] h-2 w-2 outline outline-3 outline-secondary outline-offset-4 checked:inline-block checked:bg-secondary" />Large
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
import { useForm, usePage } from "@inertiajs/vue3";
import AlertError from "./AlertError.vue";
import type { user } from '../../../types/type'

const currentUser = usePage().props.currentUser
defineProps({ errors: Object })

type Form = { size: string; file: File | undefined; description: string; type_post: number; user_id: number; };
const form = useForm<Form>({ size: '', file: undefined, description: '', type_post: 2, user_id: (currentUser as user).id });

const submit = async () => {
  form.post("/postimg", {
    onSuccess: () => location.reload(),
  });
};
</script>
