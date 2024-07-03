<template>
  <div class="default-grid">
    <LayoutHeader />
    <slot />
    <LayoutFooter />
  </div>
</template>

<script setup>
import LayoutHeader from '@/layouts/partials/Header.vue'
import LayoutFooter from '@/layouts/partials/Footer.vue'
</script>

<style lang="scss">
.default-grid {
  --padding-inline: 2rem;
  --content-max-width: 114rem;
  --breakout-max-width: 128rem;

  --breakout-size: calc((var(--breakout-max-width) - var(--content-max-width)) / 2);

  display: grid;
  grid-template-columns:
    [full-width-start]
    minmax(var(--padding-inline), 1fr)
    [breakout-start]
    minmax(0, var(--breakout-size))
    [content-start]
    min(100% - (var(--padding-inline) * 2), var(--content-max-width))
    [content-end]
    minmax(0, var(--breakout-size))
    [breakout-end]
    minmax(var(--padding-inline), 1fr)
    [full-width-end];
}

.default-grid > :not(.breakout, .full-width),
.full-width > :not(.breakout, .full-width) {
  grid-column: content;
}

.default-grid > .breakout {
  grid-column: breakout;
}

.default-grid > .full-width {
  grid-column: full-width;

  display: grid;
  grid-template-columns: inherit;
}
</style>
