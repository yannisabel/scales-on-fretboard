<template>
  <div :class="$style.fretboard">
    <String
      v-for="(string, index) in strings"
      :key="string"
      :class="[
        index === 0 ? $style['string--is-first'] : null,
        index === strings.length -1 ? $style['string--is-last'] : null,
      ]"
      :notes="stringNotes(index)"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import String from './String'

export default {
  name: 'Fretboard',
  components: {
    String,
  },
  props: {
  },
  computed: {
    ...mapGetters({
      getAllInstruments: 'getAllInstruments',
      getInstrument: 'getInstrument',
      getAllTunings: 'getAllTunings',
      getTuning: 'getTuning',
      getNotesNames: 'getNotesNames',
    }),
    tuningNotes() {
      const notes = this.getAllTunings[this.getInstrument][this.getTuning];
      return notes;
    },
    nbStrings() {
      return this.getAllInstruments[this.getInstrument].nbStrings;
    },
    strings() {
      return [...Array(this.nbStrings).keys()]
    },
    notesByString() {
      let allStrings = []
      let arrayNotes = Object.keys(this.getNotesNames)

      this.tuningNotes.forEach(stringNote => {
        let currentString = []
        let noteIndex = arrayNotes.findIndex(item => item === stringNote)
        const length = arrayNotes.length

        for (let i = 0; i < length * 2 + 1; i++) {
          const noteName = arrayNotes[(noteIndex + i) % length]
          
          currentString.push(this.getNotesNames[noteName])
        }
        allStrings.push(currentString)
      })

      return allStrings.reverse()
    },
  },
  methods: {
    stringNotes(index) {
      const notes = this.notesByString[index]

      return notes
    },
  }
}
</script>

<style lang="scss" module>
  .fretboard {
    display: grid;
    grid-auto-flow: row;
  }

  .string--is-first {
    border-top: 1px solid var(--string-color);
  }

  .string--is-last {
    border-bottom: 1px solid var(--string-color);
  }
</style>
