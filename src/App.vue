<template>
  <div id="app">
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Footer from './components/footer/Footer';
export default {
  name: 'app',
  components: {
    'v-footer': Footer
  }
}
</script>

<style>
#app {
  
}
</style>
