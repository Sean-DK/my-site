<template>
  <div id="app">
    <Professional/>
    <Portrait/>
    <Personal/>
  </div>
</template>

<script>
import Professional from './components/Professional.vue'
import Portrait from './components/Portrait.vue'
import Personal from './components/Personal.vue'

export default {
  name: 'app',
  components: {
    Professional,
    Portrait,
    Personal
  }
}
</script>

<style>
html 
{
  background: url('./assets/background.png');
  border: red solid 1px;
  width: 1600px;
  height: 900px;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
}

body
{
  margin: 0;
  overflow: hidden;
  height: 100%;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

#app {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: Cambria;
  height: 100%;
  text-align: center;
}
</style>
