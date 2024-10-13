<script setup>

  const props = defineProps({
    post: {
      type: Object,
      required: true,
    },
  });

</script>

<template>
  <div class="post">
    <div class="post__content" v-if="post">
      <div class="post__visual">
        <img class="post__image" v-if="post.Poster && post.Poster !== 'N/A'" :src="post.Poster" alt="image" >
        <img class="post__image" v-else src="/src/assets/image_not_available.jpg" alt="image" >
      </div>
      <div class="post__info">
        <p class="post__text" v-if="post.Title">{{ `Name: ${post.Title}` }}</p>
        <p class="post__text" v-if="post.Year">{{ `Year: ${post.Year}` }}</p>
        <p class="post__text" v-if="post.imdbID">{{`imdbID: ${post.imdbID}` }}</p>
        <p class="post__text" v-if="post.Type">{{ `Type: ${post.Type}` }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .post__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .post__visual {
    display: flex;
    justify-content: center;
    padding: 15px;
    background-color: #d6d6d6;
  }

  .post__info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 30px;
  }

  .post__image {
    width: 100%;
    height: auto;
    max-width: 300px;
  }

</style>