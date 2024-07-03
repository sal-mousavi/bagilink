<template>
  <div class="header-wrapper full-width">
    <header class="header">
      <div class="header__logo">
        <VIcon name="logo-small" />
      </div>

      <nav class="header__nav" :class="{ 'header__nav-mobile': burgerMenuActive }">
        <RouterLink
          class="header__link"
          :class="{ 'header__link--active': $route.name == 'links' }"
          :to="{ name: 'links' }"
        >
          <VIcon name="icon-sitemap" />
          <p>Links</p>
        </RouterLink>

        <RouterLink
          class="header__link"
          :class="{ 'header__link--active': $route.name == 'appearance' }"
          :to="{ name: 'appearance' }"
        >
          <VIcon name="icon-swatchbook" />
          <p>Appearance</p>
        </RouterLink>

        <RouterLink
          class="header__link"
          :class="{ 'header__link--active': $route.name == 'analytics' }"
          :to="{ name: 'analytics' }"
        >
          <VIcon name="icon-chart" />
          <p>Analytics</p>
        </RouterLink>
      </nav>

      <div class="user-url" :class="{ 'user-url--copied': copyAnimationActive }">
        <span class="user-url__link">{{ userUrl }}</span>
        <span class="user-url__copy" @click.prevent="copyToClipboard">Copy</span>
      </div>

      <RouterLink class="header__user" :to="{ name: 'appearance' }">
        <img src="@/assets/images/user-avatar.png" />
      </RouterLink>

      <div class="burger-menu">
        <VButton
          class="btn btn--icon btn--block"
          type="button"
          v-if="!burgerMenuActive"
          :onClick="toggleBurgerMenu"
        >
          <VIcon class="burger-menu__icon" name="menu-open" />
        </VButton>
        <template v-else>
          <VButton class="btn btn--icon btn--block" type="button" :onClick="toggleBurgerMenu">
            <VIcon class="burger-menu__icon" name="menu-close" />
          </VButton>
        </template>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VIcon from '@/components/Icon.vue'
import VButton from '@/components/Button.vue'
import useToastStore from '@/stores/toast'
import useUserStore from '@/stores/user'

const toastStore = useToastStore()
const userStore = useUserStore()

let burgerMenuActive = ref(false)
let copyAnimationActive = ref(false)

const toggleBurgerMenu = () => (burgerMenuActive.value = !burgerMenuActive.value)

const userUrl = ref(`sal-mousavi.github.io/bagilink/#/${userStore.username}`)

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(userUrl.value)

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
.header-wrapper {
  background-color: $light;
  border-bottom: 1px solid $gray-4;
}

.header {
  position: relative;
  padding-block: 1.9rem;
  display: flex;
  align-items: center;
  gap: clamp(1.5rem, 2.344vw + -0.375rem, 3rem);

  &__nav {
    display: flex;
    gap: 3rem;

    @include respond-to(medium) {
      display: none;
    }
  }

  &__nav-mobile {
    @include respond-to(medium) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: fixed;
      width: 100%;
      height: 100dvh;
      top: 0;
      left: 0;
      background-color: rgba($orange-200, 0.8);
      backdrop-filter: blur(5px);
      z-index: 100;
      touch-action: none;
      overflow: hidden;
      overscroll-behavior: none;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 1rem;
    @include typography(paragraph-3);
    color: $gray-3;
    text-decoration: none;
    transition: 0.2s ease all;

    &--active,
    &:hover {
      color: $dark;
    }

    @include respond-to(medium) {
      font-size: 2.4rem;
    }
  }

  &__user {
    cursor: pointer;
    transition: 0.2s ease all;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;

    &:hover,
    &:active {
      filter: drop-shadow(0 0 2px $dark);
    }

    @include respond-to(medium) {
      display: none;
    }

    & > img {
      width: 100%;
      height: 100%;
    }
  }
}

.user-url {
  padding: 0.6rem 0.6rem 0.6rem 1.8rem;
  border-radius: 50px;
  background-color: $gray-7;
  display: flex;
  align-items: center;
  gap: clamp(1.5rem, 7.031vw + -4.125rem, 6rem);
  align-self: stretch;
  margin-left: auto;
  position: relative;
  overflow: hidden;

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

  @include respond-to(medium) {
    padding: 0.6rem;
  }

  &__link {
    @include typography(paragraph-4);
    color: $dark;
    text-decoration: underline;
    z-index: 2;

    @include respond-to(medium) {
      display: none;
    }
  }

  &__copy {
    background-color: $light;
    @include typography(paragraph-3);
    color: $dark;
    font-weight: 600;
    padding: 0.8rem 1.6rem;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.2s ease all;
    z-index: 2;

    &:hover,
    &:active {
      box-shadow: 0 0 4px 1px $gray-3;
    }

    @include respond-to(medium) {
      &::after {
        content: ' Page Url';
      }
    }
  }
}

.burger-menu {
  display: none;
  z-index: 100;

  @include respond-to(medium) {
    display: block;
  }

  &__icon {
    width: 4.1rem;
    height: 4.1rem;
    color: $dark;
    z-index: 110;
  }
}
</style>
