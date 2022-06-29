<template>
	<p>toRefs demo，{{ age }} - {{ name }}</p>
</template>

<script lang="ts">
import { reactive, ref, toRef, toRefs } from 'vue';

export default {
  name: 'ToRefs',
  setup () {
    const state = reactive({
      age: 20,
      name: 'Tom'
    })

    const stateAsToRefs = toRefs(state)

    setTimeout(() => {
	    state.age = 30
      stateAsToRefs.name.value = 'Jerry'
	  },1500)


	  return stateAsToRefs
  }
};
</script>

<style scoped lang="scss">

</style>