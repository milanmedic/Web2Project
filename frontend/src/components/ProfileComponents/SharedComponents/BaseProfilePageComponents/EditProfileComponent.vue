<template>
  <div class="edit-profile">
    <ul>
      <li>
        <span class="field-name">Name</span>
        <span class="field-value">Value</span>
        <span class="edit-button">Edit</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getDataFromStore() {
      //gets user's friend list from vuex store
    }
  },
  created() {
    //on component creation trigger getDataFromStore()
    this.getDataFromStore();
  }
};
</script>

<style>
</style>