<template>
  <div>
    <client-only>
      <AppNav />
      <main class="col-12" style="--bs-bg-opacity: 0.8">
        <NuxtPage />
      </main>
      <div class="flex-grow-1" />
      <AppFooter />
    </client-only>
  </div>
</template>
