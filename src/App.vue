<template>
  <div id="app">

    <img src="./assets/logo.png">
    <hello></hello>

            <div id="view">
                <transition name="lilnav" mode="out-in">
                    <littlenav v-if="currentView != 'navigation'"></littlenav>
                </transition>
                <transition v-bind:name="checkViewForTransition()" mode="out-in">
                <keep-alive>
                    <component :is="currentView"></component>
                </keep-alive>
                </transition>
            </div>

  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
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
