<template>
  <v-card color="transparent" flat tile class="ma-auto" height="350px" width="400px">
    <v-form>
      <v-img class="mx-auto" width="70%" src="../assets/logo.svg"></v-img>

      <v-text-field color="white" dark flat label="E-mail" />
      <v-text-field
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        @click:append="showPassword = !showPassword"
        color="white"
        dark
        flat
        label="Senha"
      />
      <div class="text-end mb-3">
        <v-btn :disabled="$store.state.loading" class="pa-0" text color="#FFFFFF"
          >Esqueceu sua senha?</v-btn
        >
      </div>
      <div>
        <v-btn
          :disabled="$store.state.loading"
          @click="login"
          depressed
          block
          height="60px"
          class="button-primary"
          color="secondary"
        >
          Entrar
        </v-btn>
      </div>
      <div class="text-center mt-3">
        <v-btn :disabled="$store.state.loading" to="/criar-conta" class="pa-0" text color="#FFFFFF"
          >Criar minha conta</v-btn
        >
      </div>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    showPassword: false,
  }),
  methods: {
    async login() {
      try {
        const resp = await this.$store.dispatch('user/request', {
          url: '/login',
          method: 'post',
        });
        localStorage.setItem('token', resp.data.token);
      } catch (error) {
        console.log(error);
        alert('aplicativo em fase de desenvolvimento, veja a tela inicial');
        this.$router.push('/home');
      }
    },
  },
};
</script>

<style></style>
