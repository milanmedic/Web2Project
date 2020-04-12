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
  data() {
    return {
      tabs: ["Edit Profile", "Friends List"],
      requiredComponents: ["EditProfileComponent", "FriendListComponent"]
    };
  },
  components: {
    BaseProfileHeader,
    BaseProfileMain
  }
};
</script>

<style>
</style>