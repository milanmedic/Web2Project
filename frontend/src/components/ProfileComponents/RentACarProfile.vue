<template>
  <BaseProfilePage :tabs="tabs" :requiredComponents="requiredComponents" />
</template>

<script>
import BaseProfilePage from "./SharedComponents/BaseProfilePage";
export default {
  data() {
    return {
      tabs: [
        "Edit Profile",
        "Vehlices",
        "Locations",
        "Prices",
        "Business Report"
      ],
      requiredComponents: [
        {
          id: 1,
          componentName: "EditProfileComponent",
          name: "Edit Profile",
          path: "./EditProfileComponent"
        },
        {
          id: 2,
          componentName: "FlightsListComponent",
          name: "Vehlices",
          path: "./FlightsListComponent"
        },
        {
          id: 3,
          componentName: "TicketsListComponent",
          name: "Locations",
          path: "../../FlightServiceProfileComponents/TicketsListComponent"
        },
        {
          id: 5,
          componentName: "PricesListComponent",
          name: "Prices",
          path: "../../FlightServiceProfileComponents/PricesListComponent"
        },
        {
          id: 6,
          componentName: "BusinessReportComponent",
          name: "Business Report",
          path: "../BusinessReportComponent"
        }
      ]
    };
  },
  components: {
    BaseProfilePage
  }
};
</script>

<style>
</style>