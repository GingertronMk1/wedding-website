<script setup lang="ts">
import { ref, computed } from "vue";
import type { Ref } from "vue";

const col1Width = ref(10);
const otherColWidths = computed(() => (100 - col1Width.value) / 2);

const itinerary = ref([
  {
    what: "Ceremony",
    when: Date.parse("22 Sep 2024 13:00:00 GMT"),
    where: ["Beeston Parish Church", "Beeston", "Nottingham", "NG9 1GA"],
  },
  {
    what: "Reception",
    when: Date.parse("22 Sep 2024 19:00:00 GMT"),
    where: ["Swancar Farm", "Trowell Moor", "Trowell", "Nottingham", "NG9 3PQ"],
  },
]);

interface MapArea {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  href: string;
  target: string;
  alt: string;
}

const originalImageHeight: number = 1834;
const originalImageWidth: number = 2798;

const mapAreas: Array<MapArea> = [
  {
    x1: 865,
    y1: 400,
    x2: 1340,
    y2: 705,
    href: "https://www.swancarfarmcountryhouse.com/",
    target: "_blank",
    alt: "Swancar Farm Country House",
  },
  {
    x1: 1615,
    y1: 1150,
    x2: 2060,
    y2: 1500,
    href: "https://beestonparishchurch.com/",
    target: "_blank",
    alt: "St John The Baptist Church, Beeston",
  },
];

function resizeMap(): Array<MapArea> {
  const inviteMapImage = document.getElementById("invite-map");
  if (!inviteMapImage) {
    return [];
  }

  const clientWidth = inviteMapImage.clientWidth;
  const clientHeight = inviteMapImage.clientHeight;

  const xScale = originalImageWidth / clientWidth;
  const yScale = originalImageHeight / clientHeight;

  const originalAspectRatio = originalImageWidth / originalImageHeight;
  const newAspectRatio = clientWidth / clientHeight;

  console.table({
    clientWidth,
    clientHeight,
    originalImageWidth,
    originalImageHeight,
    xScale,
    yScale,
    originalAspectRatio,
    newAspectRatio,
  });

  return mapAreas.map(function (area) {
    const newX1 = area.x1 / xScale;
    const newX2 = area.x2 / xScale;
    const newY1 = area.y1 / yScale;
    const newY2 = area.y2 / yScale;
    return {
      ...area,
      x1: newX1,
      y1: newY1,
      x2: newX2,
      y2: newY2,
    };
  });
}

const computedMapAreas: Ref<Array<MapArea>> = ref([]);

window.onload = function () {
  computedMapAreas.value = resizeMap();
};

window.onresize = function () {
  computedMapAreas.value = resizeMap();
};
</script>
<template>
  <map name="invite-map">
    <area
      v-for="(computedArea, index) in computedMapAreas"
      :key="index"
      shape="rect"
      :coords="
        [
          computedArea.x1,
          computedArea.y1,
          computedArea.x2,
          computedArea.y2,
        ].join(',')
      "
      :href="computedArea.href"
      :alt="computedArea.alt"
      target="_blank"
    />
  </map>
  <img
    id="invite-map"
    src="/img/InviteMap.png"
    class="w-100"
    usemap="#invite-map"
    alt="A map showing the locations for the wedding: St John's Church Beeston and Swancar Farm"
    :height="originalImageHeight"
    :width="originalImageWidth"
  />
  <div class="card">
    <div class="card-header">The Key Information</div>
    <table class="table mb-0">
      <thead>
        <tr>
          <th :width="`${col1Width}%`" scope="col"></th>
          <th
            v-for="(item, index) in itinerary"
            :key="index"
            :width="`${otherColWidths}%`"
            scope="col"
            v-text="item.what"
          />
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="p-3" scope="row">When</th>
          <td
            v-for="(item, index) in itinerary"
            :key="index"
            v-text="new Date(item.when).toUTCString()"
          />
        </tr>
        <tr>
          <th class="p-3" scope="row">Where</th>
          <td v-for="(item, index) in itinerary" :key="index">
            <ul class="list-group list-group-flush">
              <li
                v-for="(part, partIndex) in item.where"
                :key="partIndex"
                class="list-group-item"
                v-text="part"
              />
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="card-footer">We can't wait to see you there!</div>
  </div>
</template>
