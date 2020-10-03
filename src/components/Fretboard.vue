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
import { instruments, tunings, notesNames } from '../data/music'

import String from './String'

export default {
  name: 'Fretboard',
  components: {
    String,
  },
  props: {
  },
  computed: {
    tuningNotes() {
      const notes = Array.from( tunings['guitar']['standard']);
      return notes;
    },
    nbStrings() {
      return instruments['guitar'].nbStrings;
    },
    strings() {
      return [...Array(this.nbStrings).keys()]
    },
    notesByString() {
      let allStrings = []
      let arrayNotes = Object.values(notesNames)

      this.tuningNotes.forEach(stringNote => {
        let currentString = [];
        const noteIndex = arrayNotes.findIndex(item => item === stringNote);
        const length = arrayNotes.length;

        for (let i = 0; i < length*2+ 1; i++) {
          currentString.push(arrayNotes[(noteIndex + i) % length]);
        }
        allStrings.push(currentString);
      })

      return allStrings.reverse()
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
