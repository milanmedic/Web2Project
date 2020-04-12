<template>
  <div id="app">
    <!--<RegistrationForm /> -->
    <!-- <LoginForm /> -->
    <!--<LandingPage /> -->
    <BaseProfilePage />
  </div>
</template>

<script>
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import LandingPage from "./components/LandingPageComponents/LandingPage";
import BaseProfilePage from "./components/ProfileComponents/SharedComponents/BaseProfilePage";
export default {
  data() {
    return {};
  },
  components: {
    //RegistrationForm: RegistrationForm,
    //LoginForm: LoginForm,
    //LandingPage: LandingPage
    BaseProfilePage
  }
};
</script>

<style>
</style>
