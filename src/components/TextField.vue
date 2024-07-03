<template>
  <div class="text-field">
    <slot name="prepend-inner"></slot>
    <VField class="text-field__input" :type="textFieldType" :name :placeholder :id :value />
    <div class="text-field__show-password" v-if="type == 'password'" @click.prevent="showPassword">
      <VIcon name="eye" />
    </div>
  </div>
</template>

<script setup>
import VIcon from '@/components/Icon.vue'
import { ref } from 'vue'

const props = defineProps({
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  placeholder: {
    type: String
  },
  id: {
    type: String
  },
  value: {
    type: String
  }
})

let textFieldType = ref(props.type)

const showPassword = () => {
  textFieldType.value = textFieldType.value === 'password' ? 'text' : 'password'
}
</script>

<style lang="scss" scoped>
.text-field {
  border-radius: 1rem;
  height: 5rem;
  padding-inline: 1.1rem;
  background-color: $gray-7;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.5;
  color: $dark;
  width: 28rem;
  display: grid;
  grid-template-columns: auto [input-start] 1fr [input-end show-password-start] auto [show-password-end];
  align-items: center;

  ::placeholder {
    color: $gray-5;
  }

  &__input {
    grid-column: input;
    font-family: inherit;
    background-color: inherit;
    border: none;
    outline: none;
    font-size: inherit;
    font-weight: inherit;
    width: 100%;
    align-self: stretch;
    display: flex;
    align-items: center;
  }

  &:focus-within {
    outline: 1px solid $gray-1;
  }

  &--full {
    width: 100%;
  }

  &--small {
    @include typography(paragraph-5);
    border-radius: 1.6rem;
    padding-inline: 1.6rem;
  }

  &__show-password {
    grid-column: show-password;
    cursor: pointer;
    padding-inline: 0.8rem;
    align-self: stretch;
    display: flex;
    align-items: center;
  }
}
</style>
