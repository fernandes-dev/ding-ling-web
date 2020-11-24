<template>
  <v-card
    flat
    tile
    :height="!$vuetify.breakpoint.xsOnly ? height : '110px'"
    class="summary-card-home"
  >
    <v-card-text class="body-card-summary-home py-0 d-flex flex-column justify-center pr-0 pl-2">
      <div class="font-weight-bold" :class="summary.color + '--text'">
        <div class="mb-3" style="font-size: 1.05em;">
          {{ summary.title }}
        </div>
        <div class="" style="font-size: 1.4em" v-if="summary.qtd">x {{ summary.qtd }}</div>
        <div style="font-size: 1.4em" v-if="summary.current && summary.total">
          {{ summary.current }} de {{ summary.total }}
        </div>
        <div
          :class="!summary.qtd && !summary.current ? 'solo-value' : ''"
          style="font-size: 1.4em;"
        >
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
};
</script>

<style>
.summary-card-home {
  border-left: solid 5px #e55f91 !important;
}

.body-card-summary-home {
  height: 100%;
}

.solo-value {
  margin-top: 35px;
}

.solo-title {
  margin-top: 15px;
}
</style>
