<template>
  <v-main class="home">
    <v-app-bar flat v-if="!$vuetify.breakpoint.smAndDown" color="transparent" class="white--text">
      <h2 class="animate__animated animate__fadeInDown">Olá, {{ user.name }} :)</h2>
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
      <h1
        v-if="$vuetify.breakpoint.smAndDown"
        class="welcome-message animate__animated animate__fadeInDown"
      >
        Olá, {{ user.name }} :)
      </h1>
      <v-row v-if="summaryDetails">
        <v-col cols="12" class="pa-0 text-center">
          <v-btn
            v-show="!$vuetify.breakpoint.smAndDown"
            @click="closeDetails"
            style="margin-bottom: -10px; margin-top: -15px;"
            dark
            text
          >
            ocultar detalhes
          </v-btn>
        </v-col>
        <v-btn
          v-show="$vuetify.breakpoint.smAndDown"
          @click="closeDetails"
          color="grey"
          absolute
          right
          icon
          style="z-index: 10; margin-top: -20px; margin-right: -10px;"
        >
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
        <v-col
          class="animate__animated animate__zoomIn"
          v-for="(summary, i) in summaries"
          :key="i"
          cols="6"
        >
          <SummaryCard :summary="summary" :height="heightSummaryCardHome" />
        </v-col>
      </v-row>
      <v-row v-else class="animate__animated animate__zoomIn">
        <v-col cols="12">
          <SummaryHome />
        </v-col>
      </v-row>
      <LastMove class="my-3 animate__animated animate__fadeInDown" />
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
      v-if="$vuetify.breakpoint.smAndDown"
      absolute
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
import SummaryHome from '@/components/SummaryHome';

export default {
  name: 'Home',
  components: { SummaryCard, LastMove, SummaryHome },
  computed: {
    user() {
      return this.$store.state.user.profile;
    },
    summaries() {
      return this.$store.state.financial.summaries;
    },
    summaryDetails() {
      return this.$store.state.financial.summaryDetails;
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
  methods: {
    closeDetails() {
      this.$store.commit('financial/request', ['summaryDetails', false]);
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
  margin-bottom: 5px;
}
</style>
