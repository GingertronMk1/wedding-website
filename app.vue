<template>
  <div>
    <client-only>
      <AppNav />
      <main class="col-12 py-3" style="--bs-bg-opacity: 0.8">
        <NuxtPage />
      </main>
      <AppFooter />
    </client-only>
  </div>
</template>
