<template>
  <div>
    <LifeChild :value="num"/>
    <button @click="add">add</button>
  </div>
</template>

<script>
import LifeChild from './LifeChild'

export default {
  data() {
    return {
      num: 1,
    }
  },
  components: {
    LifeChild
  },
  beforeCreate() {
    console.log('father beforeCreate')
  },
  created() {
    console.log('father created')
  },
  beforeMount() {
    console.log('father beforeMount')
  },
  mounted() {
    console.log('father mounted')
  },
  // beforeDestroy() {
  //   console.log('father beforeDestroy')
  // },
  // destroyed() {
  //   console.log('father destroyed')
  // },
  methods: {
    add() {
      this.num++
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
