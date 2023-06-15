<template>
    <div>
        <div class="flex w-screen h-screen">
            <div class="w-1/2 m-auto">
                <form @submit.prevent="signup">
                    <AuthInput :placeholder="'Username'" :type="'text'" :iconName="['fas', 'user']"
                        v-model="form.username" />
                    <AuthInput :placeholder="'Email'" :type="'text'" :iconName="['fas', 'at']" v-model="form.email" />
                    <AuthInput :placeholder="'Password'" :type="'password'" :iconName="['fas', 'lock']"
                        v-model="form.password" />
                    <button type="submit" class="mx-auto text-xl w-full bg-ctp-blue h-14 rounded px-3">SIGN UP</button>
                </form>
                <div class="flex justify-end text-ctp-text/25">
                    <TLink href="/login">Already have an account ? Log In</TLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup >
import AuthInput from '../components/Auth/Input.vue';
import { useForm } from '@inertiajs/vue3';


type Form = { username: string; email: string; password: string };
const form = useForm<Form>({ username: '', email: '', password: '' });

const signup = async () => {
    form.post('signup')
}

</script>