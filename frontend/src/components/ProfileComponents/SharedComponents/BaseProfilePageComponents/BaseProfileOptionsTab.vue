<template>
  <nav class="profile-page-options">
    <ul>
      <BaseProfileOptionTabItem v-for="tab in tabs" :key="tab" :title="tab" />
    </ul>
  </nav>
</template>

<script>
import BaseProfileOptionTabItem from "./BaseProfileOptionTabItem";
export default {
  props: {
    tabs: {
      type: Array,
      required: true
    }
  },
  components: {
    BaseProfileOptionTabItem
  }
};
</script>

<style>
</style>