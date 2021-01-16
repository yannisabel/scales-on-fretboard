<template>
  <div id="app">
    <div>
      <label for="instrument-choice">Instrument:</label>
      <select v-model="selectedInstrument" id="instrument-choice" @change="changeInstrument()">
        <option v-for="instrument in getAllInstruments" :value="instrument.label" :key="instrument.name">{{ instrument.name }}</option>
      </select>
      <template v-if="tuningSelect.length > 1">
        <label for="tuning-choice">Tuning:</label>
        <select v-model="selectedTuning" id="tuning-choice" @change="changeTuning()">
          <option v-for="tuning in tuningSelect" :value="tuning" :key="tuning">{{ tuning }}</option>
        </select>
      </template>
      <template v-else>
        <span>Tuning:</span>
        <span>{{ tuningSelect[0] }}</span>
      </template>
    </div>
    <Fretboard />
  </div>
</template>

<script>
import Fretboard from './components/Fretboard'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Fretboard,
  },
  data() {
    return {
      selectedInstrument: this.$store.state.instrument,
      selectedTuning: this.$store.state.tuning,
    }
  },
  computed: {
    ...mapGetters({
      getAllInstruments: 'getAllInstruments',
      getInstrument: 'getInstrument',
      getAllTunings: 'getAllTunings',
      getTuning: 'getTuning',
      getNotesNames: 'getNotesNames',
    }),
    tuningSelect() {
      return Object.keys(this.getAllTunings[this.selectedInstrument])
    },
  },
  methods: {
    changeInstrument() {
      this.$store.dispatch('updateInstrument', this.selectedInstrument)
      // force tuning to be standard on instrument change
      this.$store.dispatch('updateTuning', 'standard')
      this.selectedTuning = 'standard'
    },

    changeTuning() {
      this.$store.dispatch('updateTuning', this.selectedTuning)
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
