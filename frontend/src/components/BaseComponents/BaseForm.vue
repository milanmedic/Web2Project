<template>
  <form id="base-submit-form" @submit.prevent="submitMethod" @reset="resetMethod">
    <slot v-for="value in neededFields" :name="value.slotName">{{value.slotName}}</slot>
    <slot name="formButtons"></slot>
  </form>
</template>

<script>
export default {
  props: {
    neededFields: {
      type: Array,
      required: true
    },
    submitMethod: {
      type: Function,
      required: true
    },
    resetMethod: {
      type: Function
    }
  }
};
</script>

<style>
</style>