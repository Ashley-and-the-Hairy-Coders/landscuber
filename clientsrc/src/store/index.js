import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    profile: {},
    customer: {}
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setCustomer(state, customer) {
      state.customer = customer;
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    //NOTE Review once backend complete
    async registerCust({ commit, dispatch }, newCustomer) {
      try {
        let res = await api.post('customers', newCustomer)
        commit("customer", newCustomer)
      } catch (error) {
        console.error(error);
        
      }
    }
  }
});
