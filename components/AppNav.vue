<script setup>
import { ref } from "vue";
const navItems = ref([
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Locations",
    children: [
      {
        text: "Ceremony",
        to: "https://beestonparishchurch.com/",
        newTab: true,
      },
      {
        text: "Reception",
        to: "https://www.swancarfarmcountryhouse.com/",
        newTab: true,
      },
    ],
  },
  {
    text: "Accommodation",
    to: "/accommodation",
  },
  {
    text: "The Cast",
    to: "/wedding-party",
  },
  {
    text: "FAQs",
    to: "faqs",
  },
  {
    text: "Links",
    to: "/invitation-link",
  },
]);
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-light shadow-sm">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/">
        <img
          src="/img/logo.png"
          alt=""
          width="200"
          height="200"
          style="max-height: 40px"
          class="h-100 w-auto"
        />
      </NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <template v-for="(item, index) in navItems" :key="index">
            <li
              v-if="Array.isArray(item.children)"
              :class="item.liClass ?? 'nav-item dropdown'"
            >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                v-text="item.text"
              />
              <ul class="dropdown-menu">
                <li
                  v-for="(subItem, subIndex) in item.children"
                  :key="subIndex"
                >
                  <NuxtLink
                    class="dropdown-item"
                    :to="subItem.to"
                    :target="subItem.newTab ? '_blank' : null"
                  >
                    {{ subItem.text }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li v-else :class="item.liClass ?? 'nav-item'">
              <NuxtLink
                :to="item.to"
                :class="item.linkClass ?? 'nav-link'"
                active-class="active"
                :target="item.newTab ? '_blank' : null"
              >
                {{ item.text }}
              </NuxtLink>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>
