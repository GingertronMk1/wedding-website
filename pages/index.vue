<script setup lang="ts">
import { computed } from "vue";

interface RunningOrderItem {
  name: string;
  time: string;
}

interface ComputedRunningOrderItem extends RunningOrderItem {
  dateTime: Date;
  secondsSinceLastEvent: number;
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
  const dateTimeEvents = dayEvents.map((event) => ({
    ...event,
    dateTime: new Date(`${day} ${event.time}`),
  }));

  const computedEvents: Array<ComputedRunningOrderItem> = [];
  dateTimeEvents.forEach(function (event, index) {
    computedEvents.push({
      ...event,
      secondsSinceLastEvent:
        index === 0
          ? 0
          : Math.abs(
              event.dateTime.getTime() -
                dateTimeEvents[index - 1].dateTime.getTime(),
            ),
    });
  });
  return computedEvents;
});
</script>
<template>
  <div id="homepage-hero">
    <img
      id="homepage-hero-image"
      src="/img/homepage/hero.png"
      width="5034"
      height="1972"
    />
    <div id="homepage-hero-overlay">
      <h1>We're getting married!</h1>
    </div>
  </div>
  <div id="itinerary" class="container d-flex flex-column py-3">
    <div
      v-for="item in computedDayEvents"
      :key="JSON.stringify(item)"
      class="itinerary-item"
    >
      <div
        class="itinerary-item__time"
        :style="{
          'padding-top': `${item.secondsSinceLastEvent / 100000}px`,
        }"
        v-text="item.dateTime.toLocaleTimeString()"
      />
      <div
        class="itinerary-item__name"
        :style="{
          'padding-top': `${item.secondsSinceLastEvent / 100000}px`,
        }"
        v-text="item.name"
      />
    </div>
  </div>
</template>
