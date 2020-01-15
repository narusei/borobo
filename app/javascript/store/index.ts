import Vue from "vue";
import Vuex from "vuex";
import quest from "store/quest";
import auth from "store/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    quest,
    auth
  }
});
