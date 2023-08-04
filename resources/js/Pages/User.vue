<template>
    <div>
        <NavBar :user="props.ConnectUser" :errors="props.errors" />
        <div class="pl-[8rem] md:pl-[max(0px,15%)]">
            <UserInfo
                :user="props.user"
                :errors="props.errors"
                :nbPost="props.posts.length"
                :ConnectUserId="props.ConnectUser.id"
                :Followers="props.followers"
                :Followed="props.followed"
            />
            <Posts
                :user="props.user"
                :posts="props.posts"
                :ConnectUser="props.ConnectUser"
                @PostData="SetData"
            />
          <dialog id="deleteModal" class="modal">
            <form method="dialog" class="modal-box">
              <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              <h3>Do you delete this post ?</h3>
              <button @click="destroy()" class="btn m-4 btn-primary">yes! i'm sure</button>
              <button class="btn m-4 btn-error">No, cancel</button>
            </form>
            <form method="dialog" class="modal-backdrop"><button></button></form>
          </dialog>
        </div>
    </div>
</template>
<script setup lang="ts">
import UserInfo from '../components/User/UserInfo.vue'
import NavBar from '../components/Navbar/NavBar.vue'
import Posts from '../components/User/Posts.vue'
import {Post, User} from "../types/type.ts";
import {useForm} from "@inertiajs/vue3";

interface Props {
  user: User
  posts: Post[]
  ConnectUser: User
  errors: {}
  followers: []
  followed: []
}

const SetData = () => {
  console.log('42')
}


const form = useForm({post_id: 1})
const destroy = () => {
  form.delete('/post',{
    onSuccess: () => {
      location.reload()
    }
  })
}


const props = defineProps<Props>()
</script>
