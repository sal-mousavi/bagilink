<template>
  <div class="link-card">
    <VIcon class="link-card__drag-dots" name="icon-draggable-dots" />

    <div class="link-card__text-box">
      <p class="link-card__title">{{ postData.title }}</p>
      <span class="link-card__link">{{ postData.url }}</span>
    </div>

    <div class="link-card__actions">
      <VSwitch :checked="!postData.hidden" @click.prevent="hidePost" />
      <VButton class="link-card__delete" :onClick="deleteLink">
        <VIcon name="icon-trash" />
      </VButton>
    </div>
  </div>
</template>

<script setup>
import VIcon from '@/components/Icon.vue'
import VSwitch from '@/components/Switch.vue'
import VButton from '@/components/Button.vue'
import useLinkPostsStore from '@/stores/linkPosts'
import useToastStore from '@/stores/toast'

const linkPostsStore = useLinkPostsStore()
const toastStore = useToastStore()

const props = defineProps({
  postData: {
    type: Object,
    required: true
  }
})

const hidePost = async () => {
  const error = await linkPostsStore.hideLink(!props.postData.hidden, props.postData.id)

  if (error) toastStore.activateToast('error', error)
}

const deleteLink = async () => {
  await linkPostsStore.deleteLink(props.postData.id)
}
</script>

<style lang="scss" scoped>
.link-card {
  display: flex;
  padding: 1.2rem;
  gap: 2rem;
  border-radius: 2rem;
  border: 1px solid $gray-5;
  align-items: center;
  background-color: $light;

  &__drag-dots {
    cursor: grab;
    flex-shrink: 0;
  }

  &__text-box {
    @include typography(paragraph-4);
    color: $dark;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex-grow: 1;
    overflow: hidden;
  }

  &__title {
    font-weight: 600;
  }

  &__link {
    font-weight: 500;
  }

  &__title,
  &__link {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__actions {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: stretch;
    flex-shrink: 0;
  }

  &__delete {
    color: $gray-2;
    transition: 0.2s ease all;

    &:hover {
      color: $red-500;
    }
  }
}
</style>
