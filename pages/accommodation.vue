<script setup lang="ts">
interface Option {
  name: string;
  description: string;
  url: string;
}

/**
 * Delta by Marriott Nottingham Belfry
 * 0115 973 9393
 * thenottinghambelfry.co.uk
 *
 * Travelodge Wollaton Park
 * 0871 559 1835
 * Travelodge.co.uk
 *
 * Double Tree by Hilton
 * Nottingham Gateway
 * 0115 979 4949
 *
 * Premier Inn - The Phoenix Centre
 * 0333 321 1378
 * Millennium Way West, NG8 6AS
 *
 * Holiday Inn Derby/Nottingham
 * 0871 942 9062
 * hiderbynottinghamhotel.co.uk
 */

const options: Array<Option> = [
  {
    name: "Premier Inn Nottingham West",
    description:
      "There are a number of Premier Inns in and around Nottingham, but this is the one Jack's parents stay at when they come to visit. Situated close to the tram line it makes it very simple to get into the city centre and on to St John's, and it has free parking. It is however quite a distance from Swancar.",
    url: "https://www.premierinn.com/gb/en/hotels/england/nottinghamshire/nottingham/nottingham-west.html",
  },
  {
    name: "The Star Inn, Beeston",
    description: "Nice pub",
    url: "https://www.starbeeston.co.uk/pub-accommodation",
  },
];
</script>
<template>
  <h1>Hotels and such nearby</h1>

  <p>
    We recognise that it's a long trip for many of you so we wanted to make it
    as straightforward as possible to get somewhere to spend the night.
  </p>

  <ul>
    <li v-for="(item, index) in options" :key="index" class="card mb-3">
      <div class="card-header" v-text="item.name" />
      <div class="card-body" v-text="item.description" />
      <div class="card-footer">
        <a :href="item.url" class="btn btn-primary" target="_blank">Link</a>
      </div>
    </li>
  </ul>
</template>
