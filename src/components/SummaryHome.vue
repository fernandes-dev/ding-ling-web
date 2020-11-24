<template>
  <v-card class="summary-home" flat tile :height="$vuetify.breakpoint.xsOnly ? '240px' : '348px'">
    <v-card-text
      :style="$vuetify.breakpoint.xsOnly ? 'height: 190px;' : 'height: 300px;'"
      class="py-5 pr-0 px-5"
    >
      <div v-show="$vuetify.breakpoint.xsOnly" style="font-size: 18px;" class="mt-0 primary--text ">
        <div class="mb-1 d-flex justify-space-between pr-3">
          <b>{{ balance.title }}</b>
          <b style="font-size: 16px;">
            {{ new Date() | date }}
          </b>
        </div>
        <div style="font-size: 25px;">
          <b> {{ balance.value | money }} </b>
        </div>
      </div>
      <div v-show="!$vuetify.breakpoint.xsOnly" class="mt-0 mb-6 primary--text ">
        <div class="mb-3 pr-5 d-flex justify-space-between">
          <b style="font-size: 25px;">{{ balance.title }}</b>
          <b style="font-size: 16px;">
            {{ new Date() | date }}
          </b>
        </div>
        <div style="font-size: 35px;">
          <b> {{ balance.value | money }} </b>
        </div>
      </div>
      <v-row class="mt-2" no-gutters>
        <v-col
          :style="$vuetify.breakpoint.xsOnly ? 'margin-top: 10px;' : 'margin-top: 20px;'"
          v-for="(item, index) in itensHome"
          :key="index"
          cols="12"
        >
          <ItemHome :item="item" />
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions class="d-flex justify-center">
      <v-btn text @click="showDetails">ver detalhes</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import ItemHome from '@/components/ItemHome';

export default {
  components: {
    ItemHome,
  },
  computed: {
    summaryDetails() {
      return this.$store.state.financial.summaryDetails;
    },
    summaries() {
      return this.$store.state.financial.summaries;
    },
    balance() {
      const summaries = this.summaries || [];
      const [balance] = summaries.filter(summary => summary.name === 'balance');
      return balance;
    },
    itensHome() {
      const summaries = this.summaries || [];
      const itens = summaries.filter(summary => summary.name !== 'balance');
      return itens;
    },
  },
  methods: {
    showDetails() {
      this.$store.commit('financial/request', ['summaryDetails', true]);
    },
  },
};
</script>

<style>
.summary-home {
  border-left: solid 5px #e55f91 !important;
}

.solo-value {
  margin-top: 35px;
}

.solo-title {
  margin-top: 15px;
}

.card-item-qtd {
  background: rgba(196, 196, 196, 0.28) !important;
}
</style>
