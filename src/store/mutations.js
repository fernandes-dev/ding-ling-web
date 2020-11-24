const mutations = {
  request(state, payload) {
    // payload[0] = state, payload[1] = data
    const stateObject = payload[0];
    state[stateObject] = payload[1];
  },
};

export default mutations;
