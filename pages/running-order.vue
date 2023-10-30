<script setup>
import { computed, ref } from "vue";
const { events } = await queryContent("/running-order").findOne();

const computedEvents = computed(() => {
  if (!Array.isArray(events)) {
    return [];
  }
  return events.map((val) => {
    const todayDate = new Date().toISOString().split("T")[0];
    const computedTime = new Date(`${todayDate}T${val.time}`);
    return {
      ...val,
      computedTime,
    };
  });
});

const currentEvent = ref(null);
const futureEvent = ref(null);
const countdownToNextEvent = ref(0);

setInterval(() => {
  const now = new Date();
  const ce = computedEvents.value;
  if (typeof ce !== "object") {
    return;
  }
  for (const eventKeyStr in ce) {
    const eventKey = parseInt(eventKeyStr);
    const thisEvent = ce[eventKey];
    const nextEvent = ce[eventKey + 1] ?? false;
    if (thisEvent.computedTime <= now) {
      if (!nextEvent) {
        currentEvent.value = thisEvent;
        futureEvent.value = null;
        countdownToNextEvent.value = -1;
        return;
      }
      if (nextEvent.computedTime > now) {
        currentEvent.value = thisEvent;
        futureEvent.value = nextEvent;
        countdownToNextEvent.value = Math.round(
          (nextEvent.computedTime - now) / 1000,
        );
        return;
      }
    }
  }
}, 1000);

const countdownToNextEventObj = computed(() => {
  if (!countdownToNextEvent.value) {
    return null;
  }
  const h = Math.floor(countdownToNextEvent.value / 3600);
  const m = Math.floor((countdownToNextEvent.value - h * 3600) / 60);
  const s = countdownToNextEvent.value - h * 3600 - m * 60;
  return {
    h,
    m,
    s,
  };
});
</script>
<template>
  <h1 v-if="currentEvent">
    Now: {{ currentEvent.name }}, at
    {{ currentEvent.computedTime.toLocaleTimeString() }}
  </h1>
  <h1 v-if="futureEvent">
    Next: {{ futureEvent.name }}, at
    {{ futureEvent.computedTime.toLocaleTimeString() }}
  </h1>

  <h1 v-if="countdownToNextEventObj">
    In
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
  <table v-if="events" class="table">
    <thead>
      <tr>
        <th scope="col">When</th>
        <th scope="col">What</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(thing, index) in computedEvents" :key="index">
        <td v-text="thing.computedTime.toLocaleTimeString()" />
        <td v-text="thing.name" />
      </tr>
    </tbody>
  </table>
</template>
