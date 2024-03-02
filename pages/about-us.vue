<script setup lang="ts">
interface Person {
  name: string;
  bio: string;
}

const us: Array<Person> = [
  {
    name: "Isabel Sarah Josephine de Bono",
    bio: "Is giving up at least one of the words in her name",
  },
  {
    name: "Jack Ellis",
    bio: "Yes that is the whole thing",
  },
];
</script>
<template>
  <template v-for="(person, index) in us" :key="index">
    <h2 v-text="person.name" />
    <p v-text="person.bio" />
  </template>
</template>
