<template>
  <BaseForm :neededFields="neededFields" :submitMethod="searchUser" :resetMethod="resetFields">
    <template v-slot:nameInput>
      <BaseInput type="text" v-model="username" description="Name" />
    </template>
    <template v-slot:formButtons>
      <div class="find-friend-form-buttons">
        <BaseButton type="submit" description="Submit" />
        <BaseButton type="reset" description="Reset" />
      </div>
    </template>
  </BaseForm>
</template>

<script>
import BaseForm from "../../BaseComponents/BaseForm";
import BaseInput from "../../BaseComponents/BaseInput";
import BaseButton from "../../BaseComponents/BaseButton";
export default {
  data() {
    return {
      username: "",
      neededFields: [
        {
          id: 1,
          slotName: "nameInput"
        }
      ]
    };
  },
  methods: {
    resetFields() {
      this.username = "";
      this.$emit("reset");
    },
    searchUser() {
      console.log("Search User");
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