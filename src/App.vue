<template>
  <div id="app">
    <div>
      <label for="instrument-choice">Instrument:</label>
      <select
        id="instrument-choice"
        v-model="selectedInstrument"
        @change="changeInstrument()"
      >
        <option
          v-for="instrument in getAllInstruments"
          :key="instrument.name"
          :value="instrument.label"
        >
          {{ instrument.name }}
        </option>
      </select>
      <template v-if="tuningSelect.length > 1">
        <label for="tuning-choice">Tuning:</label>
        <select
          id="tuning-choice"
          v-model="selectedTuning"
          @change="changeTuning()"
        >
          <option
            v-for="tuning in tuningSelect"
            :key="tuning"
            :value="tuning"
          >
            {{ tuning }}
          </option>
        </select>
      </template>
      <template v-else>
        <span>Tuning:</span>
        <span>{{ tuningSelect[0] }}</span>
      </template>
      <label for="scale-choice">Scale:</label>
      <select
        id="scale-choice"
        v-model="selectedScale"
        @change="changeScale()"
      >
        <option
          v-for="scale in scaleSelect"
          :key="scale.name"
          :value="scale.name"
        >
          {{ scale.name }}
        </option>
      </select>
      <label for="rootnote-choice">Root Note:</label>
      <select
        id="rootnote-choice"
        v-model="selectedRootNote"
        @change="changeRootNote()"
      >
        <option
          v-for="note in getNotesNames"
          :key="note"
          :value="note"
        >
          {{ note }}
        </option>
      </select>
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
      selectedScale: this.$store.state.scale,
      selectedRootNote: this.$store.state.rootNote,
    }
  },
  computed: {
    ...mapGetters({
      getAllInstruments: 'getAllInstruments',
      getInstrument: 'getInstrument',
      getAllTunings: 'getAllTunings',
      getTuning: 'getTuning',
      getNotesNames: 'getNotesNames',
      getAllScales: 'getAllScales',
      getRootNote: 'getRootNote',
    }),
    tuningSelect() {
      return Object.keys(this.getAllTunings[this.selectedInstrument])
    },
    scaleSelect() {
      return this.getAllScales
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

    changeScale() {
      this.$store.dispatch('updateScale', this.selectedScale)
    },

    changeRootNote() {
      this.$store.dispatch('updateRootNote', this.selectedRootNote)
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
