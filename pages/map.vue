<script setup>
import * as mapsLoader from "@googlemaps/js-api-loader";
const { public: publicConfig } = useRuntimeConfig();

const style = [
  {
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#b4dfc0",
      },
    ],
  },
  {
    featureType: "administrative.neighborhood",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#f0e6b2",
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#a4dba7",
      },
    ],
  },
  {
    featureType: "poi.government",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#b4dfc0",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#b4dfc0",
      },
    ],
  },
  {
    featureType: "poi.school",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#b4dfc0",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#eeba72",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#eeba72",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.local",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];

const apiKey = publicConfig.mapsApiKey;

console.table(JSON.parse(JSON.stringify(publicConfig)));

const loader = new mapsLoader.Loader({
  apiKey,
  version: "weekly",
});

loader.load().then(async () => {
  const mapsLibrary = await google.maps.importLibrary("maps");
  const markerLibrary = await google.maps.importLibrary("marker");

  const map = new mapsLibrary.Map(document.getElementById("map"), {
    zoom: 14,
    styles: style,
    center: { lat: 52.937427, lng: -1.237924 },
  });

  const faIcon = {
    fillColor: "black",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 0.05,
    anchor: new google.maps.Point(0, 0),
  };

  const features = [
    {
      position: { lat: 52.925165, lng: -1.2167877 },
      title: "The Church",
      icon: {
        ...faIcon,
        path: "M344 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V48H264c-13.3 0-24 10.7-24 24s10.7 24 24 24h32v46.4L183.3 210c-14.5 8.7-23.3 24.3-23.3 41.2V512h96V416c0-35.3 28.7-64 64-64s64 28.7 64 64v96h96V251.2c0-16.9-8.8-32.5-23.3-41.2L344 142.4V96h32c13.3 0 24-10.7 24-24s-10.7-24-24-24H344V24zM24.9 330.3C9.5 338.8 0 354.9 0 372.4V464c0 26.5 21.5 48 48 48h80V273.6L24.9 330.3zM592 512c26.5 0 48-21.5 48-48V372.4c0-17.5-9.5-33.6-24.9-42.1L512 273.6V512h80z",
      },
    },
    {
      position: { lat: 52.9494427, lng: -1.2674081 },
      title: "Reception Venue",
      icon: {
        ...faIcon,
        path: "M155.6 17.3C163 3 179.9-3.6 195 1.9L320 47.5l125-45.6c15.1-5.5 32 1.1 39.4 15.4l78.8 152.9c28.8 55.8 10.3 122.3-38.5 156.6L556.1 413l41-15c16.6-6 35 2.5 41 19.1s-2.5 35-19.1 41l-71.1 25.9L476.8 510c-16.6 6.1-35-2.5-41-19.1s2.5-35 19.1-41l41-15-31.3-86.2c-59.4 5.2-116.2-34-130-95.2L320 188.8l-14.6 64.7c-13.8 61.3-70.6 100.4-130 95.2l-31.3 86.2 41 15c16.6 6 25.2 24.4 19.1 41s-24.4 25.2-41 19.1L92.2 484.1 21.1 458.2c-16.6-6.1-25.2-24.4-19.1-41s24.4-25.2 41-19.1l41 15 31.3-86.2C66.5 292.5 48.1 226 76.9 170.2L155.6 17.3zm44 54.4l-27.2 52.8L261.6 157l13.1-57.9L199.6 71.7zm240.9 0L365.4 99.1 378.5 157l89.2-32.5L440.5 71.7z",
      },
    },
  ];

  features.forEach(function (feature) {
    // eslint-disable-next-line no-new
    new markerLibrary.Marker({
      map,
      ...feature,
    });
  });
});
</script>
<template>
  <div id="map" class="h-100"></div>
</template>
