<template>
    <div class="tacl-table my-5">
        <div class="flex items-center text-sm">
            <select class="px-2 py-1 border border-solid border-gray-200">
                <option value="">Actions</option>
                <option value="delete">Delete</option>
                <option value="deactivate">Deactivate</option>
            </select>
        </div>
        <table class="w-full text-sm text-left text-gray-500 my-3">
            <thead class="text-xs text-gray-50 uppercase bg-emerald-800">
                 <tr>
                     <th scope="col" class="p-4">
                        <div class="flex items-center">
                            <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded">
                            <label for="checkbox-all-search" class="sr-only">checkbox</label>
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3" v-for="head, i in headData" :key="head">
                        <div class="flex">
                            <span class="pr-2">{{ head.text }}</span>
                            <button type="button" @click="sortBy(head.text, i)">
                                <component :is="head.icon" class="h-4 w-4" />
                            </button>
                        </div>
                    </th>
                    <th v-if="isAction" scope="col" class="px-6 py-3">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="isLoading">
                    <td :colspan="loadSpan" class="text-center">
                        <button type="button" class="font-medium text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center" disabled>
                            <svg role="status" class="inline w-4 h-4 mr-2 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            Fetching Data...
                        </button>
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="body in bodyData" :key="body">
                    <td class="w-4 p-4">
                        <div class="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded">
                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                        </div>
                    </td>
                    <td scope="row" class="px-6 py-4">
                        <router-link class="hover:underline text-sky-700 font-semibold" :to="`/users/view/${body._id}`">{{ body.fullName }}</router-link>
                    </td>
                    <td scope="row" class="px-6 py-4">{{ body.emailAddress }}</td>
                    <td></td>
                    <td></td>
                    <td v-if="isAction" class="w-4 p-4">
                        <div class="flex items-center">
                            <router-link class="px-2 py-1 mx-1 bg-emerald-600 border border-emerald-600 text-white text-xs hover:bg-emerald-700" :to="`/users/view/${body._id}`">View</router-link>
                            <router-link class="px-2 py-1 mx-1 bg-sky-600 border border-sky-600 text-white text-xs hover:bg-sky-700" :to="`/users/edit/${body._id}`">Edit</router-link>
                            <button type="button" class="px-2 py-1 mx-1 border border-rose-700 bg-rose-600 text-white text-xs hover:bg-rose-700">Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="flex my-3">
            <div class="text-sm">
                Page {{ curPage }} of {{ pageTotal }}
            </div>
            <div class="grow"></div>
            <div class="paginate">
                <ul class="flex">
                    <li v-if="curPage !== 1">
                        <button @click="pageClick(curPage-1)" class="border border-solid border-sky-800 mx-1 text-xs font-bold px-2 py-1 text-gray-800 hover:bg-sky-900 hover:text-gray-50 hover:cursor-pointer" type="button">
                            Prev
                        </button>
                    </li>
                    <li v-for="startIndex in endIndex" :key="startIndex">
                        <button @click="pageClick(startIndex)" :class="startIndex === curPage ? 'bg-sky-700 border border-solid border-sky-800 mx-1 text-xs font-bold px-2 py-1 text-gray-50 hover:bg-sky-900 hover:text-gray-50' : 'border border-solid border-sky-800 mx-1 text-xs font-bold px-2 py-1 text-gray-800 hover:bg-sky-900 hover:text-gray-50' " type="button">
                            {{ startIndex }}
                        </button>
                    </li>
                    <li v-if="curPage !== pageTotal"  >
                        <button @click="pageClick(curPage+1)" class="border border-solid border-sky-800 mx-1 text-xs font-bold px-2 py-1 text-gray-800 hover:bg-sky-900 hover:text-gray-50" type="button">
                            Next
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/vue/solid'

export default defineComponent({
    components: {
        ArrowSmDownIcon,
        ArrowSmUpIcon
    },
    props: {
        isLoading: Boolean,
        isAction: Boolean,
        tableHeaders: Array,
        tableBody: Array
    },
    setup(props){
        // sort
        const sort = ref('asc')
        const sortedBy = ref("fullName")
        const sortIndex = ref(0)

        // paginate
        const curPage = ref(1) // current page
        const pageSize = ref(5) // data per page
        const startIndex = ref(0)
        const endIndex = ref(0)

        const loadSpan = computed(() => {
            return props.isAction ? props.tableHeaders.length + 1: props.tableHeaders.length
        })
        
        const headData = computed(() => {
            let data = props.tableHeaders
            let hold = []

            for( let i = 0; i < data.length; i++ ) {
                let icon = ArrowSmDownIcon
                if( sortIndex.value === i ) {
                    if( sort.value === 'desc' ) {
                        icon = ArrowSmUpIcon
                    }
                }
                hold.push({
                    text: data[i],
                    icon:  icon
                })
            }

            return hold
        })

        const pageTotal = computed(() => {
            return Math.ceil(props.tableBody.length / pageSize.value);
        })

        const paginate = (arr) => {
            let start = ( curPage.value - 1 ) * pageSize.value
            let end = start + pageSize.value

            let startPage = 0
            let endPage = 0
            let maxPages = 5
            if (pageTotal.value <= maxPages) {
                // total pages less than max so show all pages
                startPage = 1;
                endPage = pageTotal.value;
            } else {
                let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
                let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;

                if (curPage.value <= maxPagesBeforeCurrentPage) {
                    // current page near the start
                    startPage = 1;
                    endPage = maxPages;
                } else if (curPage.value + maxPagesAfterCurrentPage >= pageTotal.value) {
                    // current page near the end
                    startPage = pageTotal.value - maxPages + 1;
                    endPage = pageTotal.value;
                } else {
                    // current page somewhere in the middle
                    startPage = curPage.value - maxPagesBeforeCurrentPage;
                    endPage = curPage.value + maxPagesAfterCurrentPage;
                }
            }

            startIndex.value = startPage
            endIndex.value = endPage

            return arr.slice(start, end)
        }

        const bodyData = computed(() => {
            let data = props.tableBody
            // filter data

            // sort data
            data = data.sort((a,b) => {
                if( sort.value === 'asc' )
                    return (a[sortedBy.value] > b[sortedBy.value]) ? 1 : ((b[sortedBy.value] > a[sortedBy.value]) ? -1 : 0)
                else
                    return (b[sortedBy.value] > a[sortedBy.value]) ? 1 : ((a[sortedBy.value] > b[sortedBy.value]) ? -1 : 0)
            })
            // paginate data
            let temp = paginate(data)
            data = temp;

            return data;
        })

        const pageClick = (n) => {
            curPage.value = n;
        }
        
        const sortBy = async (th, index) => {
            let temp = th.toLowerCase().split(" ")
            let sortBy = ""
            if( temp.length > 1 ) {
                for( let i = 0; i < temp.length; i++ ) {
                   if( i === 0 ) {
                       sortBy = temp[i]
                   } else {
                       sortBy += temp[i].charAt(0).toUpperCase() + temp[i].substring(1)
                   }
                }
            } else {
                sortBy = temp;
            }
            
            sortedBy.value = sortBy
            sortIndex.value = index

            if( sort.value === 'asc' ) {
                sort.value = 'desc'
            } else {
                sort.value = 'asc'
            }

            return sortBy
        }
        
        return {
            loadSpan,
            bodyData,
            headData,
            sortBy,
            curPage,
            pageTotal,
            pageClick,
            startIndex,
            endIndex
        }
    }
})
</script>