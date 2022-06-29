<template>

</template>

<script>
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
	onBeforeUnmount,
	onUnmounted
} from 'vue';

export default defineComponent({
  name: 'LifeCycles',
  setup(props) {
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
  },
  beforeCreate () {
    console.log('beforeCreate')
  },

  created () {
    console.log('created')
  },

  beforeMount () {
    console.log('beforeMount')
  },

  mounted () {
    console.log('mounted')
  },

  beforeUpdate () {
    console.log('beforeUpdate')
  },

  updated () {
    console.log('updated')
  },

  beforeUnmount () {
    console.log('beforeUnmount')
  },

  unmounted () {
    console.log('unmounted')
  },
});
</script>

<style scoped lang="scss">

</style>