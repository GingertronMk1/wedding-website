<script setup>
import {ref, computed} from 'vue';

const col_1_width = ref(10);
const other_col_widths = computed(() => (100 - col_1_width.value) / 2);

const itinerary = ref([
  {
    what: 'Ceremony',
    when: Date.parse('22 Sep 2024 13:00:00 GMT'),
    where: [
            'Beeston Parish Church',
            'Beeston',
            'Nottingham',
            'NG9 1GA',
    ]
  },
  {
    what: 'Reception',
    when: Date.parse('22 Sep 2024 19:00:00 GMT'),
    where: [
            'Swancar Farm',
            'Trowell Moor',
            'Trowell',
            'Nottingham',
            'NG9 3PQ',
    ]
  }
])
</script>
<template>
<div class="card">
  <div class="card-header">The Key Information</div>
    <table class="table">
      <thead>
        <tr>
        <th :width="`${col_1_width}%`" scope="col"></th>
        <th
          v-for="(item, index) in itinerary"
          :key="index"
          :width="`${other_col_widths}%`" 
          scope="col"
          v-text="item.what" 
          />
        </tr>
      </thead>
      <tr>
        <th scope="row">When</th>
        <td
          v-for="(item, index) in itinerary"
          :key="index"
          v-text="(new Date(item.when)).toUTCString()"
        />
      </tr>
      <tr>
        <th scope="row">Where</th>
        <td
          v-for="(item, index) in itinerary"
          :key="index"
        >
        <ul class="list-group list-group-flush">
          <li
            class="list-group-item"
            v-for="(part, partIndex) in item.where"
            :key="partIndex"
            v-text="part"
          />
        </ul>

        </td>
      </tr>
    </table>
</div>
</template>
