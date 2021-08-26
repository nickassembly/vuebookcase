<template>
<div>
    <h1>My Bookcase</h1>
   <div v-for="book in books" :key="book.key">
        <div> {{ book.title }} </div>
   </div>
   </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from 'vue'
import { Work } from '../models/books';
import bookApi from "../http/bookapi";

export default defineComponent({
    setup() {

const books: Ref<Work[]> = ref([]);

onMounted(async () => await load("science_fiction"));

async function load(category: string) {
const result = await bookApi(category);

if (result) books.value = result;
}

return {
    books
};
    },
})

</script>
