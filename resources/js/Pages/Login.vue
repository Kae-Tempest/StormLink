<template>
    <div>
        <div class="flex w-screen h-screen">
            <div class="w-1/4 m-auto">
                <div v-if="$page.props.errors" class="alert alert-error mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{{ $page.props.errors.msg }}</span>
                </div>
                <form @submit.prevent="login">
                    <AuthInput :placeholder="'Email'" :type="'text'" :iconName="['fas', 'at']" v-model="form.email" />
                    <AuthInput :placeholder="'Password'" :type="'password'" :iconName="['fas', 'lock']"
                        v-model="form.password" />
                    <button type="submit" class="mx-auto text-xl w-full bg-primary h-14 rounded px-3">LOGIN</button>
                </form>
                <div class="flex justify-between text-slate-500">
                    <TLink href="/resetpass" class="hover:text-stone-300">Forgotten password ?</TLink>
                    <TLink href="/signup" class="hover:text-stone-300">Any account ? Sign up</TLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import AuthInput from '../components/Auth/Input.vue'
import { useForm } from '@inertiajs/vue3'

defineProps({ errors: {} })

type Form = { email: string; password: string; };
const form = useForm<Form>({ email: '', password: '' });


const login = async () => { form.post('/login') }

</script>