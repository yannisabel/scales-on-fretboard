<template>
  <div id="app">
    <Fretboard />
  </div>
</template>

<script>
import Fretboard from './components/Fretboard'

export default {
  name: 'App',
  components: {
    Fretboard,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
