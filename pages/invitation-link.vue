<script setup>
const colClasses = [
  "col-6",
  "d-flex",
  "flex-column",
  "align-items-center",
  "justify-content-start",
];
</script>
<template>
  <h3>You got our invitation! Hooray!</h3>
  <p>
    We can't wait to see you there. In the meantime please could you fill out
    the below form, and if you want to have a look at our registry (genuinely
    though, you coming is everything we could want).
  </p>
  <div class="row flex-grow-1">
    <div :class="colClasses">iFrame goes here for a google form</div>
    <div :class="colClasses">
      <a
        href="https://prezola.com/wishlists/10293123"
        class="btn btn-primary"
        target="_blank"
        >Our Registry</a
      >
    </div>
  </div>
</template>
