<template>
  <div :class="$style.fretboard">
    <p>You chose {{$store.getters.getInstrument }}</p>
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
import { mapGetters} from 'vuex';

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
      getInstruments: 'getInstruments',
      getInstrument: 'getInstrument',
      getTunings: 'getTunings',
      getTuning: 'getTuning',
      getNotesNames: 'getNotesNames',
    }),
    tuningNotes() {
      const notes = Array.from(this.getTunings[this.getInstrument][this.getTuning]);
      console.log('notes', notes, this.getTunings[this.getInstrument][this.getTuning])
      return notes;
    },
    nbStrings() {
      console.log('nbStrings', this.getInstruments[this.getInstrument].nbStrings)
      return this.getInstruments[this.getInstrument].nbStrings;
    },
    strings() {
      return [...Array(this.nbStrings).keys()]
    },
    notesByString() {
      let allStrings = []
      let arrayNotes = Object.values(this.getNotesNames)

      this.tuningNotes.forEach(stringNote => {
        let currentString = [];
        const noteIndex = arrayNotes.findIndex(item => item === stringNote);
        const length = arrayNotes.length;

        for (let i = 0; i < length * 2 + 1; i++) {
          currentString.push(arrayNotes[(noteIndex + i) % length]);
        }
        allStrings.push(currentString);
      })

      return allStrings.reverse()
    },
  },
  watch: {
    selected (newInstrument, oldInstrument) {
      console.log('selected change', newInstrument, oldInstrument)
    },
  },
  methods: {
    stringNotes(index) {
      const allStrings = this.notesByString
      const notes = allStrings[index]

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
    border-top: 1px solid black;
  }

  .string--is-last {
    border-bottom: 1px solid black;
  }
</style>
