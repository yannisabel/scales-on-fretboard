<template>
  <div id="app">
    <GithubCorner
      url="https://github.com/yannisabel/scales-on-fretboard"
      cornerColor="#264B68"
      gitColor="#ffffff"
    />
    <header class="header">
      <h1>Scales on Fretboard</h1>
      <label for="toggle-switch'" :class="{'active': darkTheme}" class="toggle__button">
        <span v-if="darkTheme" class="toggle__label">Dark</span>
        <span v-if="!darkTheme" class="toggle__label">Light</span>

        <input type="checkbox" id="toggle-switch'" v-model="darkTheme">
        <span class="toggle__switch"></span>
      </label>
    </header>
    <div class="infos-wrapper">
      <div class="freatboard-options">
        <div class="select-wrapper">
          <label for="instrument-choice">Instrument:</label>
          <div class="select">
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
          </div>
        </div>
        <div class="select-wrapper">
          <template v-if="tuningSelect.length > 1">
            <label for="tuning-choice">Tuning:</label>
            <div class="select">
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
            </div>
          </template>
          <template v-else>
            <span>Tuning:</span>
            <span>{{ tuningSelect[0] }}</span>
          </template>
        </div>
        <div class="select-wrapper">
          <label for="scale-choice">Scale:</label>
          <div class="select">
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
          </div>
        </div>
        <div class="select-wrapper">
          <label for="rootnote-choice">Root Note:</label>
          <div class="select">
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
        </div>
      </div>
      <div class="current-infos">
        <p><b>Steps:</b> {{ scaleSteps }}</p>
      </div>
    </div>
    <Fretboard />
  </div>
</template>

<script>
import Fretboard from './components/Fretboard'
import GithubCorner from 'vue-github-corners'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Fretboard,
    GithubCorner,
  },
  data() {
    return {
      darkTheme: true,
      selectedInstrument: this.$store.state.instrument,
      selectedTuning: this.$store.state.tuning,
      selectedScale: this.$store.state.scale,
      selectedRootNote: this.$store.state.rootNote,
      currentSteps: null,
    }
  },
  mounted() {
    // check for active theme
    let htmlElement = document.documentElement;
    let theme = localStorage.getItem("theme");

    if (theme === 'light') {
        htmlElement.setAttribute('theme', 'light')
        this.darkTheme = false
    } else {
        htmlElement.setAttribute('theme', 'dark');
        this.darkTheme = true
    }
  },
  watch: {
    darkTheme: function () {
        let htmlElement = document.documentElement;

        if (this.darkTheme) {
            localStorage.setItem("theme", 'dark');
            htmlElement.setAttribute('theme', 'dark');
        } else {
            localStorage.setItem("theme", 'light');
            htmlElement.setAttribute('theme', 'light');
        }
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
    scaleSteps() {
      return this.getAllScales[this.selectedScale].steps.join(', ')
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
  @import './main.scss';
</style>
