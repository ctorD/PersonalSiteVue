import Vue from "vue";
import axios from "axios";

const state = {
  resume: {}
};

const mutations = {
  updateResume(state, resume) {
    state.resume = resume;
  }
};

const actions = {

  updateResume({ commit }) {
    axios.get('https://gitconnected.com/v1/portfolio/ctord').then((response)=>{
      console.log(response.data)
      commit('updateResume',response.data)
    })

  }
};
const getters = {
  resume: state => {
    return state.resume;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
