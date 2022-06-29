<template>
  <HelloWorld/> 
  <EventDemo/>
  <Life/>
  <p>自定义v-model</p>
  <p>{{ customModelValue }}</p>
  <CustomModel v-model:title='customModelValue'/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import EventDemo from './components/BaseUse/EventDemo'
import Life from './components/BaseUse/Life'
import CustomModel from './components/BaseUse/CustomModel'

export default {
  name: 'App',
  components: {
    HelloWorld,
    EventDemo,
    Life,
    CustomModel
  },
  data() {
    return {
      customModelValue: ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
