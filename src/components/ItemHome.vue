<template>
  <div class="d-flex">
    <v-card
      :height="$vuetify.breakpoint.xsOnly ? '30px' : '40px'"
      flat
      class="card-item-qtd d-flex align-center pl-2"
      width="90px"
    >
      <b
        :class="item.color + '--text'"
        :style="$vuetify.breakpoint.xsOnly ? 'font-size: 16px;' : 'font-size: 20px;'"
      >
        x{{ item.current ? item.current : item.qtd }}
      </b>
    </v-card>
    <v-card
      :height="$vuetify.breakpoint.xsOnly ? '30px' : '40px'"
      flat
      class="d-flex align-center pl-2"
    >
      <b
        :class="item.color + '--text'"
        :style="$vuetify.breakpoint.xsOnly ? 'font-size: 16px;' : 'font-size: 20px;'"
      >
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
