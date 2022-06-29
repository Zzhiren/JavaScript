<template>
	<p>ref demo</p>
	<p>nameRef:{{ nameRef }}</p>
	<p>ageRef:{{ ageRef }}</p>
	<p>state.name:{{ state.name }}</p>
	<button @click="changeName">修改nameRef</button>
	<button @click="changeAge">修改ageRef</button>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';

export default defineComponent({
  name: 'Ref',
  setup () {
    const nameRef = ref('Tom')
	  const ageRef = ref(20)

	  const state = reactive({
		  name: nameRef
	  })

    function changeName () {
      nameRef.value = 'Jerry'
	  }

    function changeAge () {
      ageRef.value = 28
    }

	  return {
      nameRef,
		  ageRef,
		  state,
      changeName,
      changeAge
	  }
  }
});
</script>

<style scoped lang="scss">

</style>