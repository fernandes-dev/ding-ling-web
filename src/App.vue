<template>
  <v-app class="app">
    <!-- <v-app-bar app color="primary" class="white--text">Ding Ling</v-app-bar> -->
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
  computed: {},
};
</script>

<style>
.app {
  background-image: url('./assets/background.svg') !important;
  background-repeat: no-repeat;
}

.button-primary {
  border-radius: 15px !important;
  font-size: 22px !important;
}

.v-btn,
.v-tab {
  text-transform: none !important;
}
</style>
