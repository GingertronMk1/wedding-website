<script setup lang="ts">
interface Person {
  name: string;
  bio: string;
  photoUrl: string;
}

interface Party {
  name: string;
  people: Array<Person>;
}

const bridalParty: Array<Person> = [
  {
    name: "Emma Barber",
    bio: `
      Also a food science student, is probably ultimately responsible for Izzy meeting Jack so in a way this is all her fault.
    `,
    photoUrl: "",
  },
  {
    name: "Joanne Blunt",
    bio: `Became fast friends with Izzy on moving back to the NG postcode, mostly thanks to a shared interest in rolling their eyes at whatever Jack and Ian get up to.`,
    photoUrl: "",
  },
  {
    name: "Sabrina Klein/Parker/Parkour",
    bio: `Too many options for surname honestly.`,
    photoUrl: "",
  },
  {
    name: "Laura Wolczyk",
    bio: `Fun fact: was actually Jack's Freshers' Fringe sister.`,
    photoUrl: "",
  },
  {
    name: "Sam Osborne",
    bio: `Close friend and confidant, although it did look shaky for a few months there.`,
    photoUrl: "",
  },
];

const groomsmen: Array<Person> = [
  {
    name: "Ian Sheard",
    bio: `
The best man.

First met Jack doing improv in 2015.
The first thing they exchanged was a knowing look about Jeff Lynne and honestly that set the tone.
In 2016 however, things took off.
Jack invited Ian to do a demo for a radio show, tentatively titled 'Year In Review'.
They then proceeded to spend 2 hours every Saturday morning (just, it was 1am) in a small room together sharing a common love of music, sketch comedy bits, and somehow the admiration of a strange man from Brazil.

When Jack was awarded a fellowship for his service to the Nottingham New Theatre he could think of no better person to give a speech on his behalf.
Now, 5 years or so hence, he once again called upon Ian's services as his best man.
    `,
    photoUrl: "",
  },
  {
    name: "Callum Walker",
    bio: `
I swear to god if he wears a kilt properly I'll kill him.

Jack and Callum met at the NNT while Jack was in, and Callum overseeing, the first Unscripted the New Theatre put on.
Quite how they became such firm friends remains unknown but it was at Callum's "I'm leaving Nottingham" party that Izzy and Jack had their first date.
`,
    photoUrl: "",
  },
  {
    name: "Tom Heath",
    bio: `
Jack met Tom doing the Drama Show on URN, something that would eventually ruin his mental health for a semester.
The show, not Tom.
Through some kind of strange mind-meld it transpired that their tastes in comedy were basically the same, and they can often be heard quoting Matt Berry to anyone who'll listen, and indeed many people who don't.

Jack and he are buddies, aren't they.
`,
    photoUrl: "",
  },
  {
    name: "Sam Osborne",
    bio: `
Hang on a minute that looks familiar...
`,
    photoUrl: "",
  },
];

const parties: Array<Party> = [
  {
    name: "Bridal Party",
    people: bridalParty,
  },
  {
    name: "Groomsmen",
    people: groomsmen,
  },
];
</script>
<template>
  <div class="row">
    <div
      v-for="(party, partyIndex) in parties"
      :key="partyIndex"
      class="col-12 col-lg-6"
    >
      <h2 v-text="party.name" />
      <div
        v-for="(person, personIndex) in party.people"
        :key="`${partyIndex}-${personIndex}`"
        class="mb-3"
      >
        <h4 v-text="person.name" />
        <p
          v-for="(paragraph, index) in person.bio.split(/\n{2,}/)"
          :key="index"
          v-text="paragraph.replaceAll('\n', '').trim()"
        />
      </div>
    </div>
  </div>
</template>
