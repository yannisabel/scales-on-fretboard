<template>
  <div :class="$style.string" >
    <Fret
      v-for="(note, index) in notes"
      :key="`${ note }-${ index }`"
      :class="index === 0 ? $style['fret--is-open-string'] : null"
      :note="note"/>
  </div>
</template>

<script>
import Fret from './Fret'
export default {
  name: 'String',
  components: {
		Fret,
	},
  props: {
    notes: Array,
    note: String
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
      height: 4px;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
      content: '';
      background: #000;
      z-index: -1;
    }
  }
  .fret--is-open-string {
    width: 50px;
    border-right: 6px solid black;
  }
</style>
