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
        "Flights",
        "Tickets",
        "Seat Configuration",
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
          name: "Flights",
          path: "./FlightsListComponent"
        },
        {
          id: 3,
          componentName: "TicketsListComponent",
          name: "Tickets",
          path: "../../FlightServiceProfileComponents/TicketsListComponent"
        },
        {
          id: 4,
          componentName: "SeatConfigurationComponent",
          name: "Seat Configuration",
          path:
            "../../FlightServiceProfileComponents/SeatConfigurationComponent"
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