<template>
  <div class="accordion">
    <div class="accordion__header" @click.prevent="showContent = !showContent">
      <div class="accordion__title">
        <slot name="title">Title</slot>
      </div>
      <VIcon name="drop-down" :class="{ 'active-drop-down': showContent }" />
    </div>
    <Transition name="v">
      <div class="accordion__content" v-show="showContent">
        <slot name="content">Content</slot>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import VIcon from '@/components/Icon.vue'
import { ref } from 'vue'

const showContent = ref(false)
</script>

<style lang="scss" scoped>
.accordion {
  background-color: $orange-200;
  border-radius: 2rem;
  overflow: hidden;
  transition: 2s ease all;

  &__header {
    padding: 1.4rem 4.8rem;
    background-color: $primary-orange;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    cursor: pointer;

    @include respond-to(medium) {
      padding: 1.4rem;
    }
  }

  &__title {
    @include typography(headline-6);
    color: $light;
  }

  &__content {
    @include typography(paragraph-3);
    padding: 2.4rem 4.8rem;
    transition: 2s ease all;

    @include respond-to(medium) {
      padding: 2.4rem;
    }
  }
}

.active-drop-down {
  transition: 0.2s all;
  transform: rotate(180deg);
}

.v-move,
.v-enter-active,
.v-leave-active {
  transition: 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
