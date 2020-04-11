<template>
  <div id="app">
    <RegistrationForm />
    <LoginForm />
  </div>
</template>

<script>
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
export default {
  data() {
    return {};
  },
  components: {
    RegistrationForm: RegistrationForm,
    LoginForm: LoginForm
  }
};
</script>

<style>
</style>
