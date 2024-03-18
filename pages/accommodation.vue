<script setup lang="ts">
interface Option {
  name: string;
  description?: string;
  url: string;
  mapUrl?: string;
  distanceToChurch: number;
  distanceToSwancar: number;
}
const options: Array<Option> = [
  {
    name: "Delta by Marriott Nottingham Belfry",
    description:
      "A four star hotel a mile from the M1, and close to Central Nottingham if you plan on taking in what Izzy and Jack's adoptive home city has to offer.",
    url: "https://www.thenottinghambelfry.co.uk",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2402.1564060387423!2d-1.2383456228819782!3d52.98158850195246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879ea45eb8cf975%3A0x73ad946f9869662b!2sDelta%20Hotels%20by%20Marriott%20Nottingham%20Belfry!5e0!3m2!1sen!2suk!4v1710784500915!5m2!1sen!2suk",
    distanceToChurch: 5.4,
    distanceToSwancar: 3.1,
  },
  {
    name: "Travelodge Wollaton Park",
    description:
      "Ideally located almost exactly between the church and the reception venue, you can't go too far wrong with a Travelodge that's basically attached to a steakhouse",
    url: "https://www.travelodge.co.uk/hotels/474/Nottingham-Wollaton-Park-hotel",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2404.483035318741!2d-1.2202679057247763!3d52.9397310333289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879e9eeef211cad%3A0x1953cc88fc4c1627!2sTravelodge%20Nottingham%20Wollaton%20Park!5e0!3m2!1sen!2suk!4v1710784574711!5m2!1sen!2suk",
    distanceToChurch: 1.8,
    distanceToSwancar: 2.9,
  },
  {
    name: "Double Tree by Hilton",
    description:
      "Very handy for the trams, and apparently you get a free warm cookie on checking in!",
    url: "https://www.hilton.com/en/hotels/emanudi-doubletree-nottingham-gateway/",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2401.9054929988447!2d-1.2036229228817594!3d52.986101201616286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c1d8030bb3bf%3A0xb0f8a01001770dd0!2sDoubleTree%20by%20Hilton%20Nottingham%20-%20Gateway!5e0!3m2!1sen!2suk!4v1710784654432!5m2!1sen!2suk",
    distanceToChurch: 6.4,
    distanceToSwancar: 5,
  },
  {
    name: "Holiday Inn Derby/Nottingham",
    description:
      "Just 200 yards from Junction 25 of the M1, this is an inexpensive and convenient option",
    url: "https://www.hiderbynottinghamhotel.co.uk",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2405.6424907037112!2d-1.304521422884788!3d52.91886310662222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879eed2f1921307%3A0x1f762ac93ec844d!2sHoliday%20Inn%20Derby%20-%20Nottingham%20M1%2C%20JCT.25%2C%20an%20IHG%20Hotel!5e0!3m2!1sen!2suk!4v1710784678492!5m2!1sen!2suk",
    distanceToChurch: 5.4,
    distanceToSwancar: 5.8,
  },
  {
    name: "Premier Inn Nottingham West",
    description:
      "There are a number of Premier Inns in and around Nottingham, but this is the one Jack's parents stay at when they come to visit. Situated close to the tram line it makes it very simple to get into the city centre and on to St John's, and it has free parking. It is however quite a distance from Swancar.",
    url: "https://www.premierinn.com/gb/en/hotels/england/nottinghamshire/nottingham/nottingham-west.html",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2401.799589846853!2d-1.2106549228816836!3d52.98800580147451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879ea7a33dbd7f1%3A0xbab36fabb807f25e!2sPremier%20Inn%20Nottingham%20West%20hotel!5e0!3m2!1sen!2suk!4v1710784711641!5m2!1sen!2suk",
    distanceToChurch: 7.2,
    distanceToSwancar: 4.7,
  },
  {
    name: "The Star Inn, Beeston",
    description:
      "A delightful pub in the heart of Beeston, meaning it's a short walk to the church and a great breakfast in the morning. Jack's parents have been known to stay here as well.",
    url: "https://www.starbeeston.co.uk/pub-accommodation",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2405.306564790988!2d-1.2157310228844922!3d52.92490970617217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879e9c4ae21d63d%3A0xd8ce4b864324f890!2sThe%20Star%20Inn!5e0!3m2!1sen!2suk!4v1710784740210!5m2!1sen!2suk",
    distanceToChurch: 0.2,
    distanceToSwancar: 4.2,
  },
];

const computedOptions: Array<Option> = options.toSorted(function (i1, i2) {
  const differenceChurch = i1.distanceToChurch - i2.distanceToChurch;
  if (differenceChurch !== 0) {
    return differenceChurch;
  }
  return i1.distanceToSwancar - i2.distanceToSwancar;
});
</script>
<template>
  <div class="container py-3">
    <h1>Hotels and such nearby</h1>

    <p>
      We recognise that it's a long trip for many of you so we wanted to make it
      as straightforward as possible to get somewhere to spend the night.
    </p>

    <section
      v-for="(item, index) in computedOptions"
      :key="index"
      class="mb-5 row"
    >
      <div class="col-md-6 col-12 d-flex flex-column justify-content-center">
        <h3 v-text="item.name" />
        <p v-text="item.description" />
        <span v-text="`Distance to Church: ${item.distanceToChurch} miles`" />
        <span v-text="`Distance to Swancar: ${item.distanceToSwancar} miles`" />
        <a
          :href="item.url"
          class="btn btn-primary me-auto mt-3"
          target="_blank"
          v-text="`Link`"
        />
      </div>
      <div class="col-md-6 col-12">
        <iframe
          :src="item.mapUrl"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen="true"
          loading="lazy"
          class="w-100"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  </div>
</template>
