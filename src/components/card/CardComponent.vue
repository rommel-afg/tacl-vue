<template>
    <div class="block p-2 bg-white rounded-md border border-gray-200 shadow-md">
        <div class="card-title border-b border-gray-200 flex items-center pb-2">
            <h3 class="font-semibold">{{ title }}</h3>
            <span class="grow"></span>
            <slot name="headerBtn"></slot>
        </div>
        <div class="card-body my-3">
            <slot name="body"></slot>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        title: String
    },
    setup() {
        
    },
})
</script>
