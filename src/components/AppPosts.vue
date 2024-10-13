<script setup >
  import AppPost from "@/components/AppPost.vue";


  defineProps({
    posts: {
      type: Array
    },
  });
</script>

<template>
  <div class="posts">
    <AppPost
      v-for="(post, index) in posts"
      :post="post"
      :key="post.imdbID || index"
    />
  </div>
</template>

<style scoped>
  .posts {
    padding: 40px 0;
    display: grid;
    gap: 50px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
</style>