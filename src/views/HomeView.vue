<template>
  <DefaultLayout>
    <section class="hero-section">
      <div class="hero-section__text-box">
        <h1 class="hero-section__heading">Connected in just one simple link.</h1>
        <p class="hero-section__description">
          Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events
          and more. It all comes together in a link in bio landing page designed to convert.
        </p>
        <VForm class="hero-section__cta-form" @submit="cta">
          <VTextField type="text" name="username" placeholder="yourname">
            <template v-slot:prepend-inner>
              <span>bagilink.id/</span>
            </template>
          </VTextField>
          <VButton class="btn btn--primary btn--big">Sign Up</VButton>
        </VForm>
      </div>
      <div class="hero-section__img-box">
        <img src="@/assets/images/hero.png" />
      </div>
    </section>

    <div class="customize-section-wrapper full-width" id="services">
      <section class="customize-section">
        <div class="customize-section__img-box">
          <img class="customize-section__app-img" src="@/assets/images/customize-1.png" />
          <img class="customize-section__person-img" src="@/assets/images/customize-2.png" />
        </div>
        <div class="customize-section__text-box">
          <h2 class="customize-section__heading">Customize your page in seconds</h2>
          <p class="customize-section__description">
            Easy creation of aesthetic mini-websites for brands, creators, and marketers with
            extensive and powerful design features.
          </p>
          <VButton class="btn btn--primary btn--wide" :to="{name: 'signup'}">Design your own page</VButton>
        </div>
      </section>
    </div>

    <div class="share-section-wrapper full-width">
      <section class="share-section">
        <div class="share-section__text-box">
          <h2 class="share-section__heading">
            Share your Page from your Instagram, TikTok, Twitter and other bios
          </h2>
          <p class="share-section__description">
            Showcase your Linkiee anywhere with the instant loading speed and share it with audience
            . Also, generate your Unique QR Code from Linkiee and drive traffic from offline to
            online.
          </p>
          <VButton class="btn btn--primary btn--wide" :to="{name: 'signup'}">Get started for free</VButton>
        </div>
        <div class="share-section__img-box">
          <img src="@/assets/images/share.png" />
        </div>
      </section>
    </div>

    <section class="faq-section" id="faq">
      <h2 class="faq-section__heading">FAQ</h2>
      <div class="faq-section__list">
        <VAccordion>
          <template v-slot:title>Why do I need a link in bio tool?</template>
          <template v-slot:content>
            Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit.
          </template>
        </VAccordion>

        <VAccordion>
          <template v-slot:title>How does a link in bio tool work?</template>
          <template v-slot:content>
            Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit.
          </template>
        </VAccordion>

        <VAccordion>
          <template v-slot:title>Do I need a website to use Bagilink?</template>
          <template v-slot:content>
            Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit.
          </template>
        </VAccordion>

        <VAccordion>
          <template v-slot:title>Is Bagilink free?</template>
          <template v-slot:content>
            Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit.
          </template>
        </VAccordion>

        <VAccordion>
          <template v-slot:title>Where can I download the app?</template>
          <template v-slot:content>
            Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit.
          </template>
        </VAccordion>
      </div>
    </section>

    <div class="cta-section-wrapper full-width">
      <section class="cta-section">
        <h2 class="cta-section__heading">Show your page to the internet today</h2>
        <VForm class="cta-section__form" @submit="cta">
          <VTextField class="cta-section__input" type="text" name="username" placeholder="yourname">
            <template v-slot:prepend-inner>
              <span>bagilink.id/</span>
            </template>
          </VTextField>
          <VButton class="btn btn--primary btn--big">Sign Up</VButton>
        </VForm>
      </section>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/Default.vue'
import VButton from '@/components/Button.vue'
import VTextField from '@/components/TextField.vue'
import VAccordion from '@/components/Accordion.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const cta = (values) => {
  router.push({
    name: 'signup',
    query: { username: values.username }
  })
}
</script>

<style lang="scss" scoped>
.hero-section {
  display: flex;
  padding-block: clamp(3rem, 1rem + 4vw, 6rem) 10rem;

  @include respond-to('medium') {
    flex-direction: column;
    gap: 6rem;
  }

  &__text-box {
    width: 51%;
    margin-top: 6.5%;
    margin-top: clamp(0rem, 10vw - 5rem, 7.3rem);

    @include respond-to('medium') {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  &__img-box {
    align-self: center;
    width: 49%;

    @include respond-to('medium') {
      width: 80%;
    }

    & > img {
      width: 66.4rem;
      max-width: 100%;
    }
  }

  &__heading {
    @include typography('headline-1');
    margin-bottom: 1.6rem;
  }

  &__description {
    @include typography('paragraph-1');
    margin-bottom: 2.4rem;
    width: 91%;
  }

  &__cta-form {
    display: flex;
    gap: 1.6rem;

    @include respond-to('small') {
      flex-direction: column;
    }
  }
}

.customize-section-wrapper {
  background-image: linear-gradient(#ffe1c9, #ffd0aa);
}

.customize-section {
  padding-top: 9.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;

  @include respond-to(medium) {
    row-gap: 4rem;
    grid-template-columns: 1fr;
    text-align: center;
    justify-items: center;
  }

  &__heading {
    @include typography(headline-2);
    margin-bottom: 1.6rem;
  }

  &__description {
    @include typography(paragraph-1);
    margin-bottom: 4rem;
  }

  &__img-box {
    position: relative;

    @include respond-to(medium) {
      order: 1;
      max-width: 80%;
    }
  }

  &__app-img {
    width: 40.2rem;
    max-width: 100%;
    margin-left: 3.6rem;
  }

  &__person-img {
    position: absolute;
    bottom: 0;
    width: 18.6rem;
    max-width: 50%;
  }
}

.share-section-wrapper {
  background-color: $gray-7;
}

.share-section {
  padding-top: 10rem;
  display: grid;
  grid-template-columns: 51fr 49fr;
  column-gap: 1.8rem;

  @include respond-to(medium) {
    row-gap: 4rem;
    grid-template-columns: 1fr;
    text-align: center;
    justify-items: center;
  }

  &__text-box {
    display: flex;
    flex-direction: column;
    align-items: start;

    @include respond-to(medium) {
      align-items: center;
    }
  }

  &__heading {
    @include typography(headline-2);
    margin-bottom: 1.6rem;
  }

  &__description {
    @include typography(paragraph-1);
    margin-bottom: 4rem;
    width: 90%;
  }

  &__img-box {
    justify-self: end;

    @include respond-to(medium) {
      width: 80%;
      justify-self: center;
    }

    & > img {
      width: 515;
      max-width: 100%;
    }
  }
}

.faq-section {
  padding: 10rem clamp(0rem, 31.25vw + -25rem, 20rem);

  &__heading {
    @include typography(headline-2);
    margin-bottom: 6rem;
    text-align: center;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}

.cta-section-wrapper {
  background-color: $gray-7;
}

.cta-section {
  padding-block: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  &__heading {
    @include typography(headline-2);
    line-height: 1.5;
    text-align: center;
    width: 50%;

    @include respond-to(medium) {
      width: 100%;
    }
  }

  &__form {
    display: flex;
    gap: 1.6rem;

    @include respond-to(medium) {
      flex-direction: column;
    }
  }

  &__input {
    background-color: $light;
  }
}
</style>
