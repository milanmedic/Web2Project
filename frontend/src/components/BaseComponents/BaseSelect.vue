<template>
  <div class="base-select-input-field">
    <label> {{ fieldTitle }} </label>
    <select @input="updateValue($event.target.value)">
      <option disabled selected>Select One Search Term</option>
      <option
        v-for="{ optionValue, description } in options"
        :value="optionValue"
        :key="optionValue"
        >{{ description }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    fieldTitle: {
      type: String,
      required: true
    }
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    }
  }
};
</script>

<style></style>
