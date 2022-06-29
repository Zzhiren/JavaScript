<template>
  <div>
    {{ value }}
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      num: 1,
    }
  },
  beforeCreate() {
    console.log('child beforeCreate')
  },
  created() {
    console.log('child created')
  },
  beforeMount() {
    console.log('child beforeMount')
  },
  mounted() {
    console.log('child mounted')
  },
  // beforeDestroy() {
  //   console.log('child beforeDestroy')
  // },
  // destroyed() {
  //   console.log('child destroyed')
  // },
  methods: {

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
