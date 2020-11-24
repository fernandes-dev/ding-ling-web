<template>
  <v-card
    color="transparent"
    flat
    height="200px"
    width="350px"
    class="d-flex flex-column justify-space-between ma-auto"
  >
    <h1 class="white--text text-center">Página em construção</h1>
    <div class="text-center">
      <v-btn
        depressed
        block
        height="60px"
        class="button-primary"
        color="secondary"
        @click="backRoute"
      >
        Voltar
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  methods: {
    backRoute() {
      this.$router.back();
    },
  },
};
</script>

<style></style>
