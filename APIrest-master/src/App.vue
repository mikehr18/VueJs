<template>
  <div id="app">
  
    <cover />
    <consumo />
  </div>
</template>

<script>
import Consumo from './components/Consumo.vue'
import Cover from './components/Cover.vue'


export default {
  name: 'app',
  components: {
    Consumo,
    Cover
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
