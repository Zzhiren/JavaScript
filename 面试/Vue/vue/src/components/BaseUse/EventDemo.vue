<template>
  <div>
    <p>{{ num }}</p>
    <button @click='increment1'>+1</button>
    <button @click='increment2(2, $event)'>+2</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
    }
  },
  methods: {
    increment1(event) {
      // 1. event事件是原生事件
      // 2. 事件被挂在到当前元素
      console.log('increment1:event', event)
      console.log('increment1:event.target', event.target)
      console.log('increment1:event.currentTarget', event.currentTarget)
      this.num++
    },

    increment2(val, event) {
      console.log('increment2:val', val)
      console.log('increment2:event', event)
      console.log('increment1:event.target', event.target)
      console.log('increment1:event.currentTarget', event.currentTarget)
      this.num = this.num + val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
