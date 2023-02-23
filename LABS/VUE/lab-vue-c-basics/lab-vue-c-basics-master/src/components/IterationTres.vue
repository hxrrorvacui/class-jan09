<template>
  <div>
    <h1 v-if="showText">...lost in a Roman wilderness of pain</h1>
    <h1 v-show="showText">and all the children are insane...</h1>
  </div>
</template>

<script setup>
import { ref } from "vue";
const showText = ref(true);
</script>

<style scoped></style>
