import Vue from "vue";
import Vuex from "vuex";

import { instruments, tunings, notesNames } from '../data/music'

Vue.use(Vuex);

const state = {
  allInstruments: instruments,
  allTunings: tunings,
  notesNames: notesNames,
  instrument: 'guitar',
  tuning: 'standard',
};

const mutations = {
  mutateInstrument(state, payload) {
    state.instrument = payload;

    console.log('mutation Instrument', state, payload)
  },
  mutateTuning(state, payload) {
    state.tuning = payload;

    console.log('mutation tuning', state, payload)
  }
};

const actions = {
  updateInstrument({commit}, payload) {
    commit('mutateInstrument', payload);
    console.log('actions Instrument', {commit}, payload)
  },
  updateTuning({commit}, payload) {
    commit('mutateTuning', payload);
    console.log('actions Tuning', {commit}, payload)
  }
};

const getters = {
  getAllInstruments: state => state.allInstruments,
  getInstrument: state => state.instrument,
  getAllTunings: state => state.allTunings,
  getTuning: state => state.tuning,
  getNotesNames: state => state.notesNames,
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
