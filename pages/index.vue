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
    name: "Drinks\xa0Reception and\xa0Photos",
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
    name: "Dancing",
    time: "20:00:00",
  },
  {
    name: "Cake\xa0Cutting and\xa0Pizza",
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

const theStorySoFar = `
Izzy and Jack met doing student theatre at the University of Nottingham, and the rest is history!
Well, sort of...

Izzy first saw Jack doing an improv comedy show at Sutton Bonington (a "satellite campus" and Izzy's home).
Jack did not see Izzy, and mostly remembers being paid in beer for the gig.
Luckily he made a good impression - he was, quote, "one of the actually funny ones".
When they met properly is the subject of much debate and conjecture, though it definitely involved some kind of 80s music and a now-condemned student theatre.

Subject of less debate and conjecture is how they started going out.
The Nottingham New Theatre hosts an annual, end of year boat party.
This was the last university event Jack was ever going to go to, so like any good student terrified at the prospect of entering the "real world", he got well and truly trollied.
And it was only thanks to this trollying that he was able to overcome his innate awkwardness and ask Izzy out.
Three times.
Fortunately for him, Izzy said yes every time, and again a further one time the next morning when he made it clear he was, in fact, serious.

Skip forward six months and the world is on the brink of a global pandemic.
After 6 months of a relationship, having such a thing forcing you to not just move in with one another but basically be around and under one another's feet for eighteen solid months might be a problem.
But they made it.
And now here we are.

Jack proposed on the 20th of April 2023.
He had ordered the ring from Izzy's favourite jeweller on Instagram some months before, and fully intended (at least he promises) to wait until the right moment - maybe at a Pick Your Own Fruit Farm in North Notts! We will never know for sure what that moment would have looked like because in less than six hours of the ring arriving he was down on one knee.
Izzy proceeded to call him a f***ing idiot three times.
But fortunately for him she did then also say yes.
`;
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
        <p v-for="p in theStorySoFar.split('\n\n')" :key="p" v-text="p" />
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
          1 o'clock on the afternoon of Sunday the 22nd of September 2024 -
          please arrive at 12:30 to be greeted and seated.The church is
          well-located for public transport, being 200m from the Beeston Centre
          Tram Stop, and roughly 300m from a Tesco in whose car park you can
          stay for 3 hours for free (Jack's choice). There is also a slightly
          closer car park (Beeston Square car park specifically), but you do
          have to pay for it (Izzy's choice).
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
          For day guests, we then go to Swancar Farm Country House, where the
          drinks reception begins at 2:30pm, followed by the wedding breakfast.
          The evening party is expected to start at 7:30pm - evening guests get
          there then.
        </p>
        <p>
          Swancar is markedly less public transport-friendly than St John's, so
          if you are not driving yourself we recommend using a local taxi
          service. There is a fair bit of parking available at Swancar if you
          are driving yourself.
        </p>
      </div>
    </div>
  </section>
  <hr class="m-5" />
  <section id="itinerary" class="container d-flex flex-column py-3">
    <h2 class="text-center">
      The Running Order <small class="h6">(Times TBC)</small>
    </h2>
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
