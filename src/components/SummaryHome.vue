<template>
  <v-card class="summary-home" flat tile :height="$vuetify.breakpoint.xsOnly ? '240px' : '348px'">
    <v-card-text
      :style="$vuetify.breakpoint.xsOnly ? 'height: 190px;' : 'height: 148px;'"
      class="py-5 pr-0 px-5"
    >
      <div style="font-size: 18px;" class="mt-0 primary--text ">
        <div class="mb-1">
          <b>{{ balance.title }}</b>
        </div>
        <div style="font-size: 25px;">
          <b> {{ balance.value | money }} </b>
        </div>
      </div>
      <v-row class="mt-3" no-gutters>
        <v-col class="mt-1" v-for="(item, index) in itensHome" :key="index" cols="12">
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
