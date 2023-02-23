<!-- HTML HERE -->
<template>
  <div :class="{ red: isRed }">
    <button @click="toggleRed">Toggle Color</button>
  </div>
</template>
<!-- JS HERE -->
<script setup>
import { ref } from "vue";
const isRed = ref(false);
function toggleRed() {
  isRed.value = !isRed.value;
}
</script>
<!-- CSS HERE -->
<style scoped>
.red {
  background-color: black;
}
</style>