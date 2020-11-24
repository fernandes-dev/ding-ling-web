import axios from 'axios';
// import Idb from "./IndexedDb";
axios.defaults.baseURL = 'http://localhost:3333';

const actions = {
  async request(context, payload) {
    context.commit('loading', true, { root: true });

    axios.defaults.headers = null || {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };

    const config = {
      url: payload.url,
      method: payload.method,
      params: null || payload.params,
      data: null || payload.data,
    };

    const resp = axios(config);
    resp
      .then(response => {
        if (payload.state) {
          context.commit('request', [payload.state, response.data]);
        }
        context.commit('loading', false, { root: true });
      })
      .catch(() => {
        context.commit('loading', false, { root: true });
      });

    return resp;
  },
};

export default actions;
