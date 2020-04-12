<template>
  <div class="landing-page">
    <ApplicationHeader />
    <main class="landing-page-content">
      <div class="landing-page-banner">
        <p>Search for ...</p>
      </div>
      <ServicesSearchForm />
    </main>
  </div>
</template>

<script>
import ServicesSearchForm from "./ServicesSearchForm";
import ApplicationHeader from "./ApplicationHeader";
export default {
  data() {
    return {};
  },
  components: {
    ServicesSearchForm: ServicesSearchForm,
    ApplicationHeader: ApplicationHeader
  }
};
</script>

<style></style>
