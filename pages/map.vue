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

const loader = new mapsLoader.Loader({
  apiKey: publicConfig.mapsApiKey,
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

  const features = [
    {
      position: { lat: 52.925165, lng: -1.2167877 },
      title: "The Church",
    },
    {
      position: { lat: 52.9494427, lng: -1.2674081 },
      title: "Reception Venue",
    },
  ];

  features.forEach(function ({ position, title }) {
    // eslint-disable-next-line no-new
    new markerLibrary.Marker({
      map,
      position,
      title,
    });
  });
});
</script>
<template>
  <div id="map"></div>
</template>
