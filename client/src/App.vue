<template>
  <div id="app">
    <navbar v-on:toggleSidebar="toggleSidebar"/>
    <sidebar v-show="showSidebar"/>
    <img src="./assets/logo.png">
    <router-view/>
    <bottombar/>
  </div>
</template>

<script>
import navbar from './components/Navbar';
import sidebar from './components/Sidebar';
import bottombar from './components/Bottombar';

export default {
  name: 'app',
  components: {
    navbar,
    sidebar,
    bottombar,
  },
  data() {
    return {
      showSidebar: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
  },
};
</script>

<style>
body{
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
