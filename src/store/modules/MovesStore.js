import actionsGlobal from '../actions';
import mutationsGlobal from '../mutations';

const moves = {
  namespaced: true,
  state: () => ({
    last: {
      id: '64564654',
      title: 'Pagamento crédito vivo',
    },
  }),
  getters: {},
  mutations: { ...mutationsGlobal },
  actions: { ...actionsGlobal },
};

export default moves;
