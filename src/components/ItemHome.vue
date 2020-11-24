<template>
  <div class="d-flex">
    <v-card height="30px" flat class="card-item-qtd px-2 pt-1" width="90px">
      <b :class="item.color + '--text'" style="font-size: 16px;">
        x{{ item.current ? item.current : item.qtd }}
      </b>
    </v-card>
    <v-card height="36px" flat class="pa-2">
      <b :class="item.color + '--text'" style="font-size: 16px;">
        {{ item.title }}
      </b>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style></style>
