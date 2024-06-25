<template>
  <VToast :type="toastStore.notification.type" v-if="toastStore.notification.type.length">
    {{ toastStore.notification.message }}
  </VToast>

  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <Suspense timeout="0">
        <template #default>
          <component :is="Component" :key="$route.path"></component>
        </template>
        <template #fallback>
          <VLoading />
        </template>
      </Suspense>
    </Transition>
  </RouterView>
</template>

<script setup>
import VToast from '@/components/Toast.vue'
import useToastStore from '@/stores/toast'
import VLoading from '@/components/Loading.vue'

const toastStore = useToastStore()
</script>

<style lang="scss">
html {
  font-size: 62.5%;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
}

::selection {
  background-color: $orange-200;
}

.fade-enter-from {
  opacity: 0.5;
}

.fade-enter-active {
  transition: all 0.2s linear;
}

.fade-leave-to {
  transition: all 0.2s linear;
  opacity: 0.5;
}
</style>
