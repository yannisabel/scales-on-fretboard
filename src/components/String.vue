<template>
  <div :class="$style.string">
    <Fret
      v-for="(note, index) in allNotesWithInfos"
      :key="`${ note.name }-${ index }`"
      :class="index === 0 ? $style['fret--is-open-string'] : null"
      :note="note.name"
      :interval="note.interval !== null ? note.interval.name : null"
      :highlighted="note.interval !== null"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Fret from './Fret'
export default {
  name: 'String',
  components: {
		Fret,
	},
  props: {
    notes: Array,
  },
  computed: {
    ...mapGetters({
      getRootNote: 'getRootNote',
      getAllScales: 'getAllScales',
      getScale: 'getScale',
      getIntervalsNames: 'getIntervalsNames',
    }),
    scaleNotes() {
      const root = this.getRootNote
      const scaleName = this.getScale
      const allScales = this.getAllScales
      const notes = this.notes
      const intervalsNames = this.getIntervalsNames

      let scaleNotes = []

      const scalePosition = allScales[scaleName].positions

      // reorder notes starting with root note
      let copyNotes = [...notes];
      let reorderedNotes = [...copyNotes.splice(notes.indexOf(root)), ...copyNotes];

      // filter notes by scale
      const scale = reorderedNotes.filter((note, index) => scalePosition.includes(index));

      for (let i = 0; i < scale.length; i++) {
        scaleNotes.push({note: scale[i], name: intervalsNames[scalePosition[i]]})
      }

      return scaleNotes
    },
    allNotesWithInfos() {
      let allNotesWithInfos = []

      for (let i = 0; i < this.notes.length; i++) {
        let note = this.notes[i]
        let [currentInterval] = this.scaleNotes.filter(interval => interval.note === note)

        let interval = currentInterval ? currentInterval : null

        allNotesWithInfos.push({name: note, interval})
      }

      return allNotesWithInfos
    }
  },
}
</script>

<style lang="scss" module>
  .string {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    position: relative;
    height: 40px;
    &::before {
      position: absolute;
      height: 2px;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
      content: '';
      background: var(--string-color);
      z-index: -1;
    }
  }
  .fret--is-open-string {
    width: 50px;
    border-right: 8px solid var(--fret-color);
  }
</style>
