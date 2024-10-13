<script setup >
  import { ref } from "vue";
  import IconUser from '@/components/icons/IconUser.vue';

  const isActionsOpen = ref(false);

</script>

<template>
  <div class="user" @click="isActionsOpen = !isActionsOpen">
    <div class="user__icon">
      <IconUser/>
    </div>
    <h3 class="user__name">Alexander Borisenko</h3>
    <div class="user__arrow" :class="{'rotate180': isActionsOpen}"></div>
    <Transition name="slide">
      <div class="user__actions" v-if="isActionsOpen">
        <button class="user__actions-logout">Log out</button>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
  .user {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    position: relative;
    cursor: pointer;
  }
  .user__icon {
    display: flex;
    align-items: center;
  }
  .user__icon svg {
    height: 20px;
  }
  .user__arrow {
    display: block;
    width: 20px;
    height: 20px;
    position: relative;
  }
  .user__arrow::after {
    content: '';
    position: absolute;
    bottom: -5px;
    border: 10px solid transparent;
    border-top: 10px solid black;
    transition: all .3s;
  }
  .user__arrow.rotate180::after {
    transform: rotate(180deg) translateY(50%);
    transition: all .3s;
  }
  .user__actions {
    top: 40px;
    position: absolute;
    padding: 10px 20px;
    background: white;
    border-radius: 4px;
    -webkit-box-shadow: 5px 5px 0px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 5px 5px 0px 0px rgba(66, 68, 90, 1);
    box-shadow: 5px 5px 0px 0px rgba(66, 68, 90, 1);
    z-index: 1;
  }
  .user__actions-logout {
    width: max-content;
  }


  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.25s ease-out;
  }

  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }

  @media (max-width: 900px) {
    .user__name,
    .user__arrow {
      display: none;
    }

    .user__actions {
      top: 85px
    }
}
</style>