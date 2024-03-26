<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <DataFlask/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import DataFlask from "@/components/DataFlask.vue";

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    DataFlask
  }
}
</script>
