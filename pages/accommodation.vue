<script setup lang="ts">
interface Option {
  name: string;
  description?: string;
  url: string;
}
const options: Array<Option> = [
  {
    name: "Delta by Marriott Nottingham Belfry",
    description:
      "A four star hotel a mile from the M1, and close to Central Nottingham if you plan on taking in what Izzy and Jack's adoptive home city has to offer.",
    url: "https://www.thenottinghambelfry.co.uk",
  },
  {
    name: "Travelodge Wollaton Park",
    description:
      "Ideally located almost exactly between the church and the reception venue, you can't go too far wrong with a Travelodge that's basically attached to a steakhouse",
    url: "https://www.travelodge.co.uk/hotels/474/Nottingham-Wollaton-Park-hotel",
  },
  {
    name: "Double Tree by Hilton",
    description:
      "Very handy for the trams, and apparently you get a free warm cookie on checking in!",
    url: "https://www.hilton.com/en/hotels/emanudi-doubletree-nottingham-gateway/",
  },
  {
    name: "Holiday Inn Derby/Nottingham",
    description:
      "Just 200 yards from Junction 25 of the M1, this is an inexpensive and convenient option",
    url: "https://www.hiderbynottinghamhotel.co.uk",
  },
  {
    name: "Premier Inn Nottingham West",
    description:
      "There are a number of Premier Inns in and around Nottingham, but this is the one Jack's parents stay at when they come to visit. Situated close to the tram line it makes it very simple to get into the city centre and on to St John's, and it has free parking. It is however quite a distance from Swancar.",
    url: "https://www.premierinn.com/gb/en/hotels/england/nottinghamshire/nottingham/nottingham-west.html",
  },
  {
    name: "The Star Inn, Beeston",
    description:
      "A delightful pub in the heart of Beeston, meaning it's a short walk to the church and a great breakfast in the morning. Jack's parents have been known to stay here as well.",
    url: "https://www.starbeeston.co.uk/pub-accommodation",
  },
];
</script>
<template>
  <div class="container py-3">
    <h1>Hotels and such nearby</h1>

    <p>
      We recognise that it's a long trip for many of you so we wanted to make it
      as straightforward as possible to get somewhere to spend the night.
    </p>

    <section v-for="(item, index) in options" :key="index" class="mb-5">
      <h3 v-text="item.name" />
      <p v-text="item.description" />
      <a :href="item.url" class="btn btn-primary me-auto" target="_blank"
        >Link</a
      >
    </section>
  </div>
</template>
