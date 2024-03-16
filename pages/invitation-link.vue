<script setup lang="ts">
interface Expiry {
  endDate: number;
  text: string;
}

interface Link {
  text: string;
  href: string;
  expiry?: Expiry;
  external?: boolean;
}

const links: Array<Link> = [
  {
    text: "I am a Day Guest",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSceOkwlfbMtH6RYc4xY04KOkmiZrvfcS0HsT1n7WH-cmvipcg/viewform?usp=sf_link",
    external: true,
    expiry: {
      endDate: Date.parse("2024-07-16 00:00:00"),
      text: "Unfortunately you've missed the deadline for day guest RSVPs. We'd still love to have you as an evening guest though, so please fill out the below RSVP.",
    },
  },
  {
    text: "I am an Evening Guest",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSch57b-fCS-YGSqk0a7caLy3Mg2oUCF4PKlo20kq_rznw84hg/viewform?usp=sf_link",
    external: true,
  },
  {
    text: "Our Registry",
    href: "https://prezola.com/wishlists/10293123",
    external: true,
  },
  {
    href: "/running-order",
    text: "The Running Order",
  },
  {
    href: "/accommodation",
    text: "Accommodation",
  },
  {
    text: "The Rest Of The Website",
    href: "/",
  },
];
</script>
<template>
  <div class="container col-12 py-3 d-flex flex-column">
    <h3>You got our invitation! Hooray!</h3>
    <p>
      We can't wait to see you there. In the meantime please could you fill out
      the relevant form below, and have a look through some useful links.
    </p>
    <template v-for="(item, index) in links" :key="index">
      <a
        v-if="!item.expiry || item.expiry.endDate > Date.now()"
        :href="item.href"
        :target="item.external ? '_blank' : undefined"
        class="btn text-white w-75 fs-1 mb-3 mx-auto"
        style="background-color: var(--primary)"
        :data-end-date="item.expiry?.endDate"
        v-text="item.text"
      />
      <div v-else v-text="item.expiry.text" />
    </template>
  </div>
</template>
