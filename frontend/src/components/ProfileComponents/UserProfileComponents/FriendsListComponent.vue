<template>
  <div class="friends-list">
    <ul>
      <li v-for="(value, index) of 5" :key="index">
        <span class="friend-username">Friend username</span>
        <span class="delete-friend">Delete Friend</span>
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
  created() {}
};
</script>

<style>
</style>