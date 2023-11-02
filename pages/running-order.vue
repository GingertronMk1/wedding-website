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

type ComputedEvent = Event & { computedDateTime: Date };

const data =
  await queryContent<EventsParsedContent>("/running-order").findOne();

const { dates }: { dates: Array<EventDay> } = data;

console.table(dates);

const computedEvents = computed<Array<ComputedEvent>>(() => {
  const allEvents = [];
  for (const { date, events } of dates) {
    for (const event of events) {
      const computedDateTime = new Date(`${date}T${event.time}`);
      allEvents.push({
        ...event,
        computedDateTime,
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
  const d = Math.floor(countdownToNextEvent.value / 86400);
  const h = Math.floor((countdownToNextEvent.value - d * 86400) / 3600);
  const m = Math.floor(
    (countdownToNextEvent.value - d * 86400 - h * 3600) / 60,
  );
  const s = countdownToNextEvent.value - d * 86400 - h * 3600 - m * 60;
  return {
    d,
    h,
    m,
    s,
  };
});
</script>
<template>
  <h1 v-if="currentEvent">
    Now: {{ currentEvent.name }}, at
    {{ currentEvent.computedDateTime.toLocaleTimeString() }}
  </h1>
  <h1 v-if="futureEvent">
    Next: {{ futureEvent.name }}, at
    {{ futureEvent.computedDateTime.toLocaleTimeString() }}
  </h1>

  <h1 v-if="countdownToNextEventObj">
    In
    <span
      v-if="countdownToNextEventObj.d === 1"
      v-text="`${countdownToNextEventObj.d} day, `"
    />
    <span
      v-else-if="countdownToNextEventObj.d > 1"
      v-text="`${countdownToNextEventObj.d} days, `"
    />
    <span
      v-if="countdownToNextEventObj.h === 1"
      v-text="`${countdownToNextEventObj.h} hour, `"
    />
    <span
      v-else-if="countdownToNextEventObj.h > 1"
      v-text="`${countdownToNextEventObj.h} hours, `"
    />
    <span
      v-if="countdownToNextEventObj.m === 1"
      v-text="`${countdownToNextEventObj.m} minute, `"
    />
    <span
      v-else-if="countdownToNextEventObj.m > 1"
      v-text="`${countdownToNextEventObj.m} minutes, `"
    />
    <span
      v-if="countdownToNextEventObj.s === 1"
      v-text="`${countdownToNextEventObj.s} second`"
    />
    <span
      v-else-if="countdownToNextEventObj.s > 1"
      v-text="`${countdownToNextEventObj.s} seconds`"
    />
  </h1>
  <table v-if="computedEvents" class="table">
    <thead>
      <tr>
        <th scope="col">When</th>
        <th scope="col">What</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(thing, index) in computedEvents" :key="index">
        <td v-text="thing.computedDateTime.toLocaleString()" />
        <td v-text="thing.name" />
      </tr>
    </tbody>
  </table>
</template>
