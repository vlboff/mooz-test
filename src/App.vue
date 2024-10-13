<script setup>
  import { ref } from "vue";

  import AppHeader from "@/components/AppHeader.vue";
  import AppMain from "@/components/AppMain.vue";

  const inputValue = ref('');
</script>

<template>
  <header>
    <AppHeader v-model="inputValue"/>
  </header>
  <main>
    <div class="container">
      <AppMain :inputValue="inputValue"/>
    </div>
  </main>
</template>

