<template>
  <div class="auth-grid">
    <slot name="form"></slot>
    <slot name="aside"></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.auth-grid {
  display: grid;
  grid-template-columns: [form-start] minmax(auto, 6fr) [form-end aside-start] 4fr [aside-end];
  height: 100dvh;

  @include respond-to(medium) {
    grid-template-columns: [form-start] 1fr [form-end];
  }
}
</style>
