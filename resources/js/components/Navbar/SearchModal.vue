<template>
  <button class="btn btn-ghost text-lg short:text-sm my-2.5" @click="showSearchModal">search</button>
  <div v-if="SearchModal" class="absolute inset-0 w-screen h-full bg-base-300/50 z-30">
    <button class="btn btn-ghost border-none outline-none text-red-500 text-sm p-1.5 absolute top-0 right-10" @click="showSearchModal">
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
      </svg>
    </button>
    <div class="relative rounded-sm top-[20%] left-[30%] h-full z-50">
      <form @submit.prevent="submit"></form>
      <div class="grid w-1/2 h-fit pt-5">
        <input type="text" placeholder="Search..." v-model="form.search"
               class="input input-bordered input-primary pl-2 col-[1/1] row-[1/1]" @input="submit">
        <button class="bg-primary rounded-[5px] py-2 px-5 ml-auto col-[1/1] row-[1/1]" type="submit" @click="submit">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" size="xl" />
        </button>
      </div>
      <div v-if="users" class="relative w-1/2 bg-base-200 shadow-lg h-80 overflow-hidden rounded-t-lg">
        <div class="overflow-auto flex flex-col divide-y h-80 divide-slate-200/5">
          <div v-for="user in users">
              <TLink :href="`/user/${user.id}`" >
              <div class="flex items-center gap-4 p-4">
                <img v-if="user.avatar" :src="user.avatar" :alt="user.avatar" class="w-12 h-12 rounded-full border border-secondary">
                <img v-else src="@@/defaultUser.png" alt="default user" class="w-12 h-12 rounded-full border border-secondary">
                <strong class="white text-md font-medium">{{ user.username }}</strong>
              </div>
            </TLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useForm} from "@inertiajs/vue3";
import axios from "axios";
import {User} from "../../types/type.ts";

const form = useForm({search: ''})
const SearchModal = ref(false)
const users = ref<User[] | null>()

const submit = async () => {
  const { data } = await axios.post('/search',{
    search: form.search
  })
  users.value = data
}
const showSearchModal = () => {
  SearchModal.value = !SearchModal.value
  if (users) {
    users.value = null
  }
}
</script>