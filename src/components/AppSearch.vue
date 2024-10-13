<script setup >
  const model = defineModel()
</script>

<template>
  <div class="search">
    <input class="search__input" type="text" placeholder="search..." v-model="model" />
  </div>
</template>

<style scoped>
  .search__input {
    width: 100%;
  }
</style>