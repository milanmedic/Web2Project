<template>
  <div class="profile-page">
    <BaseProfileHeader />
    <BaseProfileMain :tabs="tabs" :requiredComponents="requiredComponents" />
  </div>
</template>

<script>
import BaseProfileHeader from "./BaseProfilePageComponents/BaseProfileHeader";
import BaseProfileMain from "./BaseProfilePageComponents/BaseProfileMain";
export default {
  props: {
    tabs: {
      type: Array,
      required: true
    },
    requiredComponents: {
      type: Array,
      required: true
    }
  },
  components: {
    BaseProfileHeader,
    BaseProfileMain
  }
};
</script>

<style>
</style>