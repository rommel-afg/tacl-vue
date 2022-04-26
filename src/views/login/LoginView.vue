<template>
    <div class="flex justify-center h-screen">
        <div class="w-96 m-auto">
            <div class="block px-2 py-5 bg-white rounded-md border border-gray-200 shadow-md">
                <div class="text-center content-center pb-3">
                    <img src="@/assets/images/logo.png" alt="logo-afg" class="w-64 m-auto">
                    <h1 class="font-bold md:tracking-[.25em] sm:tracking-[.45em] xs:tracking-normal my-5 text-2xl">
                        TACL
                    </h1>
                </div>
                <div class="form md:px-5 sm:px-2 xs:px-1">
                    <div class="form-group mb-2">
                        <label for="username" class="block text-sm py-2">Username / Email </label>
                        <input type="text" class="w-full bg-gray-50 p-1.5 rounded-sm border border-gray-300 text-gray-500 text-sm focus:ring-blue-400 focus:border-blue-400">
                    </div>
                    <div class="form-group mb-2">
                        <label for="password" class="block text-sm py-2">Password</label>
                        <input type="text" class="w-full bg-gray-50 p-1.5 rounded-sm border border-gray-300 text-gray-500 text-sm focus:ring-blue-400 focus:border-blue-400">
                    </div>
                    <div class="form-group mb-2 mt-5 flex">
                        <button @click="login" class="border-sky-900 text-sm text-white py-2 md:px-10 sm:px-6 xs:px-4 rounded-sm bg-sky-800 hover:bg-sky-700">Login</button>
                        <span class="grow"></span>
                        <router-link to="/" class="block text-xs py-3 hover:underline">Forgot Password?</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
    setup() {
        const router = useRouter();

        const login = () => {
            router.push('/')
        }

        return {
            login
        }
    },
})
</script>
