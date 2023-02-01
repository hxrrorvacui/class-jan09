<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.title">
        <h2>{{ post.title }}</h2>
        <p>{{ post.description }}</p>
        <p>{{ post.content }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const posts = ref([
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
    return { posts };
  },
};
</script>
<style scoped>
li {
  list-style: none;
}
</style>
