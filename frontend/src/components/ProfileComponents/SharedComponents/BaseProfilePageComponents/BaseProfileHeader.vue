<template>
  <header class="profile-header">
    <BaseProfileHero />
    <BaseProfileDescription />
  </header>
</template>

<script>
import BaseProfileHero from "./BaseProfileHero";
import BaseProfileDescription from "./BaseProfileDescription";
export default {
  components: {
    BaseProfileHero: BaseProfileHero,
    BaseProfileDescription: BaseProfileDescription
  }
};
</script>

<style>
</style>