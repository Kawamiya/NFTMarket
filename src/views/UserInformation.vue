<template>
    UserInformation
    <div class="w-full px-4 py-4 lg:px-8 lg:py-10">
        <div class="px-4 mx-auto mt-4 lg:mt-8 lg:px-7 lg:w-10/12">
            <template v-if="list.length == 0">
                <div class="flex justify-center flex-col items-center mt-24">
                <span class="text-gray-600">no data</span>
                </div>
            </template>
            <template v-else>
                <div
                    class="
                        rounded
                        shadow
                        list-item
                        shadow-md
                        border border-indigo-300
                    "
                    >
                    <a href="">
                        <div class="rounded-t image-wrapper p-4">
                        <!-- <img :src="slotProp.item.image" class="w-full align-middle" /> -->
                            <img :src= "require('@/assets/logo.png')" class="w-full align-middle" />
                        </div>
                    </a>

                    <div>
                        <div class="flex justify-between px-2 mt-2">
                            <div class="text-sm">name</div>
                            <div class="text-sm text-indigo-700">
                                {{ list.name }}
                            </div>
                        </div>
                        <div class="flex justify-between px-2 mt-2">
                            <div class="text-sm">price</div>
                            <div class="text-sm text-indigo-700">
                                {{ list.price }}
                            </div>
                        </div>

                        <!-- <div class="flex justify-between px-2 mt-2">
                        <div class="text-sm">description</div>
                        <p class="text-xs text-left text-gray-500">
                            {{ list.description }}
                        </p>
                        </div> -->
                    </div>
                 </div>
            </template>
        </div>
    </div>
</template>



<script>
import Web3 from "web3"
import { reactive, ref, onMounted } from "vue";

export default {
    setup(){
        const list = ref([]);
        const items= {
    name:"1234",
    price: 0.25,
    owner: 123,
    image: "@/assets/logo.png",};

    list.value=items;
        return {list} 
    },
    name: "UserInformation",
    created() {
        this.$store.dispatch("getWeb3");
    },
}
</script>

<style scoped>

</style>