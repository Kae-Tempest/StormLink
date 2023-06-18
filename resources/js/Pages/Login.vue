<template>
    <div>
        <div class="flex w-screen h-screen">
            <div class="lg:w-1/3 lg:m-auto my-auto mx-5 w-full">
                <p v-if="$page.props.errors" class="mt-2 mb-4 w-full text-lg text-center text-red-500">
                    {{ $page.props.errors.msg }}
                </p>
                <form @submit.prevent="login">
                    <AuthInput :placeholder="'Email'" :type="'text'" :iconName="['fas', 'at']" v-model="form.email" />
                    <AuthInput :placeholder="'Password'" :type="'password'" :iconName="['fas', 'lock']"
                        v-model="form.password" />
                    <button type="submit" class="mx-auto text-xl w-full bg-blue-900 h-14 rounded px-3">LOGIN</button>
                </form>
                <div class="flex justify-between text-slate-700">
                    <TLink href="/resetpass">Forgotten password ?</TLink>
                    <TLink href="/signup">Any account ? Sign up</TLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import AuthInput from '../components/Auth/Input.vue';
import { useForm } from '@inertiajs/vue3';

defineProps({ errors: Object })

type Form = { email: string; password: string; };
const form = useForm<Form>({ email: '', password: '' });


const login = async () => {
    form.post('/login')
}

</script>