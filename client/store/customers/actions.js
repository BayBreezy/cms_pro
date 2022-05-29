export default {
  async GetCustomers({ commit }) {
    const response = await this.$axios.get("/api/customers");
    commit("SET_CUSTOMERS", response.data);
  },
  async CreateCustomer({ dispatch }, customer) {
    const response = await this.$axios.post("/api/customers", customer);
    dispatch("GetCustomers");
    return response.data;
  },
  async UpdateCustomer({ dispatch }, customer) {
    const response = await this.$axios.put(
      "/api/customers/" + customer._id,
      customer
    );
    dispatch("GetCustomers");
    return response.data;
  },
};
