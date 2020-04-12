<template>
  <header class="application-header">
    <!-- should be extracted into a separate component -->
    <figure>
      <img src alt="Leti Gohlube Logo" />
      <figcaption>
        <h1>Leti Gohlube Services</h1>
      </figcaption>
    </figure>
    <NavigationBar />
  </header>
</template>

<script>
import NavigationBar from "./NavigationBar";
export default {
  components: {
    NavigationBar: NavigationBar
  }
};
</script>

<style></style>
