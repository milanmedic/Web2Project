<template>
  <div id="app">
    <!--<RegistrationForm /> -->
    <!-- <LoginForm /> -->
    <LandingPage />
  </div>
</template>

<script>
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import LandingPage from "./components/LandingPageComponents/LandingPage";
export default {
  data() {
    return {};
  },
  components: {
    //RegistrationForm: RegistrationForm,
    //LoginForm: LoginForm,
    LandingPage: LandingPage
  }
};
</script>

<style></style>
