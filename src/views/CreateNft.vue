<template>
  <div
    class="
      w-full
      pb-8
      min-h-screen
      pt-28
      mx-auto
      bg-gray-50
      lg:pt-46
      bg-gradient-to-r
      from-indigo-700
      to-indigo-200
    "
  >
    <h1
      class="text-2xl font-bold text-center text-white md:text-3xl xl:text-5xl"
    >
      Create a new NFT
    </h1>
    <p
      class="
        px-2
        mt-8
        text-xs
        font-bold
        text-center text-white
        md:text-lg
        xl:text-base
      "
    >
      please upload your NFT image
    </p>
   
    <div
      v-show="!uploadFile"
      @click="uploadClick"
      class="
        mt-8
        cursor-pointer
        w-40
        h-40
        border border-dashed border-gray-200
        mx-auto
        flex
        justify-center
        items-center
      "
    >
      <img :src="plusImg" class="w-10 h-10 block" />
    </div>
    <input type="file" accept="image" @change=uploadImage>
    <div
      class="w-48 h-72 min mx-auto mt-2 flex flex-col items-center"
      v-show="uploadFile && imgBase64"
    >
      <img :src="imgBase64" class="w-full max-h-72 block mx-auto" alt="" />
      <div
        class="btn btn-sm bg-indigo-200 mt-2 text-indigo-700"
        @click="resetFile"
      >
        Withdraw
      </div>
    </div>

    <div class="flex flex-col justify-center mt-12">
      <div class="mb-6 w-80 lg:w-96 mx-auto box flex flex-col">
        <input
          v-model="price"
          placeholder="price：ether,integer"
          class="
            bg-white
            rounded
            text-sm
            border-none
            text-grey-darkest
            flex-1
            w-full
            px-2
            mt-2
            py-3
            focus:ring-0
            outline-none
          "
        />
      </div>

      <div class="mx-auto btn bg-indigo-800 btn-md" @click="submit">Submit</div>
      <!-- <p class="mx-auto text-white" v-if="file">
        {{ file.name }} <span @click="resetFile">x</span>
      </p> -->
    </div>

    <!-- <input
      type="file"
      class="hidden"
      ref="fileInput"
      @click="(e:Event)=>{
    (e.target as HTMLInputElement).value = ''}"
      @change="chooseFile"
      accept="image/*,.txt"
    /> -->
  </div>
</template>

<script lang="ts" setup>
import plusImg from "../../../../Users/24656/OneDrive/文档/2023Spring/6883/NFTMarket-master/NFTMarket-master/src/assets/plus.jpeg";
import { onMounted, ref, unref } from "vue";
import { isImage, isTxt, isSizeValid, fileToBase64 } from "../../../../Users/24656/OneDrive/文档/2023Spring/6883/NFTMarket-master/NFTMarket-master/src/utils/files";
import { useStore } from "vuex";

const fileInput = ref<HTMLElement | null>(null);
const uploadFile = ref<File | null>(null);
const imgBase64 = ref<string>("");

const store = useStore();


async function uploadImage(e: Event): Promise<void> {
  const el = e.target as HTMLInputElement;
  const files=el.files as FileList;
  if (files.length > 0) {
    // 必须是文本或图片且大小不超过200kb
    if (!isImage(files[0])) {
      alert("only image within 200k");
      return;
    }
    uploadFile.value = files[0];
    // web3.test();
    imgBase64.value = await fileToBase64(uploadFile.value);
  }
}

// web3.test();
// imgBase64.value = await fileToBase64(uploadFile.value);
function resetFile(): void {
    uploadFile.value = null;
    imgBase64.value = "";
    console.log();
}

</script>

<style scoped>

</style>