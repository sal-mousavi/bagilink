<template>
  <div class="footer-wrapper full-width">
    <footer class="footer">
      <nav>
        <p class="footer__heading">Company</p>
        <ul class="footer__nav">
          <li><a href="#" class="footer__link">Bagilink Blog</a></li>
          <li><a href="#" class="footer__link">Marketplace</a></li>
          <li><a href="#" class="footer__link">What's New</a></li>
          <li><a href="#" class="footer__link">About</a></li>
          <li><a href="#" class="footer__link">Contact</a></li>
        </ul>
      </nav>

      <nav>
        <p class="footer__heading">Community</p>
        <ul class="footer__nav">
          <li><a href="#" class="footer__link">Bagilink for Enterprise</a></li>
          <li><a href="#" class="footer__link">Charities</a></li>
          <li><a href="#" class="footer__link">Explore Templates</a></li>
        </ul>
      </nav>

      <nav>
        <p class="footer__heading">Support</p>
        <ul class="footer__nav">
          <li><a href="#" class="footer__link">Help Topics</a></li>
          <li><a href="#" class="footer__link">Getting Started</a></li>
          <li><a href="#" class="footer__link">Bagilink Pro</a></li>
          <li><a href="#" class="footer__link">FAQs</a></li>
        </ul>
      </nav>

      <nav>
        <p class="footer__heading">Trust & Legal</p>
        <ul class="footer__nav">
          <li><a href="#" class="footer__link">Terms & Conditions</a></li>
          <li><a href="#" class="footer__link">Privacy Notice</a></li>
          <li><a href="#" class="footer__link">Cookie Notify</a></li>
          <li><a href="#" class="footer__link">Trust Center</a></li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer-wrapper {
  background-color: $gray-7;
}

.footer {
  padding-block: 6rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 4rem;
  justify-items: center;
  text-align: center;

  &__heading {
    @include typography(headline-6);
    margin-bottom: 2rem;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    list-style: none;
  }

  &__link {
    @include typography(paragraph-4);
    font-weight: 600;
    text-decoration: none;
    transition: 0.2s ease all;

    &:hover {
      color: $gray-3;
    }
  }
}
</style>
