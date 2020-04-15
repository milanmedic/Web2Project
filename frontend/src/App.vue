<template>
  <div id="app">
    <!--<RegistrationForm /> -->
    <!-- <LoginForm /> -->
    <!--<LandingPage /> -->
    <!-- <BaseProfilePage /> -->
    <!-- <FlightServiceProfile /> -->
    <RegisteredUserProfilePage />
  </div>
</template>

<script>
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import LandingPage from "./components/LandingPageComponents/LandingPage";
import BaseProfilePage from "./components/ProfileComponents/SharedComponents/BaseProfilePage";
import FlightServiceProfile from "./components/ProfileComponents/FlightServiceProfile";
import RegisteredUserProfilePage from "./components/ProfileComponents/RegisteredUserProfilePage";
export default {
  data() {
    return {};
  },
  components: {
    //RegistrationForm: RegistrationForm,
    //LoginForm: LoginForm,
    //LandingPage: LandingPage
    // BaseProfilePage
    // FlightServiceProfile
    RegisteredUserProfilePage
  }
};
</script>

<style>
</style>
