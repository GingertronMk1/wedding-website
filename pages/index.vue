<script setup lang="ts">
import { computed } from "vue";

interface RunningOrderItem {
  name: string;
  time: string;
}

interface ComputedRunningOrderItem extends RunningOrderItem {
  dateTime: Date;
  minutesSinceLastEvent: number;
  hours: string;
  minutes: string;
}

const day: string = "2024-09-22";

const dayEvents: Array<RunningOrderItem> = [
  {
    name: "Ceremony",
    time: "13:00:00",
  },
  {
    name: "Drinks\xa0Reception",
    time: "14:30:00",
  },
  {
    name: "Wedding Breakfast",
    time: "16:00:00",
  },
  {
    name: "Speeches",
    time: "18:30:00",
  },
  {
    name: "Cake\xa0Cutting",
    time: "20:00:00",
  },
  {
    name: "First\xa0Dance",
    time: "20:15:00",
  },
  {
    name: "Pizzas",
    time: "21:15:00",
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
      minutesSinceLastEvent:
        index === 0
          ? 0
          : Math.abs(
              event.dateTime.getTime() -
                dateTimeEvents[index - 1].dateTime.getTime(),
            ) /
            (1000 * 60),
      hours: event.dateTime.getHours().toString(10).padStart(2, "0"),
      minutes: event.dateTime.getMinutes().toString(10).padStart(2, "0"),
    });
  });
  return computedEvents;
});
</script>
<template>
  <div id="homepage-hero" class="mt-n3">
    <img
      id="homepage-hero-image"
      src="/img/homepage/hero.jpg"
      width="5034"
      height="1972"
    />
    <div id="homepage-hero-overlay">
      <h1>We're getting married!</h1>
    </div>
  </div>
  <section id="about-us" class="container">
    <h2 class="text-center">The Story So Far...</h2>
    <div class="row align-items-center">
      <img
        src="/img/homepage/about-us-1.jpg"
        class="col-12 col-md-6 h-auto"
        width="4272"
        height="5981"
        alt=""
      />
      <div class="col-12 col-md-6">
        <ContentDoc path="/about-us" />
      </div>
    </div>
  </section>
  <hr class="m-5" />
  <section id="where-and-when" class="container">
    <h2 class="text-center">Where and When</h2>
    <div class="row align-items-center">
      <div class="col-12 col-md-6 order-0 order-md-0">
        <h4>The Ceremony</h4>
        <ContentDoc path="/ceremony" />
      </div>
      <img
        src="/img/Church PNG.png"
        alt=""
        width="2484"
        height="1782"
        class="col-12 col-md-6 h-auto order-1 order-md-1"
      />
    </div>
    <div class="row align-items-center">
      <img
        src="/img/Venue PNG.png"
        width="2474"
        height="1253"
        class="col-12 col-md-6 h-auto order-md-0 order-1"
      />

      <div class="col-12 col-md-6 order-md-1 order-0">
        <h4>The Reception</h4>
        <ContentDoc path="/reception" />
      </div>
    </div>
  </section>
  <hr class="m-5" />
  <section id="itinerary" class="container d-flex flex-column py-3">
    <h2 class="text-center" v-text="`The Running Order`" />
    <div
      v-for="item in computedDayEvents"
      :key="JSON.stringify(item)"
      class="itinerary-item"
    >
      <div
        class="itinerary-item__time"
        :style="{
          'padding-top': `${item.minutesSinceLastEvent / 3}px`,
        }"
        v-text="`${item.hours}:${item.minutes}`"
      />
      <div
        class="itinerary-item__name"
        :style="{
          'padding-top': `${item.minutesSinceLastEvent / 3}px`,
        }"
        v-text="item.name"
      />
    </div>
  </section>
</template>
