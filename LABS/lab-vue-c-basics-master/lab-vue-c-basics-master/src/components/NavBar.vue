<template>
  <header>
    <nav>
      <!-- logo -->
      <a href=""
        ><img :src="logoOfSite.imgRoute" :alt="logoOfSite.imgAltText"
      /></a>
      <!-- navigation -->
      <ul>
        <li><a href="" v-text="navigation[0].navText"></a></li>
        <li>
          <a
            :target="navigation[1].navLinkOpenNewTab"
            :href="navigation[1].navRoute"
            v-text="navigation[1].navText"
          ></a>
        </li>
      </ul>
      <!-- boton de login -->
      <button v-text="buttonText"></button>
    </nav>
  </header>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";
const logoOfSite = reactive({
  imgRoute:
    "https://i.pinimg.com/originals/17/bc/4e/17bc4ed73f461f203cdfa259a2417056.jpg",
  imgAltText: "A cool logo showcasing the Google Company",
});
const navigation = reactive([
  {
    navRoute: "/",
    navText: "Home",
  },
  {
    navRoute: "https://next.ironhack.com/fr/en/career",
    navText: "Contact",
    navLinkOpenNewTab: "_blank",
  },
]);
const buttonText = ref("Click Me");
</script>
<!-- CSS HERE -->
<style scoped>
a,
a img {
  width: 20%;
}
nav {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: red;
}
nav ul {
  list-style-type: none;
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 0 3rem;
}
button {
  border-radius: 15px 15px 15px 15px;

}
</style>
