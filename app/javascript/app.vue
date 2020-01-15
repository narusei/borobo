<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$mainColor: #51e898;
$mainColor-invert: findColorInvert($mainColor);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "mainColor": (
    $mainColor,
    $mainColor-invert
  )
);

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
// check git
</style>