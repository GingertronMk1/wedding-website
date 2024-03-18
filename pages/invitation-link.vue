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
  icons?: Array<string>;
}

interface LinkList {
  title: string;
  links: Array<Link>;
}

const forms: LinkList = {
  title: "RSVPs",
  links: [
    {
      text: "I am a Day Guest",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSceOkwlfbMtH6RYc4xY04KOkmiZrvfcS0HsT1n7WH-cmvipcg/viewform?usp=sf_link",
      external: true,
      expiry: {
        endDate: Date.parse("2024-07-16 00:00:00"),
        text: "Unfortunately you've missed the deadline for day guest RSVPs. We'd still love to have you as an evening guest though, so please fill out the below RSVP.",
      },
      icons: ["fas", "church"],
    },
    {
      text: "I am an Evening Guest",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSch57b-fCS-YGSqk0a7caLy3Mg2oUCF4PKlo20kq_rznw84hg/viewform?usp=sf_link",
      external: true,
      icons: ["fas", "moon"],
    },
  ],
};

const links: LinkList = {
  title: "Links",
  links: [
    {
      text: "Our Registry",
      href: "https://prezola.com/wishlists/10293123",
      external: true,
      icons: ["fas", "book-open"],
    },
    {
      href: "/accommodation",
      text: "Accommodation",
      icons: ["fas", "hotel"],
    },
    {
      text: "About Us",
      href: "/",
      icons: ["fas", "person-circle-question"],
    },
  ],
};

const allLinks: Array<LinkList> = [forms, links];

const columnClasses: Array<string> = [
  "col-12",
  "col-sm-6",
  "d-flex",
  "flex-column",
];

const buttonClasses: Array<string> = [
  "btn",
  "text-white",
  "col-8",
  "col-sm-12",
  "fs-6",
  "mb-3",
  "mx-auto",
];
</script>
<template>
  <div class="container col-12 py-3 d-flex flex-column">
    <h1 class="text-center">You got our invitation! Hooray!</h1>
    <p class="text-center fs-5">
      We can't wait to see you there. In the meantime please could you fill out
      the relevant form below, and have a look through some useful links.
    </p>
    <div class="row">
      <div
        v-for="linkList in allLinks"
        :key="JSON.stringify(linkList)"
        :class="columnClasses"
      >
        <h3 v-text="linkList.title" />
        <template v-for="item in linkList.links" :key="JSON.stringify(item)">
          <a
            v-if="!item.expiry || item.expiry.endDate > Date.now()"
            :href="item.href"
            :target="item.external ? '_blank' : undefined"
            :class="buttonClasses"
            style="background-color: var(--primary)"
            :data-end-date="item.expiry?.endDate"
          >
            <font-awesome-icon class="me-2" :icon="item.icons" />
            <span v-text="item.text" />
          </a>
          <div v-else v-text="item.expiry.text" />
        </template>
      </div>
    </div>
  </div>
</template>
