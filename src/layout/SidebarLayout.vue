<template>
    <div class="sidebar">
        <div class="sidebar-title py-5 text-center">
            <span class="text-white font-bold md:tracking-[1em] sm:tracking-[.75em] xs:tracking-normal">TACL</span>
        </div>
        <div class="overflow-y-auto mt-5">
            <ul class="space-y-2">
                <li v-for="menu in menuLinks" :key="menu.text">
                    <h3 v-if="menu.heading" class="px-2 py-1 text-teal-500 font-semibold text-sm">{{ menu.heading }}</h3>
                    <router-link :to="menu.link" :class="`flex items-center px-3 py-3 font-normal text-white text-xs ${ menu.heading ? 'ml-2' : '' }`">
                        <component :is="menu.icon" class="h-5 w-5 stroke-1" />
                        <span class="px-2">{{ menu.text }}</span>
                    </router-link>
                    <ul v-if="menu.submenu">
                        <li v-for="sub in menu.submenu" :key="sub.text">
                            <router-link :to="sub.link" class="flex items-center px-3 py-3 font-normal text-white text-xs ml-2">
                                <component :is="sub.icon" class="h-5 w-5 stroke-1" />
                                <span class="px-2">{{ sub.text }}</span>
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { menuLinks } from './menu/menu'

export default defineComponent({
    name: "sidebar-layout",
    setup() {
        
        return {
            menuLinks
        }
    },
})
</script>
