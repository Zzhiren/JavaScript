<template>
	<p>watch: {{ state.name }}, {{ state.age }}</p>
</template>

<script lang="ts">
import { ref, reactive, watch, watchEffect } from 'vue';

export default {
  name: 'Watch',
  setup () {
    const sex = ref('男')
    const state = reactive({
	    name: 'Tom',
	    age: 28
    })

	  watch(
      () => state.name,
      () => {
        console.log('state.name', state.name)
      }
	  )

	  watch(
      sex,
      () => {
        console.log('sex', sex.value)
      },
      {
        immediate: true
      }
	  )

	  watch(
      state,
      () => {
        console.log('state', state)
      }
	  )

	  watchEffect(() => {
      console.log('state.age', state.age)
	  })


	  setTimeout(() => {
      state.name = 'Jerry'
		  sex.value = '女'
	  }, 1500)

    setTimeout(() => {
      state.age = 33
    }, 3000)

	  return {
      state
	  }
  }
};
</script>
