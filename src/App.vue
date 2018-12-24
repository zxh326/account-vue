<template>

  <div id="app">
    <navbar v-if="!$route.meta.noNavBar"/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    navbar: NavBar
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
