<template>
    <div class="flex justify-between">
        <div class="flex my-auto">
            <img v-if="props.user.avatar" alt=""
                :src="props.user.avatar"
                class="border-2 border-secondary rounded-full w-[60px] h-fit"> <!-- put correct user avatar -->
            <img v-else src="/assets/defaultUser.png" alt=""
                 class="border-2 border-secondary rounded-full w-[60px] h-fit">
            <div class=" ml-4 my-auto text-xl">
                {{ props.user.username }}
            </div>
        </div>
        <div v-if="props.type == 1" class="break-words text-center my-auto">
            {{ props.desc }}
        </div>
        <div class="text-right my-auto flex mx-5 justify-end">
            <div v-if="!like" @click="liked()">
                <font-awesome-icon :icon="['far', 'heart']" size="2xl" class="pr-5" />
                <span>{{ props.like }}</span>
            </div>
            <div v-if="like" @click="liked()">
              <font-awesome-icon :icon="['fas', 'heart']" size="2xl" class="pr-5" />
              <span>{{ props.like }}</span>
            </div>
            <div>
                <font-awesome-icon :icon="['far', 'message']" size="2xl" class="px-5" />
                <span>{{ props.nbPost }}</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import { useForm } from "@inertiajs/vue3";
import {User} from "../../types/type.ts";
interface Props {
  user: User,
  like: number,
  desc: string,
  size: string,
  type: number,
  nbPost: number,
  post_id: number,
  liked: boolean
}
const props = defineProps<Props>()

const like = ref(props.liked);
let form: any
if (like.value === true){
   form = useForm({like: props.like - 1})
} else form = useForm({like: props.like + 1})

const liked = () =>{
  console.log(props.liked)
  form.patch(` /like/${props.post_id}`,{
    onSuccess: () => {location.reload()}
  })
}

</script>