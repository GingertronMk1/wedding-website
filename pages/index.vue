<script setup>
import { ref, computed } from "vue";

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
</script>
<template>
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
          <td v-for="(item, index) in itinerary" :key="index">
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
