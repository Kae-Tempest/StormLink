<template>
  <!-- You can open the modal using ID.showModal() method -->
  <div onclick="userSettings.showModal()">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="w-8 h-8">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </div>
  <dialog id="userSettings" class="modal text-white bg-base-300/50">
    <form method="dialog" class="modal-box w-full h-5/6 max-w-7xl border-2 border-secondary">
      <form @submit.prevent="submit">
        <div v-if="$page.props.errors">
          <AlertError :error="$page.props.errors.msg" />
        </div>
        <label class="cursor-pointer w-16 flex items-center">
          <input @input="form.avatar = ($event.target as HTMLInputElement).files?.[0]" type="file" class="hidden" />
          <img v-if="(currentUser as userType).avatar" :src="(currentUser as userType).avatar?.url" alt=""
            class="border border-secondary rounded-full">
          <img v-else src="../../../assets/defaultUser.png" alt="" class="border border-secondary rounded-full">
          <span class="text-2xl ml-[1rem]">{{ (currentUser as userType).username }}</span>
        </label>
        <div class="mt-16 flex flex-col">
          <div class="my-5 flex items-center">
            <label class="w-32 mr-3 text-right">Username</label>
            <input type="text" :placeholder="(currentUser as userType).username"
              class="input input-bordered input-primary w-full max-w-xl" v-model="form.username" />
          </div>
          <div class="my-5 flex items-center">
            <label class="w-32 mr-3 text-right">Bio</label>
            <textarea type="text" :placeholder="(currentUser as userType).bio || 'any bio'"
              class="textarea textarea-primary textarea-lg w-full max-w-xl resize-none" v-model="form.bio" />
          </div>
          <div class="my-5 flex items-center">
            <label class="w-32 mr-3 text-right">Email</label>
            <p class="w-full max-w-xl h-[3rem] border border-primary rounded-md text-white/60 flex items-center">{{
              ($page.props.currentUser as userType).email }}</p>
          </div>
          <div class="my-5 flex items-center mt-12">
            <label class="w-32 mr-3 text-right">Old password</label>
            <input type="password" class="input input-bordered input-primary w-full max-w-xl" v-model="form.old_pass" />
          </div>
          <div class="my-5 flex items-center">
            <label class="w-32 mr-3 text-right">New password</label>
            <input type="password" class="input input-bordered input-primary w-full max-w-xl" v-model="form.new_pass" />
          </div>
          <div class="my-5 flex items-center">
            <label class="w-32 mr-3 text-right">Confirm new password</label>
            <input type="password" class="input input-bordered input-primary w-full max-w-xl"
              v-model="form.confirm_new_pass" />
          </div>
        </div>
        <button class="btn btn-secondary float-right mt-5">Update Info</button>
      </form>
      <div class="modal-action">
        <!-- if there is a button, it will close the modal -->
        <button class="btn btn-ghost border-none outline-none text-red-500 text-sm p-1.5 absolute top-0 right-0">
          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </form>
  </dialog>
</template>


<script setup lang="ts">
import { usePage, useForm } from '@inertiajs/vue3'
import type { userType } from '../../types/type'
import AlertError from './AlertError.vue';

const currentUser = usePage().props.currentUser

type Form = { avatar: File | undefined; username: string; bio: string; old_pass: string; new_pass: string; confirm_new_pass: string }
const form = useForm<Form>({ avatar: undefined, username: '', bio: '', old_pass: '', new_pass: '', confirm_new_pass: '' })

const submit = () => {
  form.post(`/usersettings/${(currentUser as userType).id}`, {
    onSuccess: () => location.reload(),
  })
}
</script>