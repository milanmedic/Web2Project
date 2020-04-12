<template>
  <li @click="selectTab">{{title}}</li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    selectTab() {
      this.$emit("selectTab", event.target.innerText);
    }
  }
};
</script>

<style>
</style>