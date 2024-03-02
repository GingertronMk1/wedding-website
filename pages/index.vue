<script setup lang="ts">
import { ref, computed } from "vue";
import type { Ref } from "vue";

const col1Width = ref(10);
const otherColWidths = computed(() => (100 - col1Width.value) / 2);

const itinerary = ref([
  {
    what: "Ceremony",
    when: Date.parse("22 Sep 2024 13:00:00 GMT"),
    where: ["Beeston Parish Church", "Beeston", "Nottingham", "NG9 1GA"],
  },
  {
    what: "Reception",
    when: Date.parse("22 Sep 2024 19:00:00 GMT"),
    where: ["Swancar Farm", "Trowell Moor", "Trowell", "Nottingham", "NG9 3PQ"],
  },
]);

interface Link {
  href: string;
  text: string;
  additionalStyles?: string;
  target?: string;
}

const links: Ref<Array<Link>> = ref([
  {
    href: "/events/the-ceremony",
    text: "The Ceremony",
  },
  {
    href: "/events/the-reception",
    text: "The Reception",
  },
  {
    href: "/running-order",
    text: "The Running Order",
  },
  {
    href: "/accommodation",
    text: "Accommodation",
  },
]);
</script>
<template>
  <a
    v-for="(item, index) in links"
    :key="index"
    :href="item.href"
    :target="item.target ?? undefined"
    class="btn text-white w-75 fs-1 mb-3 mx-auto"
    style="background-color: var(--primary)"
    v-text="item.text"
  />
  <div class="card">
    <div class="card-header">The Key Information</div>
    <table class="table mb-0">
      <thead>
        <tr>
          <th :width="`${col1Width}%`" scope="col"></th>
          <th
            v-for="(item, index) in itinerary"
            :key="index"
            :width="`${otherColWidths}%`"
            scope="col"
            v-text="item.what"
          />
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="p-3" scope="row">When</th>
          <td
            v-for="(item, index) in itinerary"
            :key="index"
            v-text="new Date(item.when).toUTCString()"
          />
        </tr>
        <tr>
          <th class="p-3" scope="row">Where</th>
          <td v-for="(item, index) in itinerary" :key="index" class="p-0">
            <ul class="list-group list-group-flush">
              <li
                v-for="(part, partIndex) in item.where"
                :key="partIndex"
                class="list-group-item"
                v-text="part"
              />
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="card-footer">We can't wait to see you there!</div>
  </div>
</template>
