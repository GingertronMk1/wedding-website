<script setup>
defineProps({
  error: Object,
});

</script>

<template>
  <div>
    <h2>{{ error.statusCode }}</h2>
  </div>
</template>
