<template>
  <v-card
    @click="showDetails"
    flat
    tile
    :height="height"
    class="summary-card-home d-flex flex-column justify-center"
  >
    <v-card-text class="body-card-summary-home">
      <div class="font-weight-bold" :class="summary.color + '--text'">
        <div class="mb-3" style="font-size: 20px;">
          {{ summary.title }}
        </div>
        <div class="" style="font-size: 20px;" v-if="summary.qtd">x {{ summary.qtd }}</div>
        <div class="mb-3" style="font-size: 20px;" v-if="summary.current && summary.total">
          {{ summary.current }} de {{ summary.total }}
        </div>
        <div :class="!summary.qtd && !summary.current ? 'solo-value' : ''" style="font-size: 25px;">
          {{ summary.value | money }}
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    height: String,
    summary: Object,
  },
  computed: {
    activeDetails() {
      return this.$store.state.financial.activeDetails;
    },
  },
  methods: {
    showDetails() {
      console.log('expandir');
      // this.$store.commit('financial/request', ['activeDetails', this.summary.name]);
    },
  },
};
</script>

<style>
.solo-value {
  margin-top: 35px;
}

.solo-title {
  margin-top: 15px;
}
</style>
