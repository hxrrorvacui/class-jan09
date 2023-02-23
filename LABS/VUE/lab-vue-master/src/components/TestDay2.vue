<script setup>
import { ref, reactive } from "vue";

const firstId = ref("LAURI");
const secondId = ref(true); 
const objectOne = reactive({
  color: "pink",
  fontSize: "40px",
  textDecoration: "underline",
});
const objectTwo = reactive({
  marginLeft: "5rem",
  color: "gray",
});
const booleanOne 
const booleanTwo
</script>

<template>
<h1  :id="firstId">LAURI</h1>
<h2  :id="secondId">Jane's Addiction</h2>
<h3  :style="[objectOne, objectTwo]">I love music</h3>
<h4  :class="[booleanOne && 'red-class', objectTwo && 'border-class']">Matame YA</h4>


</template>

<style scoped>
#Ej1{
  color: aquamarine;
}

</style>
