<template>
    <div class="md:flex font-lato">
        <div class="bg-sky-900 md:w-48 md:min-h-screen">
            <SidebarLayout />
        </div>
        <div class="w-screen md:min-h-screen relative"> 
            <HeaderLayout />
            <div class="p-3">
                <router-view />
            </div>
            <FooterLayout />
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import SidebarLayout from './SidebarLayout.vue'
import HeaderLayout from './HeaderLayout.vue'
import FooterLayout from './FooterLayout.vue'

export default defineComponent({
    components: {
        SidebarLayout,
        HeaderLayout,
        FooterLayout
    },
    setup() {
        
    },
})
</script>
