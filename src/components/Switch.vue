<template>
  <label class="switch" :for="id">
    <slot />
    <input class="switch__input" type="checkbox" v-bind="$attrs" :checked="checked" :id />
    <span class="switch__track">
      <span class="switch__indicator"></span>
    </span>
  </label>
</template>

<script setup>
defineOptions({
  inheritAttrs: false
})

defineProps({
  checked: {
    type: Boolean,
    required: true
  },
  id: {
    type: String
  }
})
</script>

<style lang="scss" scoped>
.switch {
  display: flex;
  align-items: center;
}

.switch__input {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  &:not([disabled]):active + .switch__track,
  &:not([disabled]):focus + .switch__track {
    box-shadow: 0 0 0 1px scale-color($primary-orange, $lightness: -40%);
  }

  &:disabled + .switch__track {
    cursor: not-allowed;
    opacity: 0.7;
  }
}

.switch__track {
  background-color: $gray-5;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  position: relative;
  width: 2rem;
  height: 1rem;
}

.switch__indicator {
  background: $light;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  height: 0.8rem;
  width: 0.8rem;
  position: absolute;
  bottom: 0.1rem;
  left: 0.1rem;
}

.switch__input:checked + .switch__track .switch__indicator {
  transform: translateX(1rem);
}

.switch__input:checked + .switch__track {
  background-color: #009906;
}
</style>
