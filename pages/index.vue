<script setup lang="ts">
import { computed } from "vue";

interface RunningOrderItem {
  name: string;
  time: string;
}

interface ComputedRunningOrderItem extends RunningOrderItem {
  dateTime: Date;
  minutesSinceLastEvent: number;
}

const day: string = "2024-09-22";

const dayEvents: Array<RunningOrderItem> = [
  {
    name: "Ceremony",
    time: "13:00:00",
  },
  {
    name: "Drinks reception/photos",
    time: "14:30:00",
  },
  {
    name: "Wedding breakfast",
    time: "16:00:00",
  },
  {
    name: "Speeches",
    time: "18:30:00",
  },
  {
    name: "Dancing",
    time: "20:00:00",
  },
  {
    name: "Cake Cutting and Pizza",
    time: "21:00:00",
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
    });
  });
  return computedEvents;
});
</script>
<template>
  <div id="homepage-hero" class="mt-n3">
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
        <p>
          They met doing theatre at the University of Nottingham. Well, that's
          not entirely true - Izzy first saw Jack performing at an improv comedy
          show on Sutton Bonington Campus. She thought he was "one of the
          genuinely funny ones". When they met properly is the subject of much
          debate and conjecture, really it was one of those situations where two
          social circles join together and become one.
        </p>
        <p>
          Subject of less debate and conjecture is how they started going out.
          The Nottingham New Theatre, like many societies at UoN, hosts an
          annual boat party. This was the last university event Jack was ever
          going to go to, so like any good student terrified at the prospect of
          entering the "real world", he got good and trollied. And it was only
          thanks to this trollying that he was able to overcome his innate
          awkwardness and ask Izzy out. Three times. Fortunately for him Izzy
          said yes 3 times, and again a further one time the next morning when
          he made it clear he was serious.
        </p>
        <p>
          It hasn't been the easiest thing in the world - a global pandemic
          starting within 6 months of a relationship forcing you to not just
          move in with one another but basically be around and under one
          another's feet for 18 solid months. But they made it. And now here we
          are.
        </p>
        <p>
          Jack proposed on the 20th of April 2023. He'd ordered the ring from
          Izzy's favourite jeweller on Instagram some months before, and it
          arrived that day. He had (at least he promises) had intentions of
          waiting until the right moment, ideally picking fruit at a farm in
          north Notts. But (and if you know Jack you'll know this is basically a
          personality trait at this point) he couldn't wait. Izzy called him a
          f***ing idiot 3 times when he asked. But again, fortunately for him
          she did also then say yes.
        </p>
      </div>
    </div>
  </section>
  <hr class="m-5" />
  <section id="where-and-when" class="container">
    <h2 class="text-center">Where and When</h2>
    <div class="row align-items-center">
      <div class="col-12 col-md-6 order-0 order-md-0">
        <h4>The Ceremony</h4>

        <p>
          The ceremony will be held at St John The Baptist Church in Beeston at
          1 o'clock on the afternoon of Sunday the 22nd of September 2024. The
          church is well-located for public transport, being 200m from the
          Beeston Centre Tram Stop, and roughly 300m from a car park where you
          can stay for 3 hours for free.
        </p>
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
        <p>
          The reception, wedding breakfast, and evening frivolities will be held
          at Swancar Farm Country House in Trowell. The evening party is
          expected to start at half past 7 on the evening of Sunday the 22nd of
          September 2024.
        </p>
        <p>
          Swancar is markedly less public transport-friendly than St John's, so
          if you are not driving yourself we recommend using a local taxi
          service.
        </p>
      </div>
    </div>
  </section>
  <hr class="m-5" />
  <section id="itinerary" class="container d-flex flex-column py-3">
    <h2 class="text-center">The Running Order</h2>
    <div
      v-for="(item, index) in computedDayEvents"
      :key="JSON.stringify(item)"
      class="itinerary-item"
    >
      <div
        class="itinerary-item__time"
        :style="{
          'padding-top': `${item.minutesSinceLastEvent / 3}px`,
        }"
        v-text="index % 2 ? item.name : ''"
      />
      <div
        class="itinerary-item__name"
        :style="{
          'padding-top': `${item.minutesSinceLastEvent / 3}px`,
        }"
        v-text="index % 2 ? '' : item.name"
      />
    </div>
  </section>
</template>
