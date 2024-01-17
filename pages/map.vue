<script setup>
import { ref } from "vue";
const { public: publicConfig } = useRuntimeConfig();
const params = {
  key: publicConfig.mapsApiKey,
  // 'q': 'Beeston+Methodist+Church',
  center: "52.9232775,-1.2168948",
  zoom: 18,
};
const paramsObj = new URLSearchParams(params);
const mapMode = "view";
const url = ref(
  `https://www.google.com/maps/embed/v1/${mapMode}?${paramsObj.toString()}`,
);
</script>
<template>
  <iframe
    width="600"
    height="450"
    style="border: 0"
    loading="lazy"
    allowfullscreen
    referrerpolicy="no-referrer-when-downgrade"
    :src="url"
  />
</template>
