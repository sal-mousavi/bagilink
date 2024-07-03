<template>
  <div class="toast" :class="toast.class" v-if="!hidden">
    <VIcon class="toast__icon" :name="toast.icon" />
    <div class="toast__text-box">
      <p class="toast__title">{{ toast.title }}</p>
      <p class="toast__description"><slot>Toast Message</slot></p>
    </div>
    <span class="toast__close" @click.prevent="hide">&times;</span>
  </div>
</template>

<script setup>
import VIcon from '@/components/Icon.vue'
import { reactive, ref } from 'vue'

const props = defineProps({
  type: {
    type: String
  }
})

const toast = reactive({
  class: null,
  icon: null,
  title: null
})

switch (props.type) {
  case 'success':
    toast.class = 'toast--success'
    toast.icon = 'icon-success'
    toast.title = 'Success'
    break
  case 'info':
    toast.class = 'toast--info'
    toast.icon = 'icon-info'
    toast.title = 'Info'
    break
  case 'warning':
    toast.class = 'toast--warning'
    toast.icon = 'icon-warning'
    toast.title = 'Warning'
    break
  case 'error':
    toast.class = 'toast--error'
    toast.icon = 'icon-error'
    toast.title = 'Error'
    break
}

const hidden = ref(false)

const hide = () => {
  hidden.value = true
}
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 0.8rem 1.6rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  border-radius: 1.6rem;
  width: 30rem;
  z-index: 1000;

  @include respond-to(small) {
    right: 50%;
    transform: translateX(50%)
  }

  &__title {
    @include typography(paragraph-4);
  }

  &__description {
    @include typography(paragraph-5);
  }

  &__icon {
    font-size: 1.6rem;
  }

  &__close {
    font-size: 2.4rem;
    cursor: pointer;
    margin-left: auto;
  }

  &--success {
    background-color: $green-200;
  }

  &--info {
    background-color: $blue-200;
  }

  &--warning {
    background-color: $yellow-200;
  }

  &--error {
    background-color: $red-200;
  }
}
</style>
