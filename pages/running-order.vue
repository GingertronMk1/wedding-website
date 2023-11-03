<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { computed, ref } from "vue";

type Event = {
  name: string;
  time: string;
};

type EventDay = {
  date: string;
  events: Array<Event>;
};

interface EventsParsedContent extends ParsedContent {
  dates: Array<EventDay>;
}

type ComputedEvent = Event & { computedDateTime: Date; id: number };

const data =
  await queryContent<EventsParsedContent>("/running-order").findOne();

const { dates }: { dates: Array<EventDay> } = data;

console.table(dates);

const computedEvents = computed<Array<ComputedEvent>>(() => {
  const allEvents = [];
  let i = 0;
  for (const { date, events } of dates) {
    for (const event of events) {
      const computedDateTime = new Date(`${date}T${event.time}`);
      allEvents.push({
        ...event,
        computedDateTime,
        id: i++,
      });
    }
  }
  return allEvents;
});

const currentEvent = ref<null | ComputedEvent>(null);
const futureEvent = ref<null | ComputedEvent>(null);
const countdownToNextEvent = ref<number>(0);

setInterval(() => {
  const now = new Date();
  const ce = computedEvents.value;
  if (
    ce.every(({ computedDateTime }) => computedDateTime.getTime() > Date.now())
  ) {
    const nextEvent = ce[0];
    futureEvent.value = nextEvent;
    countdownToNextEvent.value = Math.round(
      (nextEvent.computedDateTime.getTime() - now.getTime()) / 1000,
    );
    return;
  }
  for (const eventKeyStr in ce) {
    const eventKey = parseInt(eventKeyStr);
    const thisEvent = ce[eventKey];
    const nextEvent = ce[eventKey + 1] ?? false;
    if (thisEvent.computedDateTime <= now) {
      currentEvent.value = thisEvent;
      if (!nextEvent) {
        futureEvent.value = null;
        countdownToNextEvent.value = -1;
      } else if (nextEvent.computedDateTime > now) {
        currentEvent.value = thisEvent;
        futureEvent.value = nextEvent;
        countdownToNextEvent.value = Math.round(
          (nextEvent.computedDateTime.getTime() - now.getTime()) / 1000,
        );
      }
    }
  }
}, 1000);

const countdownToNextEventObj = computed(() => {
  if (!countdownToNextEvent.value) {
    return null;
  }
  const d: number = Math.floor(countdownToNextEvent.value / 86400);
  const h: number = Math.floor((countdownToNextEvent.value - d * 86400) / 3600);
  const m: number = Math.floor(
    (countdownToNextEvent.value - d * 86400 - h * 3600) / 60,
  );
  const s: number = countdownToNextEvent.value - d * 86400 - h * 3600 - m * 60;
  const strArr: Array<string> = [];
  const timeObj = {
    day: d,
    hour: h,
    minute: m,
    second: s,
  };
  Object.entries(timeObj).forEach(([key, value]) => {
    if (value === 1) {
      strArr.push(`${value} ${key}`);
    } else if (value > 0) {
      strArr.push(`${value} ${key}s`);
    }
  });
  return strArr.join(", ");
});

const futureEventStr = computed<string | boolean>(() => {
  const futureEventVal = futureEvent.value;
  if (!futureEventVal) {
    return false;
  }
  const futureEventDate = futureEventVal.computedDateTime;
  const dateStr =
    futureEventDate.toDateString() === new Date().toDateString()
      ? `at ${futureEventDate.toLocaleTimeString()}`
      : `on ${futureEventDate.toDateString()}, at ${futureEventDate.toLocaleTimeString()}`;

  return `Next: ${futureEventVal.name}, ${dateStr}`;
});
</script>
<template>
  <h1 v-if="currentEvent" v-text="`Now: ${currentEvent.name}`" />
  <h1 v-if="futureEventStr" v-text="futureEventStr" />
  <h1 v-if="countdownToNextEventObj" v-text="`In ${countdownToNextEventObj}`" />
  <table v-if="computedEvents" class="table">
    <thead>
      <tr>
        <th scope="col">Happening</th>
        <th scope="col">Date</th>
        <th scope="col">Time</th>
        <th scope="col" class="w-50">What</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(thing, index) in computedEvents" :key="index">
        <td
          v-text="
            thing.id === currentEvent?.id
              ? 'Now'
              : thing.id === futureEvent?.id
              ? 'Next'
              : ''
          "
        />
        <td v-text="thing.computedDateTime.toLocaleDateString()" />
        <td v-text="thing.computedDateTime.toLocaleTimeString()" />
        <td v-text="thing.name" />
      </tr>
    </tbody>
  </table>
</template>
