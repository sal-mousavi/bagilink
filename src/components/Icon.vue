<template>
  <Icon />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const Icon = defineAsyncComponent(() => import(`@/assets/images/${props.name}.svg`))
</script>
