import actionsGlobal from '../actions';
import mutationsGlobal from '../mutations';

const financial = {
  namespaced: true,
  state: () => ({
    summaries: [
      {
        name: 'balance',
        title: 'Saldo atual',
        value: 2500,
        color: 'primary',
      },
      {
        name: 'fixed-accounts',
        title: 'Contas fixas',
        qtd: '6',
        value: 2560,
        color: 'primary',
      },
      {
        name: 'payments-made',
        title: 'Pagamentos realizados',
        current: 10,
        total: 14,
        value: 2560,
        color: 'secondary',
      },
      {
        name: 'payments-pendent',
        title: 'Pagamentos pendentes',
        current: 4,
        total: 14,
        value: 500,
        color: 'secondary',
      },
    ],
    activeDetails: null,
  }),
  getters: {},
  mutations: { ...mutationsGlobal },
  actions: { ...actionsGlobal },
};

export default financial;
