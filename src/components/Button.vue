<template>
  <component :is="type" class="reset" @click="onClick" :to :disabled="loading">
    <slot v-if="!loading">Button</slot>
    <div v-else class="loading"></div>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  to: {
    type: Object,
    default: null
  },
  onClick: {
    type: Function
  },
  loading: {
    type: Boolean
  }
})

const type = computed(() => {
  if (props.to) return 'RouterLink'
  else return 'button'
})
</script>

<style lang="scss" scoped>
.reset {
  text-decoration: none;
  border: none;
  background-color: transparent;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-wrap: nowrap;
}

.btn {
  font-size: 1.4rem;
  font-weight: 600;
  padding: 1rem 2.4rem;
  line-height: 1.5;
  transition: 220ms all ease-in-out;
  border-radius: 1rem;

  &--primary {
    color: $light;
    background-color: $primary-orange;

    &:hover,
    &:active {
      background-color: scale-color($primary-orange, $lightness: -20%);
    }

    &:focus {
      outline-style: solid;
      outline-color: transparent;
      box-shadow: 0 0 0 4px scale-color($primary-orange, $lightness: -40%);
    }
  }

  &--primary-variant {
    color: $dark;
    background-color: $orange-300;

    &:hover,
    &:active {
      background-color: scale-color($orange-300, $lightness: -10%);
    }

    &:focus {
      outline-style: solid;
      outline-color: transparent;
      box-shadow: 0 0 0 4px scale-color($orange-300, $lightness: -40%);
    }
  }

  &--secondary {
    color: $dark;

    &:hover,
    &:active {
      box-shadow: inset 0 0 0 2px currentColor;
    }

    &:focus {
      outline-style: solid;
      outline-color: transparent;
      box-shadow: 0 0 0 4px scale-color($light, $lightness: -40%);
    }
  }

  &--icon {
    padding: 0;
  }

  &--block {
    display: block;
  }

  &--big {
    padding: 1.45rem 3.2rem;
    border-radius: 1.6rem;
  }

  &--wide {
    padding: 1.2rem 4.8rem;
    border-radius: 1.6rem;
  }

  &--full {
    width: 100%;
  }
}

.loading {
  width: 1.5em;
  height: 1.5em;
  position: relative;
  color: inherit;
  display: inline-block;
  box-sizing: content-box;
  animation: loading-cycle 1s infinite linear;

  &::after {
    content: ' ';
    display: block;
    width: 3em;
    height: 3em;
    box-sizing: border-box;
    transform-origin: 0 0;
    transform: translateZ(0) scale(0.5);
    backface-visibility: hidden;
    border-radius: 50%;
    border: 0.3em solid currentColor;
    border-left-color: transparent;
  }
}
</style>
