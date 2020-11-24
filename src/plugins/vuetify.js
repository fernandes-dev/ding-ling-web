import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#7563D1',
        secondary: '#E55F91',
        tertiary: '#666666',
      },
    },
  },
});
