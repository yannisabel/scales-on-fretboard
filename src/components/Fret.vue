<template>
  <div :class="$style.fret">
    <div
      :class="[$style.fret__note, $style[intervalClass]]"
      role="tooltip"
      v-tooltip="{
        content: interval,
      }">
      <svg
        viewBox="0 0 140 140"
        preserveAspectRatio="xMinYMin meet"
      >
        <g>
          <circle
            r="50%"
            cx="50%"
            cy="50%"
            class="circle-back"
            :class="{[$style['circle-back--highlighted']]: highlighted}"
          />
          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            dy="0.3em"
          >{{ note }}</text>
        </g>
      </svg> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fret',
  props: {
    note: String,
    highlighted: Boolean,
    interval: String,
  },
  data() {
    return {
      intervalClass: null,
    }
  },
  mounted() {
    this.transformedInterval();
  },
  watch: {
    interval: function () {
      this.transformedInterval();
    },
  },
  methods: {
    transformedInterval() {
      this.intervalClass = this.interval ? this.interval.replace(/\s+/g, '-').toLowerCase() : '';
    }
  },
}
</script>

<style lang="scss" module>
  .fret {
    display: grid;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 90px;
    height: 100%;
    border-right: 4px solid var(--fret-color);

    &__note {
      align-items: center;
      display: flex;
      height: 35px;
      justify-content: center;
      max-width: 100%;
      overflow: auto;
      padding: 0;

      svg {
        height: 100%;
      }

      circle {
        fill: var(--note-bg-color);
      }

      .circle-back--highlighted {
        fill: var(--scale-note-bg-color);
      }

      text { 
        fill: var(--note-text-color);
        font-size: 4em;
      }

      &.root {
        circle {
          fill: var(--root-note-bg-color);
        }
      }
    }
  }
</style>
