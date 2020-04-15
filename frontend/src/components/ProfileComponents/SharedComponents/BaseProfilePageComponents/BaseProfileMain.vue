<template>
  <div class="profile-page-main">
    <BaseProfileOptionsTab :tabs="tabs" @selectTab="selectTab" />
    <div class="selected-tab-section">
      <keep-alive>
        <component
          v-for="item in components"
          :key="item.id"
          :is="item.value"
          v-if="check(item.name)"
        ></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import BaseProfileOptionsTab from "./BaseProfileOptionsTab";
export default {
  data() {
    return {
      selectedComponent: "",
      components: []
    };
  },
  props: {
    tabs: { type: Array, required: true },
    requiredComponents: { type: Array, required: true }
  },
  methods: {
    selectTab(value) {
      this.selectedComponent = value;
    },
    check(value) {
      return this.selectedComponent == value;
    }
  },
  components: {
    BaseProfileOptionsTab
  },
  created() {
    /* This way probably won't work'*/
    /**https://stackoverflow.com/questions/43658481/passing-props-dynamically-to-dynamic-component-in-vuejs
     * For Dynamic prop binding
     */
    for (let i = 0; i < this.requiredComponents.length; i++) {
      const component = async () =>
        await import(`${this.requiredComponents[i].path}`);
      this.components.push({
        id: i,
        value: component,
        name: this.requiredComponents[i].name
      });
    }
  }
};
</script>

<style>
</style>