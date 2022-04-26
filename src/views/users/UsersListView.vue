<template>
    <div class="">
        <div class="page-title py-3">
            <div class="flex">
                <h1 class="font-bold">Users</h1>
                <span class="grow"></span>
            </div>
        </div>
        <card-component :title="'Account List'">
            <template v-slot:headerBtn>
                <router-link class="px-3 py-2 bg-emerald-600 border border-emerald-600 text-white text-sm hover:bg-emerald-700 flex uppercase font-semibold" to="/">
                    <UserAddIcon class="h-5 w-5 stroke-1 mx-1" /> Create User
                </router-link>
            </template>
            <template v-slot:body>
                <UsersDataTable 
                    :isLoading="loading" 
                    :tableHeaders="tableHeaders" 
                    :tableBody="userList"
                    :isAction="true" />
            </template>
        </card-component>
    </div>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { UserAddIcon } from '@heroicons/vue/solid'
import CardComponent from '@/components/card/CardComponent.vue'
import UsersDataTable from '@/components/tables/UsersDataTable.vue'

export default defineComponent({
    components: {
        CardComponent,
        UsersDataTable,
        UserAddIcon
    },
    setup() {
        const store = useStore();
        const userList = ref([]);
        const tableHeaders = ref([
            "Full Name", 
            "Email Address",
            "Role",
            "Status"
        ])

        // get all users
        onMounted(()=> {
            store.dispatch("getAllUsers")
                .then(response => {
                    userList.value = response.data
                    console.log('user list', userList.value)
                })
            
        })

        const loading = computed(() => {
            return store.getters.isLoading;
        })

        return {
            userList,
            tableHeaders,
            loading
        }
    }
})
</script>