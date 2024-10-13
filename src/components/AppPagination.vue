<script setup>
  import { ref, computed } from "vue";

  const POST_IN_PAGE = 10;

  const props = defineProps({
    total: {
      type: [String, Number],
      default: null,
    }
  });

  const emit = defineEmits(['currentPage']);

  const currentPage = ref(1);

  const numberOfPages = computed(() => {
    return props.total ? Math.ceil(props.total / POST_IN_PAGE) : 0;
  });

  const visiblePages = computed(() => {
    if (numberOfPages.value <= 7) {
      return Array.from({ length: numberOfPages.value }, (_, index) => index + 1);
    }

    const pages = [];

    pages.push(1);

    if (currentPage.value > 4) {
      pages.push("...");
    }

    const startPage = Math.max(2, currentPage.value - 1);
    const endPage = Math.min(numberOfPages.value - 1, currentPage.value + 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (currentPage.value < numberOfPages.value - 3) {
      pages.push("...");
    }

    pages.push(numberOfPages.value);

    return pages;
  });

  const setCurrentPage = (number) => {
    if (number !== currentPage.value) {
      currentPage.value = number;
      emit("currentPage", number)
    }
  };

  const nextPage = () => {
    if (currentPage.value < numberOfPages.value) {
      setCurrentPage(currentPage.value + 1);
    }
  };

  const prevPage = () => {
    if (currentPage.value > 1) {
      setCurrentPage(currentPage.value - 1);
    }
  };
</script>

<template>
  <div class="pagination" v-show="visiblePages.length > 1">
    <div class="pagination_button" @click="prevPage" :class="{ disabled: currentPage === 1 }"><</div>
    <div class="pagination_buttons" v-for="number in visiblePages" :key="number">
      <span v-if="number === '...'">{{ number }}</span>
      <span v-else @click="setCurrentPage(number)" class="pagination_button" :class="{ active: number === currentPage }">{{ number }}</span>
    </div>
    <div class="pagination_button" @click="nextPage" :class="{ disabled: currentPage === numberOfPages }">></div>
  </div>
</template>

<style scoped>

  .pagination {
    display: flex;
    justify-content: center;
    gap: 4px;
  }

  .pagination_button {
    font-size: 20px;
    cursor: pointer;
  }

  .pagination_button.disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .pagination_button.active {
    font-weight: 700;
  }

</style>
