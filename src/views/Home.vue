<template>
  <v-main class="home">
    <v-app-bar flat v-if="!$vuetify.breakpoint.xsOnly" color="transparent" class="white--text">
      <h2>Olá, {{ user.name }} :)</h2>
      <v-spacer></v-spacer>
      <div v-for="(item, i) in menu" :key="i" class="mr-5">
        <v-btn :disabled="$store.state.loading" depressed color="primary" :to="item.url">
          <v-icon class="pr-2">
            {{ item.icon }}
          </v-icon>
          <span>
            {{ item.title }}
          </span>
        </v-btn>
      </div>
    </v-app-bar>
    <v-container fluid class="body-app">
      <h1 v-if="$vuetify.breakpoint.xsOnly" class="welcome-message">Olá, {{ user.name }} :)</h1>
      <v-row>
        <v-col v-for="(summary, i) in summaries" :key="i" cols="6">
          <SummaryCard :summary="summary" :height="heightSummaryCardHome" />
        </v-col>
      </v-row>
      <LastMove />
      <v-row>
        <v-col>
          <v-btn
            :disabled="$store.state.loading"
            height="50px"
            block
            depressed
            class="button-primary"
            color="secondary"
          >
            Pagar
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            :disabled="$store.state.loading"
            height="50px"
            block
            depressed
            class="button-primary secondary--text"
            color="white"
          >
            Receber
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-bottom-navigation
      v-if="$vuetify.breakpoint.xsOnly"
      fixed
      color="white"
      background-color="#7563D1"
    >
      <v-btn :disabled="$store.state.loading" v-for="(item, i) in menu" :key="i" :to="item.url">
        {{ item.title }}
        <v-icon>
          {{ item.icon }}
        </v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-main>
</template>

<script>
import SummaryCard from '@/components/SummaryCard';
import LastMove from '@/components/LastMove';

export default {
  name: 'Home',
  components: { SummaryCard, LastMove },
  computed: {
    user() {
      return this.$store.state.user.profile;
    },
    summaries() {
      return this.$store.state.financial.summaries;
    },
    menu() {
      return [
        { title: 'Início', url: '/home', icon: 'mdi-home' },
        { title: 'Relatórios', url: '/relatorios', icon: 'mdi-finance' },
        { title: 'Contatos', url: '/contatos', icon: 'mdi-contacts' },
        { title: 'Perfil', url: '/perfil', icon: 'mdi-account-circle' },
      ];
    },
    heightSummaryCardHome() {
      return this.$store.state.utils.heightSummaryCardHome;
    },
  },
};
</script>

<style>
.body-app {
  max-width: 600px;
}

.welcome-message {
  color: white;
  text-align: center;
  font-size: 22px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.summary-card-home {
  border-left: solid 10px #e55f91 !important;
}

.body-card-summary-home {
  height: 110px;
}
</style>
