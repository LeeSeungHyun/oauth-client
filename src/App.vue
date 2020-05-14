<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Logout from './components/Logout.vue'

export default {
  name: 'App',
  components: {
    Login,
    Logout
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
</style>
