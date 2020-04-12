<template>
  <div class="profile-page-main">
    <BaseProfileOptionsTab :tabs="tabs" />
    <div class="selected-tab-section">
      <!--<component :is="currentTabComponent"></component>-->
      <component v-for="item in components" :key="item.id" :is="item.value"></component>
    </div>
  </div>
</template>

<script>
import BaseProfileOptionsTab from "./BaseProfileOptionsTab";

export default {
  data() {
    return {
      components: []
    };
  },
  props: {
    tabs: { type: Array, required: true },
    requiredComponents: { type: Array, required: true }
  },
  components: {
    BaseProfileOptionsTab
  },
  created() {
    for (let i = 0; i < this.requiredComponents.length; i++) {
      const component = () => import(`./${this.requiredComponents[i]}`);

      this.components.push({ id: i, value: component });
    }
  }
};
</script>

<style>
</style>