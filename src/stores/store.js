import Vue from "vue";
import Vuex from "vuex";

import { instruments, tunings, notesNames } from '../data/music'

Vue.use(Vuex);

const state = {
  instruments: instruments,
  tunings: tunings,
  notesNames: notesNames,
  instrument: 'guitar',
  tuning: 'standard',
};

const mutations = {
mutateInstrument(state, value = 'guitar') {
  state.instrument = value;

  console.log('mutation Instrument', state, value)
},
mutateTuning(state, value = 'standard') {
  state.tuning = value;

  console.log('mutation tuning', state, value)
}
};

const actions = {
  updateInstrument(context, payload) {
    context.commit('mutateInstrument', payload);
    console.log('actions Instrument', context, payload)
  },
  updateTuning(context, payload) {
    context.commit('mutateTuning', payload);
    console.log('actions Tuning', context, payload)
  }
};

const getters = {
  getInstruments: state => state.instruments,
  getInstrument: state => state.instrument,
  getTunings: state => state.tunings,
  getTuning: state => state.tuning,
  getNotesNames: state => state.notesNames,
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
