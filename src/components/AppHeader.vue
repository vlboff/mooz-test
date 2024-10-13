<script setup >
  import AppSearch from "@/components/AppSearch.vue";
  import AppUser from "@/components/AppUser.vue";

  const model = defineModel()

</script>

<template>
  <div class="header">
    <div class="header__block">
      <h1 class="header__title">Movie Catalog</h1>
      <AppSearch class="header__search" v-model="model"/>
      <AppUser class="header__user"/>
    </div>
  </div>
</template>

<style scoped>
.header {
  padding: 10px 30px;
  background: #badaed
}

.header__block {
  display: flex;
  align-items: center;
  width: 100%;
}

.header__title,
.header__user {
  padding: 0 10px;
  width: 15%;
}

.header__search {
  flex: 1 1 auto;
  padding: 0 10px;
}

@media (max-width: 900px) {
  .header__block {
    flex-direction: column;
    justify-content: center;
  }
  .header__title {
    padding: 10px 0;
    width: auto;
  }
  .header__search {
    width: 100%;
  }
  .header__user {
    position: absolute;
    top: 20px;
    right: 20px;
  }
}
</style>