<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  @apply font-sans text-base;

  box-sizing: border-box;
  word-spacing: 1px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  @apply text-green-dark border border-green-dark;

  display: inline-block;
  padding: 10px 30px;
  text-decoration: none;
  border-radius: 4px;
}

.button--green:hover {
  @apply text-white bg-green-dark;
}

.button--grey {
  @apply text-grey-darkest border border-grey-darkest;

  display: inline-block;
  padding: 10px 30px;
  margin-left: 15px;
  text-decoration: none;
  border-radius: 4px;
}

.button--grey:hover {
  @apply text-white bg-grey-darkest;
}
</style>
