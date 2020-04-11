<template>
  <BaseForm :neededFields="neededFields" :submitMethod="loginUser">
    <template v-slot:emailInput>
      <BaseInput type="email" v-model="useremail" description="Email" />
    </template>
    <template v-slot:passwordInput>
      <BaseInput type="password" v-model="password" description="Password" />
    </template>
    <template v-slot:formButtons>
      <div class="login-form-buttons">
        <BaseButton type="submit" description="Login" />
      </div>
    </template>
  </BaseForm>
</template>

<script>
import BaseForm from "./BaseComponents/BaseForm";
import BaseInput from "./BaseComponents/BaseInput";
import BaseButton from "./BaseComponents/BaseButton";
export default {
  data() {
    return {
      useremail: "",
      password: "",
      neededFields: [
        {
          id: 1,
          slotName: "emailInput"
        },
        {
          id: 2,
          slotName: "passwordInput"
        }
      ]
    };
  },
  methods: {
    loginUser() {
      console.log("login");
    }
  },
  components: {
    BaseForm: BaseForm,
    BaseInput: BaseInput,
    BaseButton: BaseButton
  }
};
</script>

<style>
</style>