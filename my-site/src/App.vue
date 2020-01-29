<template>
  <div id="app" onclick="">
    <Professional/>
    <Portrait/>
    <Personal/>
    <notifications position="center"/>
    <span id="copyright">Copyright © 2020 Sean Gaffney, All Rights Reserved</span>
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
/* Mobile */
@media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
html 
{
  background: url('https://firebasestorage.googleapis.com/v0/b/my-site-e8840.appspot.com/o/background.png?alt=media&token=281c8caa-dff9-483c-a2a9-c3aab131fc47');
  background-color: #252525;
  width: 300px;
  height: 533px;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
}

#app {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: Cambria;
  height: 100%;
  text-align: center;
}

#copyright {
  font-size: 8px;
  color: #CCC;
  bottom: 0;
  left: 0;
  position: absolute;
}
}

/* Tablet */
@media only screen and (min-device-width : 600px) and (max-device-width : 999px) {
html 
{
  background: url('https://firebasestorage.googleapis.com/v0/b/my-site-e8840.appspot.com/o/background.png?alt=media&token=281c8caa-dff9-483c-a2a9-c3aab131fc47');
  width: 600px;
  height: 1066px;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
}

#app {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: Cambria;
  height: 100%;
  text-align: center;
}

#copyright {
  font-size: 8px;
  color: #CCC;
  bottom: 0;
  left: 0;
  position: absolute;
}
}

/* Laptop */
@media only screen and (min-device-width : 1000px) and (max-device-width : 1399px) {
html 
{
  background: url('https://firebasestorage.googleapis.com/v0/b/my-site-e8840.appspot.com/o/background.png?alt=media&token=281c8caa-dff9-483c-a2a9-c3aab131fc47');
  width: 1000px;
  height: 563px;
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

#copyright {
  font-size: 12px;
  color: #CCC;
  bottom: 0;
  left: 0;
  position: absolute;
}
}

/* Small Desktop */
@media only screen and (min-device-width : 1400px) and (max-device-width : 1599px) {
html 
{
  background: url('https://firebasestorage.googleapis.com/v0/b/my-site-e8840.appspot.com/o/background.png?alt=media&token=281c8caa-dff9-483c-a2a9-c3aab131fc47');
  width: 1400px;
  height: 788px;
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

#copyright {
  font-size: 12px;
  color: #CCC;
  bottom: 0;
  left: 0;
  position: absolute;
}
}

/* Large Desktop */
@media only screen and (min-device-width : 1600px) and (max-device-width : 10000px) {
html 
{
  background: url('https://firebasestorage.googleapis.com/v0/b/my-site-e8840.appspot.com/o/background.png?alt=media&token=281c8caa-dff9-483c-a2a9-c3aab131fc47');
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

#copyright {
  font-size: 12px;
  color: #CCC;
  bottom: 0;
  left: 0;
  position: absolute;
}
}

/* Special Cases */
/* @media only screen and (min-device-width : ???) and (max-device-width : ???) {} */
</style>
