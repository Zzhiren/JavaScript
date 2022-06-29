<template>
	<p>toRef demo，{{ ageRef }} - {{ state.name }} - {{ state.age }}</p>
</template>

<script lang="ts">
import { defineComponent, ref, toRef, reactive } from 'vue';

export default defineComponent({
  name: 'ToRef',
  setup () {
    const state = reactive({
	    age: 20,
	    name: 'Tom'
    })

	  const ageRef = toRef(state, 'age')

	  setTimeout(() => {
      ageRef.value = 25
	  }, 1500)

    setTimeout(() => {
      state.age = 30
    }, 3000)

	  return {
      state,
		  ageRef
	  }
  }
});
</script>

<style scoped lang="scss">

</style>