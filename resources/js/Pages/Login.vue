<template>
    <div>
        <div class="flex w-screen h-screen">
            <div class="w-1/2 m-auto">
                <p v-if="$page.props.errors" class="mt-2 mb-4 w-full text-lg text-center text-ctp-red">
                    {{ $page.props.errors.msg }}
                </p>
                <form @submit.prevent="login">
                    <AuthInput :placeholder="'Email'" :type="'text'" :iconName="['fas', 'at']" v-model="form.email" />
                    <AuthInput :placeholder="'Password'" :type="'password'" :iconName="['fas', 'lock']"
                        v-model="form.password" />
                    <button type="submit" class="mx-auto text-xl w-full bg-ctp-blue h-14 rounded px-3">LOGIN</button>
                </form>
                <div class="flex justify-between text-ctp-text/25">
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
    form.post('login', {
        onError: errors => { console.log(errors) },
        onFinish: visit => console.log('finish')
        ,
    })
}

</script>