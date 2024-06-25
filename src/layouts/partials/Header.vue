<template>
  <header class="header breakout">
    <div class="header__logo">
      <VIcon name="logo" />
    </div>
    <nav class="header__nav" :class="{ 'header__nav-mobile': burgerMenuActive }">
      <a class="header__nav-link" href="#services">Services</a>
      <a class="header__nav-link" href="#faq">FAQ</a>

      <div class="header__auth">
        <VButton class="btn btn--secondary" type="button" :to="{ name: 'login' }">Log In</VButton>
        <VButton class="btn btn--primary" type="button" :to="{ name: 'signup' }">Sign Up</VButton>
      </div>
    </nav>
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
</template>

<script setup>
import { ref } from 'vue'
import VIcon from '@/components/Icon.vue'
import VButton from '@/components/Button.vue'

let burgerMenuActive = ref(false)

const toggleBurgerMenu = () => (burgerMenuActive.value = !burgerMenuActive.value)
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  padding-block: 1.9rem;

  &__logo {
    margin-right: auto;
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 3rem;
    line-height: 1.5;
    font-size: 1.6rem;

    @include respond-to(medium) {
      display: none;
    }
  }

  &__nav-mobile {
    @include respond-to(medium) {
      position: fixed;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: rgba($orange-200, 0.8);
      backdrop-filter: blur(5px);
      z-index: 100;
      touch-action: none;
      overflow: hidden;
      overscroll-behavior: none;
    }
  }

  &__nav-link {
    color: $dark;
    text-decoration: none;
    transition: 220ms all ease-in-out;

    &:hover {
      box-shadow: 0 2px 0 0 $dark;
    }
  }

  &__auth {
    display: flex;
    justify-content: center;
    gap: 1rem;

    @include respond-to(medium) {
      border-top: 1px solid #000;
      padding-top: 1rem;
      margin-top: 10rem;
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
