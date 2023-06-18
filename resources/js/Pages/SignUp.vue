<template>
    <div>
        <div class="flex w-screen h-screen">
            <div class="lg:w-1/3 lg:m-auto my-auto mx-5 w-full">
                <p v-if="$page.props.errors" class="mt-2 mb-4 w-full text-lg text-center text-red-500">
                    {{ $page.props.errors.msg }}
                </p>
                <form @submit.prevent="signup">
                    <AuthInput :placeholder="'Username'" :type="'text'" :iconName="['fas', 'user']"
                        v-model="form.username" />
                    <AuthInput :placeholder="'Email'" :type="'text'" :iconName="['fas', 'at']" v-model="form.email" />
                    <AuthInput :placeholder="'Password'" :type="'password'" :iconName="['fas', 'lock']"
                        v-model="form.password" />
                    <button type="submit" class="mx-auto text-xl w-full bg-blue-900 h-14 rounded px-3">SIGN UP</button>
                </form>
                <div class="flex justify-end text-slate-700">
                    <TLink href="/login">Already have an account ? Log In</TLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup >
import AuthInput from '../components/Auth/Input.vue';
import { useForm } from '@inertiajs/vue3';

defineProps({ errors: Object })

type Form = { username: string; email: string; password: string };
const form = useForm<Form>({ username: '', email: '', password: '' });

const signup = async () => {
    form.post('/signup')
}

</script>