<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">NuxtApp</h1>
      <h2 class="subtitle">My stylish Nuxt.js project</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation</a
        >
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'

export default Vue.extend({
  components: {
    Logo
  }
})
</script>

<style lang="postcss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.title {
  @apply font-sans text-grey-darkest text-5xl;

  display: block;
  font-weight: 300;
  letter-spacing: 1px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
}

.subtitle {
  @apply text-grey-dark text-4xl;

  padding-bottom: 15px;
  font-weight: 300;
  word-spacing: 5px;
}

.links {
  padding-top: 15px;
}
</style>
