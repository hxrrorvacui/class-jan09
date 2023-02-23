<!-- Computed properties 1 -->

<!-- Creamos un <h1>. Este debe leer una variable computada myName que, a su vez, lea dos variable reactivas name y lastName. Les daréis un valor default a cada una con vuestro nombre y vuestro apellido. Debajo del h1 creamos un pequeño form con dos inputs, uno que sobreescriba name y el otro lastName. Si todo está bien vinculado, cuando modifiquéis el input el h1 debería modificarse a la vez, incluso antes de hacer submit. -->

<script setup>
import { ref, computed } from "vue";

//1
const name = ref("Laura");
const lastName = ref("Anguita");

const myName = computed(() => {
  return `${name.value} ${lastName.value}`;
});
</script>

<template>
  <div>
    <h1>Exercises 1</h1>
    <h1>{{ myName }}</h1>
    <form action="">
      <input type="text" v-model="name" />
      <input type="text" v-model="lastName" />
    </form>
  </div>
</template>

<style scoped></style>
