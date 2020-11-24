<template>
  <v-alert color="#E5E5E5" tile class="tertiary--text py-0 pr-0">
    <v-row align="center">
      <v-col cols="auto">
        <v-icon x-large>
          mdi-cash
        </v-icon>
      </v-col>
      <v-col cols="9">
        <b>
          <div style="font-size: 12px;">
            Última movimentação
          </div>
          <div>
            <span>
              {{ lastMove.title }}
            </span>
          </div>
        </b>
      </v-col>
      <v-btn :disabled="$store.state.loading" absolute right icon>
        <v-img src="../assets/icons/arrow-right.svg"></v-img>
      </v-btn>
    </v-row>
  </v-alert>
</template>

<script>
export default {
  computed: {
    lastMove() {
      return this.$store.state.moves.last;
    },
  },
};
</script>

<style></style>
