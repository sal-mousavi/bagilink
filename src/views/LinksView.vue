<template>
  <DashboardLayout>
    <div class="grid">
      <section class="links-section">
        <section class="add-link-section">
          <VButton
            v-if="!addLinkSection"
            class="btn btn--primary btn--full btn--big"
            @click.prevent="toggleAddLinkSection"
          >
            <VIcon name="icon-plus" />
            &nbsp; Add link
          </VButton>

          <VForm v-else class="form" :validation-schema="schema" @submit="addLink">
            <p class="form__heading">&nbsp;Add link</p>

            <label class="form__label" for="form-title">Title</label>
            <VTextField
              class="text-field--full text-field--small"
              name="title"
              type="text"
              placeholder="Link Title"
              id="form-title"
            />
            <p class="form__error-message">
              <ErrorMessage name="title" />
            </p>

            <label class="form__label" for="form-link">Link</label>
            <VTextField
              class="text-field--full text-field--small"
              name="url"
              type="url"
              placeholder="https://example.com"
              id="form-link"
            />
            <p class="form__error-message">
              <ErrorMessage name="url" />
            </p>

            <div class="form__btn-container">
              <VButton class="btn btn--primary btn--full">Publish</VButton>
              <VButton
                class="form__cancel-btn btn btn--secondary btn--full"
                @click.prevent="toggleAddLinkSection"
                >Cancel</VButton
              >
            </div>
          </VForm>
        </section>

        <div class="links-section__cards-container">
          <VLinkCard v-for="post in linkPostsStore.posts" :key="post.id" :postData="post" />
        </div>
      </section>

      <section class="preview-section">
        <p class="preview-section__heading">Page Preview</p>

        <div class="mobile-preview">
          <img class="mobile-preview__avatar" src="@/assets/images/user-avatar.png" />
          <p class="mobile-preview__username">@username</p>

          <div class="mobile-preview__links-container">
            <VLinkPreview v-for="post in linkPostsStore.posts" :key="post.id" :postData="post" />
          </div>

          <VIcon class="mobile-preview__logo" name="logo" />
        </div>
      </section>
    </div>
  </DashboardLayout>
</template>

<script setup>
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import VLinkCard from '@/components/LinkCard.vue'
import VButton from '@/components/Button.vue'
import VIcon from '@/components/Icon.vue'
import VTextField from '@/components/TextField.vue'
import VLinkPreview from '@/components/LinkPreview.vue'
import { reactive, ref } from 'vue'
import useLinkPostsStore from '@/stores/linkPosts'
import useToastStore from '@/stores/toast'

const linkPostsStore = useLinkPostsStore()
const toastStore = useToastStore()

const schema = reactive({
  title: 'required|min:3|max:100',
  url: 'required|url'
})

await linkPostsStore.getLinkPosts()

const addLinkSection = ref(false)

const toggleAddLinkSection = () => {
  addLinkSection.value = !addLinkSection.value
}

const addLink = async (values) => {
  const error = await linkPostsStore.addLink(values.title, values.url)

  if (error) toastStore.activateToast('error', error.message)

  toggleAddLinkSection()
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: 2rem;

  @include respond-to(medium) {
    grid-template-columns: 1fr;
  }
}

.links-section {
  padding: 4rem clamp(0rem, 16.875vw + -13.5rem, 10.8rem);
  overflow: hidden;

  &__cards-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}

.add-link-section {
  margin-bottom: 4rem;
}

.form {
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  border-radius: 2rem;
  border: 1px solid $gray-5;
  background-color: $light;

  &__heading {
    margin-bottom: 1rem;
    @include typography(paragraph-1);
    font-weight: 600;
    text-align: center;
  }

  &__btn-container {
    margin-top: 1rem;
    display: flex;
    flex-direction: row-reverse;
    gap: 2rem;
  }

  &__cancel-btn {
    background-color: $gray-7;
  }

  &__label {
    display: block;
    @include typography(paragraph-4);
    font-weight: 500;
    margin-bottom: 0.8rem;
  }

  &__error-message {
    padding: 0.2rem 1rem 0.6rem;
    height: 2rem;

    & > span {
      @include typography(paragraph-5);
      color: $red-500;
    }
  }
}

.preview-section {
  position: relative;
  border-left: 1px solid $gray-5;
  display: flex;
  justify-content: center;
  padding: 8rem 0 2rem;

  @include respond-to(medium) {
    border-left: none;
    border-top: 1px solid $gray-5;
  }

  &__heading {
    position: absolute;
    top: 2rem;
    left: 2rem;
    @include typography(paragraph-3);
    font-weight: 500;
    color: $dark;
  }
}

.mobile-preview {
  background-image: url('@/assets/images/mobile-frame.svg');
  width: 32rem;
  height: 65rem;
  background-size: cover;
  padding: 10rem 4rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @include respond-to(small) {
    padding: 6rem 4rem 2rem;
    width: 28.8rem;
    height: 58.56rem;
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
    max-height: 60%;
  }

  &__logo {
    margin-top: auto;
  }
}
</style>
