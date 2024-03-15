<template>
  <div>
    <client-only>
      <AppNav />
      <img src="/img/hero-banner.png" width="1600" height="400" class="w-100" />
      <main class="col-12 py-3" style="--bs-bg-opacity: 0.8">
        <NuxtPage />
      </main>
      <AppFooter />
    </client-only>
  </div>
</template>
