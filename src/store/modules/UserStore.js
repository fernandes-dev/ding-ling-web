import actionsGlobal from '../actions';
import mutationsGlobal from '../mutations';

const user = {
  namespaced: true,
  state: () => ({
    profile: {
      id: '4654654654560',
      name: 'Eduardo Fernandes',
      email: 'eduardo.yugan@gmail.com',
    },
  }),
  getters: {},
  mutations: { ...mutationsGlobal },
  actions: { ...actionsGlobal },
};

export default user;
