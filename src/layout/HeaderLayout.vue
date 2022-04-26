<template>
    <div class="bg-gray-100 p-2 flex flex-row">
        <div class="grow"></div>
        <router-link to="/login" class="border-sky-900 bg-sky-800 text-xs mr-3 px-3 py-1.5 hover:bg-sky-700 text-white">Logout</router-link>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: "header-layout",
    setup() {
        
    },
})
</script>