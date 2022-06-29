<template>
	<p ref="elemRef">我是一行文字</p>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'RefTemplate',
  setup () {
    const elemRef = ref(null)
	  onMounted(() => [
      console.log('elemRef', elemRef.value, elemRef.value.innerHTML)
	  ])
	  return {
      elemRef
	  }
  }
});
</script>

<style scoped lang="scss">

</style>