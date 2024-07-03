<template>
  <main class="main">
    <section class="links-preview">
      <img class="links-preview__avatar" src="@/assets/images/user-avatar.png" />
      <p class="links-preview__username">@{{ $route.params.username }}</p>

      <div class="links-preview__links-container">
        <VLinkPreview v-for="post in linkPostsStore.posts" :key="post.id" :postData="post" />
      </div>

      <RouterLink class="links-preview__logo" :to="{ name: 'home' }">
        <VIcon name="logo" />
      </RouterLink>
    </section>
  </main>
</template>

<script setup>
import VIcon from '@/components/Icon.vue'
import useLinkPostsStore from '@/stores/linkPosts'
import VLinkPreview from '@/components/LinkPreview.vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const linkPostsStore = useLinkPostsStore()

await linkPostsStore.getLinkPosts(route.params.username)
</script>

<style lang="scss" scoped>
.main {
  min-width: 100%;
  min-height: 100dvh;
  background-color: $gray-7;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @include respond-to(small) {
    padding: 0;
    background-color: $light;
  }
}

.links-preview {
  background-image: url('@/assets/images/mobile-frame.svg');
  width: 38.4rem;
  height: 78.08rem;
  background-size: cover;
  padding: 10rem 4rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @include respond-to(small) {
    padding: 4rem 4rem 4rem;
    background-image: none;
    width: 100%;
    height: auto;
    padding-inline: 2rem;
  }

  &__avatar {
    width: 9rem;
    height: 9rem;
    margin-bottom: 1.8rem;
  }

  &__username {
    @include typography(paragraph-3);
    margin-bottom: 1.6rem;
  }

  &__links-container {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-bottom: 1.6rem;
    align-self: stretch;

    overflow: auto;
    max-height: 70%;
  }

  &__logo {
    margin-top: auto;
    border-radius: 16px;
    padding: 0.5rem 2rem;
    transition: 0.2s ease all;

    &:hover,
    &:active {
      background-color: $gray-7;
      box-shadow: 0 0 4px 1px $gray-3;
    }
  }
}
</style>
