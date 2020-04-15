<template>
  <nav class="profile-page-options">
    <ul>
      <BaseProfileOptionTabItem v-for="tab in tabs" :key="tab" :title="tab" @selectTab="selectTab" />
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
  methods: {
    selectTab(value) {
      this.$emit("selectTab", value);
    }
  },
  components: {
    BaseProfileOptionTabItem
  }
};
</script>

<style>
</style>