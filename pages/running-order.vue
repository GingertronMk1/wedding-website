<script setup lang="ts">
import { computed } from "vue";

interface RunningOrderItem {
  name: string;
  time: string;
}

interface ComputedRunningOrderItem extends RunningOrderItem {
  dateTime: Date;
}

const day: string = "2024-09-22";

const dayEvents: Array<RunningOrderItem> = [
  {
    name: "Ceremony",
    time: "13:00:00",
  },
  {
    name: "Confetti photos",
    time: "14:00:00",
  },
  {
    name: "Drinks reception/photos",
    time: "14:30:00",
  },
  {
    name: "Seating for wedding breakfast",
    time: "16:00:00",
  },
  {
    name: "Izzy's Parents' Speech",
    time: "16:15:00",
  },
  {
    name: "Wedding Breakfast",
    time: "16:30:00",
  },
  {
    name: "Coffee and Cake",
    time: "18:30:00",
  },
  {
    name: "Speeches 2: Glass Barn Boogaloo",
    time: "18:45:00",
  },
  {
    name: "Cocktails",
    time: "19:30:00",
  },
  {
    name: "Dancing",
    time: "20:00:00",
  },
  {
    name: "Cake cutting and evening food",
    time: "21:00:00",
  },
  {
    name: "Last Orders",
    time: "23:30:00",
  },
];

const computedDayEvents = computed<Array<ComputedRunningOrderItem>>(() => {
  return dayEvents.map((event) => ({
    ...event,
    dateTime: new Date(`${day} ${event.time}`),
  }));
});
</script>
<template>
  <h1>The Running Order</h1>
  <div class="container">
    <div
      v-for="(event, index) in computedDayEvents"
      :key="index"
      class="row"
      :style="{ 'border-left': '5px solid var(--text-primary)' }"
    >
      <div class="col-4" v-text="event.dateTime.toLocaleTimeString()" />
      <div class="col-8" v-text="event.name" />
    </div>
  </div>
</template>
