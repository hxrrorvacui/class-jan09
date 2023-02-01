<template>
  <!-- ex02 - part 001 -->
  <div>
    <p>Resultado {{ 2 + 2 }}</p>
    <p>{{ 2 + 2 }}</p>
  </div>
  <hr />
  <!-- ex02 - part 002 -->
  <div>
    <!-- funcion con keyword return + {} -->
    <h1>{{ stringChainOne() }}</h1>
    <!-- funcion sin keyword return + {} -->
    <h1>{{ stringChainTwo() }}</h1>
    <!-- funcion que contiene una variable reactive con el metodo ref() dentro del script que define un string que contiene un texto -->
    <h1>{{ stringChainThree() }}</h1>
  </div>
</template>
<!-- JS HERE -->
<script setup>
import { ref } from "vue";
// ex02 - part 002
const stringChainOne = () => {
  return "Did you know I'm mad?";
};
const stringChainTwo = () => "DANGER";
const stringChainThree = () => {
  const myCoolString = ref("Please love while I'm here.");
  return myCoolString.value;
};
</script>
<!-- CSS HERE -->
<style scoped></style>
