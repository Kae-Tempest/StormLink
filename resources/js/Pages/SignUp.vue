<template>
    <div>
        <div class="flex w-screen h-screen">
            <div class="w-1/4 m-auto">
                <div v-if="props.errors.msg">
                    <AlertError :error="props.errors.msg" />
                </div>
                <form @submit.prevent="signup">
                    <AuthInput :placeholder="'Username'" :type="'text'" :iconName="['fas', 'user']"
                        v-model="form.username" />
                    <AuthInput :placeholder="'Email'" :type="'email'" :iconName="['fas', 'at']" v-model="form.email" />
                    <AuthInput :placeholder="'Password'" :type="'password'" :iconName="['fas', 'lock']"
                        v-model="form.password" />
                    <button type="submit" class="mx-auto text-xl w-full bg-primary h-14 rounded px-3">SIGN UP</button>
                </form>
                <div class="flex justify-end text-slate-700 hover:text-stone-300">
                    <TLink href="/login">Already have an account ? Log In</TLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup >
import AlertError from '../components/Auth/AlertError.vue'
import AuthInput from '../components/Auth/Input.vue'
import { useForm } from '@inertiajs/vue3'

const props = defineProps({ errors: Object })

type Form = { username: string; email: string; password: string };
const form = useForm<Form>({ username: '', email: '', password: '' });

const signup = async () => { form.post('/signup') }
</script>