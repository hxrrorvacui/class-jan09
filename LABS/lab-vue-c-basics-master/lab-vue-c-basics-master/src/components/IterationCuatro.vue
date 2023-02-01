<template>
  <div>
    <ul>
      <li v-for="bands in bands" :key="bands.title">
        <h2>{{ bands.title }}</h2>
        <p>{{ bands.description }}</p>
        <p>{{ bands.content }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const bands = ref([
      {
        title: "Jane's Addiction",
        description: "Best song",
        content: "Summer Rolls",
      },
      {
        title: "The Doors",
        description: "Best song",
        content: "The End",
      },
      {
        title: "IAMDDB",
        description: "Best song",
        content: "Child's play",
      },
    ]);
    return { bands };
  },
};
</script>
<style scoped>
li {
  list-style: none;
}
</style>
