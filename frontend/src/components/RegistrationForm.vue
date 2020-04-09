<template>
  <BaseForm :neededFields="neededFields" :submitMethod="sendData" :resetMethod="resetFields">
    <template v-slot:nameInput>
      <BaseInput type="text" v-model="username" description="Name" />
    </template>
    <template v-slot:emailInput>
      <BaseInput type="email" v-model="useremail" description="Email" />
    </template>
    <template v-slot:passwordInput>
      <BaseInput type="password" v-model="password" description="Password" />
    </template>
    <template v-slot:confirmPasswordInput>
      <BaseInput type="password" v-model="confirmPassword" description="Confirm Password" />
    </template>
    <template v-slot:formButtons>
      <div class="registration-form-buttons">
        <BaseButton type="submit" description="Submit" />
        <BaseButton type="reset" description="Reset" />
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
      username: "",
      useremail: "",
      password: "",
      confirmPassword: "",
      neededFields: [
        {
          id: 1,
          slotName: "nameInput"
        },
        {
          id: 2,
          slotName: "emailInput"
        },
        {
          id: 3,
          slotName: "passwordInput"
        },
        {
          id: 4,
          slotName: "confirmPasswordInput"
        }
      ]
    };
  },
  methods: {
    resetFields() {
      this.username = "";
      this.useremail = "";
      this.password = "";
      this.confirmPassword = "";
      this.$emit("reset");
    },
    sendData() {
      console.log("Hello World");
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