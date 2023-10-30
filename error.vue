<script setup>
defineProps({
  error: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div>
    <h2>{{ error.statusCode }}</h2>
  </div>
</template>
