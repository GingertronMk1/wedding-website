<script setup lang="ts">
const colClasses = [
  "col-12",
  "col-md-6",
  "d-flex",
  "flex-column",
  "align-items-center",
  "justify-content-start",
];

interface Form {
  text: string;
  iframeSrc: string;
}

const forms: Array<Form> = [
  {
    text: "I am a Day Guest",
    iframeSrc:
      "https://docs.google.com/forms/d/e/1FAIpQLSceOkwlfbMtH6RYc4xY04KOkmiZrvfcS0HsT1n7WH-cmvipcg/viewform?embedded=true",
  },
  {
    text: "I am an Evening Guest",
    iframeSrc:
      "https://docs.google.com/forms/d/e/1FAIpQLSch57b-fCS-YGSqk0a7caLy3Mg2oUCF4PKlo20kq_rznw84hg/viewform?embedded=true",
  },
];

const rsvpEndDateMs = Date.parse("2024-07-16 00:00:00");
const currentDate = Date.now();
</script>
<template>
  <h3>You got our invitation! Hooray!</h3>
  <p>
    We can't wait to see you there. In the meantime please could you fill out
    the relevant form below, and have a look through some useful links.
  </p>
  <div class="row flex-grow-1">
    <div :class="colClasses">
      <div v-if="currentDate < rsvpEndDateMs" class="accordion w-100">
        <div v-for="(item, index) in forms" :key="index" class="accordion-item">
          <h2 :id="`heading${index}`" class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#collapse${index}`"
              :aria-controls="`collapse${index}`"
              aria-expanded="false"
              v-text="item.text"
            />
          </h2>
          <div
            :id="`collapse${index}`"
            class="accordion-collapse collapse"
            :aria-labelledby="`heading${index}`"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <iframe
                :src="item.iframeSrc"
                width="640"
                height="767"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                class="w-100"
                >Loading…</iframe
              >
            </div>
          </div>
        </div>
      </div>
      <template v-else> Too late! </template>
    </div>
    <div :class="colClasses">
      <a
        href="https://prezola.com/wishlists/10293123"
        class="btn btn-primary"
        target="_blank"
        >Our Registry</a
      >
    </div>
  </div>
</template>
