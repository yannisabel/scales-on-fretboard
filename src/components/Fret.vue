<template>
  <div :class="$style.fret">
    <div :class="$style.fret__note">
      <svg viewBox="0 0 140 140" preserveAspectRatio="xMinYMin meet">
        <g>
          <circle r="50%" cx="50%" cy="50%" class="circle-back" />
          <text x="50%" y="50%" text-anchor="middle" dy="0.3em">{{ note }}</text>
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
  },
}
</script>

<style lang="scss" module>
  .fret {
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100%;
    border-right: 4px solid black;

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
        fill: #264B68;
      }

      text { 
        fill: #fff;
        font-size: 4em;
      }
    }
  }
</style>
