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
    name: "Sabrina Klein/Parker/Parkour",
    bio: `
Izzy and Sabrina met many, many years ago at the age of four.
Neither of them actually remember it but there is considerable photographic proof.
Over the years they have shared many of life's big moments (and a lot of the small ones too), they haven't lived in the same city since school, but always know that the other has their back no matter what.
`,
    photoUrl: "/img/wedding-party/Sabrina Klein.jpg",
  },
  {
    name: "Emma Barber",
    bio: `
Izzy and Emma first met as Freshers on SB in a Nutrition Lecture, bonded by their shared lack of a Biology A-level and confusion over chemiosomotic theory¹.
They spent many hours together not doing uni work and instead getting heavily involved in societies - in fact it is because of Emma that Izzy went to the infamous improv show and later joined the Nottingham New Theatre at all! So this whole wedding is really her fault...

¹Note from Jack: I don't know either.
    `,
    photoUrl: "/img/wedding-party/Emma Barber.jpg",
  },
  {
    name: "Joanne Blunt",
    bio: `
Izzy and Joanne initially bonded over a shared exasperation at whatever nonsense Jack and Ian were getting up to.
Since then they have discovered many other things in common - like crafting, videogames, and being generally lovely people.
Though they can often still be found rolling their eyes at the guys' strange goings on.    
`,
    photoUrl: "/img/wedding-party/Joanne Blunt.jpg",
  },
  {
    name: "Laura Wolczyk",
    bio: `
Izzy and Laura met for the first time while exceptionally tired in the theatre, and since then very little has changed.
They can often be found drinking copious amounts of wine and watching the sunrise (which happens both too often and not often enough in Izzy's eyes).
Laura was technically Jack's friend first, given that they performed at the Theatre's Freshers Fringe together - however Izzy called dibs.
`,
    photoUrl: "/img/wedding-party/Laura Wolczyk.jpg",
  },
  {
    name: "Sam Osborne",
    bio: `Close friend and confidant, although it did look shaky for a few months there.`,
    photoUrl: "/img/wedding-party/Sam Osborne.jpg",
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
    photoUrl: "/img/wedding-party/Ian Sheard.jpg",
  },
  {
    name: "Callum Walker",
    bio: `
I swear to god if he wears a kilt properly I'll kill him.

Jack and Callum met at the NNT while Jack was in, and Callum overseeing, the first Unscripted the New Theatre put on.
Quite how they became such firm friends remains unknown but it was at Callum's "I'm leaving Nottingham" party that Izzy and Jack had their first date.
`,
    photoUrl: "/img/wedding-party/Callum Walker.jpg",
  },
  {
    name: "Tom Heath",
    bio: `
Jack met Tom doing the Drama Show on URN, something that would eventually ruin his mental health for a semester.
The show, not Tom.
Through some kind of strange mind-meld it transpired that their tastes in comedy were basically the same, and they can often be heard quoting Matt Berry to anyone who'll listen, and indeed many people who don't.

Jack and he are buddies, aren't they.
`,
    photoUrl: "/img/wedding-party/Tom Heath.jpg",
  },
  {
    name: "Sam Osborne",
    bio: `
Hang on a minute he looks familiar...
`,
    photoUrl: "/img/wedding-party/Sam Osborne.jpg",
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
  <div class="container">
    <div class="row">
      <div
        v-for="(party, partyIndex) in parties"
        :key="partyIndex"
        class="col-12 col-lg-6"
      >
        <h2 v-text="party.name" />
        <div
          v-for="(person, personIndex) in party.people"
          :key="partyIndex + '-' + personIndex"
          class="mb-3"
        >
          <h4 v-text="person.name" />
          <div class="row">
            <div
              class="col-12 col-md-6 d-flex flex-column justify-content-center"
            >
              <p
                v-for="(paragraph, paragraphIndex) in person.bio.split(
                  /\n{2,}/,
                )"
                :key="partyIndex + '-' + personIndex + '-' + paragraphIndex"
                v-text="paragraph.replaceAll('\n', ' ').trim()"
              />
            </div>
            <div
              class="col-12 col-md-6 d-flex flex-column justify-content-center"
            >
              <img
                :src="person.photoUrl"
                class="w-100 h-auto"
                :alt="`A photograph of ${person.name}.`"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
