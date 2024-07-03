<template>
  <div class="dashboard-grid">
    <LayoutDashboardHeader />
    <slot />
  </div>
</template>

<script setup>
import LayoutDashboardHeader from '@/layouts/partials/DashboardHeader.vue'
</script>

<style lang="scss" scoped>
.dashboard-grid {
  --padding-inline: 2rem;
  --content-max-width: 128rem;

  display: grid;
  grid-template-columns:
    [full-width-start]
    minmax(var(--padding-inline), 1fr)
    [content-start]
    min(100% - (var(--padding-inline) * 2), var(--content-max-width))
    [content-end]
    minmax(var(--padding-inline), 1fr)
    [full-width-end];
  grid-template-rows: auto 1fr;

  background-color: $gray-8;
  min-height: 100dvh;
  height: 100%;
}

.dashboard-grid > :not(.full-width),
.full-width > :not(.full-width) {
  grid-column: content;
}

.dashboard-grid > .full-width {
  grid-column: full-width;

  display: grid;
  grid-template-columns: inherit;
}
</style>
