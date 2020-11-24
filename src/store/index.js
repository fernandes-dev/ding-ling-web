import Vue from 'vue';
import Vuex from 'vuex';
import financial from './modules/FinancialStore';
import utils from './modules/UtilStore';
import moves from './modules/MovesStore';
import user from './modules/UserStore';
import actionsGlobal from './actions';
import mutationsGlobal from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
  },
  mutations: {
    ...mutationsGlobal,
    loading(state, data) {
      state.loading = data;
    },
  },
  actions: { ...actionsGlobal },
  modules: {
    financial,
    utils,
    moves,
    user,
  },
});
