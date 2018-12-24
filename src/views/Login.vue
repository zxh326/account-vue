<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import login from '@/components/login.vue'

export default {
  name: 'loginpage',
  components: {
    login
  }
}
</script>
