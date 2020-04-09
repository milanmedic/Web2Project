<template>
  <button :type="buttonType" @click="eventHandler || triggerEvent">{{description}}</button>
</template>

<script>
export default {
  props: {
    buttonType: {
      type: String,
      default: "submit"
    },
    description: {
      type: String,
      required: true
    },
    eventHandler: {
      type: Function
    }
  },
  methods: {
    triggerEvent() {
      this.$emit("click");
    }
  }
};
</script>

<style>
</style>