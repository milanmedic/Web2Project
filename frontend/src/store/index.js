import Vue from "vue";
import Vuex from "vuex";
import baseModels from "./models/baseModels";

Vue.use(Vuex);

export default new Vuex.Store({
  moduels: {
    baseModels
  }
});
