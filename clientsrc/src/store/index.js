import Vue from "vue";
import Vuex from "vuex";
import { socketStore } from "./socketStore"
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
    profile: { providerProfile: {}, customerProfile: {}},
    customer: {},
    provider: {},
    customerJobs: [],
    allJobs: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setCustomer(state, customer) {
      state.customer = customer;
    },
    setProvider(state, provider) {
      state.provider = provider;
    },
    // setMyJobs(state, payload) {
    //   state.myJobs = payload
    // },
    setCustomerJobs(state, payload) {
      state.customerJobs = payload
    },
    setAllJobs(state, allJobs) {
      state.allJobs = allJobs
    },
    addJob(state, data) {
      state.allJobs.push(data)
    }

  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },

    //SECTION --Registration--
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
        await api.put(`profile/${this.state.profile._id}`, { customerProfile: res.data._id })
        commit('setCustomer', res.data)
        dispatch('getProfile')
        router.push(`/custdashboard/${res.data._id}`)
      } catch (error) {
        console.error(error);
      }
    },

    async registerProvider({ commit, dispatch }, newProvider) {
      debugger
      try {
        let res = await api.post('providers', newProvider)
        await api.put(`profile/${this.state.profile._id}`, { providerProfile: res.data._id })
        commit('setProvider', res.data)
        dispatch('getProfile')
        router.push(`/provdashboard/${res.data._id}`)
      } catch (error) {
        console.error(error)
      }
    },
    async getCustomer({ commit, dispatch }) {
      try {
        let res = await api.get(`customer/${this.state.profile._id}`)
        commit('setCustomer', res.data)
      } catch (error) {
        console.error(error)
      }
    },

    //!SECTION

    //SECTION --Addresses and Jobs--
    async saveAddress({ commit, dispatch }, addressData) {
      try {
        let res = await api.post(`customers/${this.state.profile.customerProfile._id}/addresses`, addressData)
        console.log(res.data)
        dispatch('getProfile')
      } catch (error) {
        console.error(error)
      }
    },
    async createJob({ commit, dispatch }, jobData) {
      try {
        let res = await api.post(`jobs`, jobData)
        console.log(res.data)
        dispatch('getCustomerJobs', jobData.customerId)
      } catch (error) {
        console.error(error)
      }
    },

    async getCustomerJobs({ commit, dispatch }, customerId) {
      try {
        let res = await api.get(`customers/${customerId}/jobs`)
        commit('setCustomerJobs', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getAllJobs({ commit, dispatch }) {
      try {
        let res = await api.get(`jobs`)
        commit('setAllJobs', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async AcceptJob ({ commit, dispatch }, jobData) {
      try {
        let res = await api.put(`jobs/${jobData._id}?acceptJob=true`, jobData)
      } catch (error) {
        console.error(error)

      }
    },
    async EditJobStatus ({ commit, dispatch }, jobData) {
      try {
        let res = await api.put(`jobs/${jobData._id}`, jobData)
        // commit("setAllJobs")
      } catch (error) {
        console.error(error)

      }
    }
  },
  modules: {
    socketStore
  }
});
//!SECTION
