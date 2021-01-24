import Vue from "vue";
import Vuex from "vuex";

import { instruments, tunings, notesNames, scales, intervalsNames } from '../data/music'

Vue.use(Vuex);

const state = {
  allInstruments: instruments,
  allTunings: tunings,
  notesNames: notesNames,
  instrument: 'guitar',
  tuning: 'standard',
  allScales: scales,
  scale: 'major',
  intervalsNames: intervalsNames,
  rootNote: 'C',
};

const mutations = {
  mutateInstrument(state, payload) {
    state.instrument = payload;
  },
  mutateTuning(state, payload) {
    state.tuning = payload;
  },
  mutateScale(state, payload) {
    state.scale = payload;
  },
  mutateRootNote(state, payload) {
    state.rootNote = payload;
  },
};

const getters = {
  getAllInstruments: state => state.allInstruments,
  getInstrument: state => state.instrument,
  getAllTunings: state => state.allTunings,
  getTuning: state => state.tuning,
  getNotesNames: state => state.notesNames,
  getAllScales: state => state.allScales,
  getScale: state => state.scale,
  getIntervalsNames: state => state.intervalsNames,
  getRootNote: state => state.rootNote,
};

const actions = {
  updateInstrument({commit}, payload) {
    commit('mutateInstrument', payload);
  },
  updateTuning({commit}, payload) {
    commit('mutateTuning', payload);
  },
  updateScale({commit}, payload) {
    commit('mutateScale', payload);
  },
  updateRootNote({commit}, payload) {
    commit('mutateRootNote', payload);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
