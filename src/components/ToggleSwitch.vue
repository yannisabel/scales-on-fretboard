<template>
  <label :for="id + '_button'" :class="{'active': isActive}" class="toggle__button">
    <span v-if="isActive" class="toggle__label">{{ enableText }}</span>
    <span v-if="! isActive" class="toggle__label">{{ disabledText }}</span>

    <input type="checkbox" :disabled="disabled" :id="id + '_button'" v-model="checkedValue">
    <span class="toggle__switch"></span>
  </label>
</template>

<script>
export default {
  name: 'Switch',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    labelEnableText: {
      type: String,
      default: 'On'
    },
    
    labelDisableText: {
      type: String,
      default: 'Off'
    },
    id: {
      type: String,
      default: 'primary'
    }, 
    defaultState: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentState: this.defaultState
    }
  },
  watch: {
    defaultState: function defaultState() {
      this.currentState = Boolean(this.defaultState)
    }
  },
  computed: {
    // currentState() {
    //     return this.defaultState;
    // },
    isActive() {
      return this.currentState;
    },
    enableText() {
      return this.labelEnableText;
    },
    disabledText() {
      return this.labelDisableText;
    },
    checkedValue: {
      get() {
        return this.currentState;
      },
      set(newValue) {
        this.currentState = newValue;
        this.$emit('change', newValue);
      }
    }
  }
}
</script>

<style scoped>
</style>
