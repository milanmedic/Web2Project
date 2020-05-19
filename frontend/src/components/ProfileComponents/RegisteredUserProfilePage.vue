<template>
  <div>
    <BaseProfileComponent :tabs="tabs" :requiredComponents="requiredComponents" />
  </div>
</template>

<script>
import BaseProfileComponent from "./SharedComponents/BaseProfilePage";
export default {
  data() {
    return {
      tabs: ["Edit Profile", "Friends List", "Find Friends"],
      requiredComponents: [
        {
          id: 1,
          componentName: "EditProfileComponent",
          name: "Edit Profile",
          path: "./EditProfileComponent"
        },
        {
          id: 2,
          componentName: "FriendsListComponent",
          name: "Friends List",
          path: "../../UserProfileComponents/FriendsListComponent"
        },
        {
          id: 3,
          componentName: "FindFriendsComponent",
          name: "Find Friends",
          path: "./UserProfileComponents/FindFriendsComponent"
        }
      ]
    };
  },
  components: {
    BaseProfileComponent
  }
};
</script>

<style>
</style>