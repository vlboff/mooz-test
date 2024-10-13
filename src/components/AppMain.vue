<script setup>
  import { ref, watch, defineProps } from "vue";

  import AppPosts from "@/components/AppPosts.vue";
  import AppPagination from "@/components/AppPagination.vue";
  import getSearchedPosts from "@/API/getSearchedPosts.js";
  import { debounce } from "@/utils/debounce.js";

  const props = defineProps({
    inputValue: {
      type: [String, Number],
      default: '',
    }
  });

  const loading = ref(false)

  const posts = ref(null);
  const error = ref(null);
  const total = ref(null);
  const currentPage = ref(1);

  const setCurrentPage = (page) => {
    currentPage.value = page
  }

  const  getSearchValue = async (newValue) => {
    loading.value = true;
    try {
      const { Error, Search, totalResults } = await getSearchedPosts(newValue, currentPage.value);

      posts.value = Search;
      error.value = Error;
      total.value = totalResults;
    } catch (err) {
      error.value = `An error occurred during the search: ${err}`;
    } finally {
      loading.value = false;
    }
  };

  const debouncedGetSearchValue = debounce(getSearchValue, 500);

  watch(() => props.inputValue, (newValue) => {
    if (newValue.trim()) {
      debouncedGetSearchValue(newValue);
    }
  });

  watch(currentPage, () => {
    debouncedGetSearchValue(props.inputValue, currentPage.value);
  });

</script>

<template>
  <div class="main">
    <div class="main__loading" v-if="loading">
      <div class="loader"></div>
    </div>
    <div class="main__info" v-else-if="error">
      <h2> {{ error }} </h2>
    </div>
    <div class="main__posts" v-else-if="posts">
      <div class="main__info" v-if="total">
        <h2>{{ `You searched for: ${total} results found` }}</h2>
      </div>
      <AppPosts :posts="posts"/>
    </div>
    <div class="main__info" v-else>
      <h2>Nothing found for your request</h2>
    </div>
    <AppPagination :total="total" @current-page="setCurrentPage"/>
  </div>
</template>

<style scoped>
  .main {
    position: relative;
    padding: 30px 0;
  }

  .main__loading {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
