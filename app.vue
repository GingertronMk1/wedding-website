<template>
  <div>
    <client-only>
      <AppNav />
      <main class="col-12" style="--bs-bg-opacity: 0.8">
        <NuxtPage />
      </main>
      <AppFooter />
    </client-only>
  </div>
</template>
