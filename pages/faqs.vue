<script setup lang="ts">
interface FAQ {
  question: string;
  answer: string;
}

const faqs: Array<FAQ> = [
  {
    question: "What is the dress code?",
    answer: `
Dress code is semi-formal.
Please no white dresses - Jack won't be wearing his glasses! 

If you're looking at a pair of shoes thinking “ooh I'll just pre-emptively put some plasters on my feet before I wear them” absolutely leave them at home.
Comfy shoes only.
`,
  },
  {
    question: "When should I turn up?",
    answer: `
Depends on what kind of guest you are.
If you are a day guest please get to the church for 12:30 in the afternoon.
If you are an evening guest please arrive at Swancar for 7:30 in the evening.
`,
  },
  {
    question: "Can I ask you a less frequently asked question?",
    answer: `
Of course!
Get in touch with Izzy (izzydebono@gmail.com / 07897327636) or Jack (jackellis1504@gmail.com / 07948437374) for anything you want clearing up.
`,
  },
];
</script>
<template>
  <div class="container pt-3">
    <section v-for="faq in faqs" :key="JSON.stringify(faq)">
      <h3 v-text="faq.question" />
      <p v-text="faq.answer" />
    </section>
  </div>
</template>
