<template>
  <BaseForm :neededFields="neededFields" :submitMethod="searchForTerm">
    <template v-slot:servicesSelect>
      <BaseSelect
        v-model="searchTerm"
        :options="options"
        fieldTitle="Find Out About"
      />
    </template>
    <template v-slot:formButtons>
      <div class="services-search-form-buttons">
        <BaseButton type="submit" description="Search!" />
      </div>
    </template>
  </BaseForm>
</template>

<script>
import BaseForm from "../BaseComponents/BaseForm";
import BaseSelect from "../BaseComponents/BaseSelect";
import BaseButton from "../BaseComponents/BaseButton";
export default {
  data() {
    return {
      searchTerm: "",
      options: [
        {
          optionValue: "FS",
          description: "Flight Services"
        },
        {
          optionValue: "RACS",
          description: "Rent-a-Car Services"
        }
      ],
      neededFields: [
        {
          id: 1,
          slotName: "servicesSelect"
        }
      ]
    };
  },
  methods: {
    searchForTerm() {
      console.log(this.searchTerm);
    }
  },
  components: {
    BaseForm: BaseForm,
    BaseSelect: BaseSelect,
    BaseButton: BaseButton
  }
};
</script>

<style></style>
