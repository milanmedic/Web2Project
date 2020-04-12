<template>
  <div class="base-input-field">
    <label :for="transformedId">{{ description }}</label>
    <input
      type="text"
      @input="updateValue($event.target.value)"
      :id="transformedId"
    />
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    type: {
      type: String,
      default: "text"
    }
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    }
  },
  computed: {
    transformedId() {
      return this.description;
    }
  }
};
</script>

<style></style>
