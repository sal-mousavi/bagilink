<template>
  <AuthLayout>
    <template v-slot:form>
      <VForm class="form" :validation-schema="schema" @submit="signIn">
        <h1 class="form__heading">Sign In</h1>

        <label class="form__label" for="sign-in-email">Email</label>
        <VTextField
          class="form__text-field text-field--full text-field--small"
          type="email"
          name="email"
          placeholder="Email"
          id="sign-in-email"
        />
        <p class="form__error-message">
          <ErrorMessage name="email" />
        </p>

        <label class="form__label" for="sign-in-password">Password</label>
        <VTextField
          class="form__text-field text-field--full text-field--small"
          type="password"
          name="password"
          placeholder="Password"
          id="sign-in-password"
        />
        <p class="form__error-message">
          <ErrorMessage name="password" />
        </p>

        <RouterLink class="form__forget-password" :to="{ name: 'forget-password' }">
          Forgot Password?
        </RouterLink>

        <VButton
          class="form__submit btn btn--primary-variant btn--full btn--big"
          :loading="inSubmission"
        >
          Sign In
        </VButton>

        <p class="form__nav">
          Not registered yet?
          <RouterLink class="form__link" :to="{ name: 'signup' }">Create an account</RouterLink>
        </p>
      </VForm>
    </template>

    <template v-slot:aside>
      <aside class="aside">
        <div class="aside__heading">Everything you are. In one simple link.</div>
        <div class="aside__img">
          <img src="@/assets/images/sign-in.png" />
        </div>
      </aside>
    </template>
  </AuthLayout>
</template>

<script setup>
import AuthLayout from '@/layouts/AuthLayout.vue'
import VTextField from '@/components/TextField.vue'
import VButton from '@/components/Button.vue'
import { reactive, ref } from 'vue'
import useUserStore from '@/stores/user'
import useToastStore from '@/stores/toast'
import router from '@/router'

const schema = reactive({
  email: 'required|min:3|max:100|email',
  password: 'required|min:8|max:100'
})

const userStore = useUserStore()
const toastStore = useToastStore()

const inSubmission = ref(false)

const signIn = async (values) => {
  inSubmission.value = true
  const error = await userStore.authenticate(values)

  if (error) {
    inSubmission.value = false
    toastStore.activateToast('error', error.message)
    return
  }

  router.push({ name: 'links' })
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  grid-column: form;
  align-self: center;
  justify-self: center;
  width: 45rem + (2 * 2rem);
  padding-inline: 2rem;

  @include respond-to(small) {
    width: 100%;
  }

  &__heading {
    @include typography(headline-3);
    margin-bottom: 4rem;
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

  &__forget-password {
    @include typography(paragraph-4);
    color: #ff8a2d;
    font-weight: 500;
    text-decoration: none;
    align-self: flex-end;
    margin-bottom: 2rem;
    transition: 0.2s ease all;

    &:hover,
    &:active {
      text-decoration: underline;
    }
  }

  &__submit {
    margin-bottom: 4rem;
  }

  &__nav {
    align-self: center;
    @include typography(paragraph-4);
    font-weight: 500;
    color: $dark;
  }

  &__link {
    text-decoration: none;
    color: $primary-orange;

    &:hover,
    &:active {
      text-decoration: underline;
    }
  }
}

.aside {
  grid-column: aside;
  background-color: #fffae7;
  display: grid;
  grid-template-rows: 1fr auto;
  justify-items: center;
  gap: 10rem;
  padding-inline: 5rem;

  @include respond-to(medium) {
    display: none;
  }

  &__heading {
    @include typography(headline-3);
    align-self: center;
    padding-inline: clamp(0rem, 20.455vw + -20.455rem, 9rem);
    padding-top: 20vh;
    text-align: center;
  }

  &__img {
    align-self: end;

    & > img {
      width: 44.7rem;
      max-width: 100%;
    }
  }
}
</style>
