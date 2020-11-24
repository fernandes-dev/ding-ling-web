<template>
  <v-container class="my-auto d-flex flex-column align-center">
    <v-card color="transparent" flat tile height="400px" width="400px">
      <v-form>
        <v-img class="mx-auto" width="70%" src="../assets/logo.svg"></v-img>

        <v-text-field color="white" dark flat label="Nome" />
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
        <div class="mt-3">
          <v-btn
            :disabled="$store.state.loading"
            depressed
            block
            height="60px"
            class="button-primary"
            color="secondary"
          >
            Registrar
          </v-btn>
        </div>
        <div class="text-center mt-3">
          <v-btn :disabled="$store.state.loading" to="/" class="pa-0" text color="#FFFFFF">
            Já possuo uma conta
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    showPassword: false,
  }),
};
</script>

<style></style>
