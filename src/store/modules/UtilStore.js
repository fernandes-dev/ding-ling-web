import actionsGlobal from '../actions';
import mutationsGlobal from '../mutations';

const utils = {
  namespaced: true,
  state: () => ({
    heightSummaryCardHome: '150px',
  }),
  getters: {},
  mutations: { ...mutationsGlobal },
  actions: { ...actionsGlobal },
};

export default utils;
