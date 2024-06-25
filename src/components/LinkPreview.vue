<template>
  <div
    class="link-preview"
    :class="{ 'link-preview--copied': copyAnimationActive }"
    @click.prevent="copyToClipboard"
    v-if="!postData.hidden"
  >
    <p class="link-preview__title">{{ postData.title }}</p>
    <VIcon class="link-preview__copy" name="icon-copy" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VIcon from '@/components/Icon.vue'
import useToastStore from '@/stores/toast'

const toastStore = useToastStore()

const props = defineProps({
  postData: {
    type: Object,
    required: true
  }
})

let copyAnimationActive = ref(false)

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.postData.url)

    copyAnimationActive.value = true
    setTimeout(() => {
      copyAnimationActive.value = false
    }, 1000)
  } catch ($e) {
    toastStore.activateToast('error', 'Can not copy')
  }
}
</script>

<style lang="scss" scoped>
.link-preview {
  position: relative;
  overflow: hidden;
  background-color: $primary-orange;
  align-self: stretch;
  flex-shrink: 0;
  padding: 1.2rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding-inline: 2rem;
  cursor: pointer;
  transition: 220ms all ease-in-out;
  max-width: 100%;

  &:hover,
    &:active {
      background-color: scale-color($primary-orange, $lightness: -20%);
    }

  &--copied {
    &::after {
      content: '';
      animation: slide 1s ease-in-out;
      background-image: linear-gradient(90deg, $green-500 50%, transparent 50%);
      bottom: 0;
      left: -50%;
      opacity: 0.8;
      position: absolute;
      right: -50%;
      top: 0;
      z-index: 1;
    }
  }

  &__title {
    @include typography(paragraph-4);
    color: $light;
    flex-grow: 1;
    display: flex;
    align-items: center;
    z-index: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__copy {
    color: $light;
    z-index: 2;
    flex-shrink: 0;
  }
}
</style>
