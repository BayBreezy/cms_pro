export default {
  async GetCustomers({ commit }) {
    try {
      const response = await this.$axios.get("/api/customers");
      commit("SET_CUSTOMERS", response.data);
    } catch (error) {
      console.log(error);
    }
  },
  async DeleteCustomer({ dispatch }, payload) {
    try {
      const response = await this.$axios.delete(
        "/api/customers/" + payload._id
      );
      dispatch("GetCustomers");
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async CreateCustomer({ dispatch }, customer) {
    try {
      const response = await this.$axios.post("/api/customers", customer);
      dispatch("GetCustomers");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async UpdateCustomer({ dispatch }, customer) {
    try {
      const response = await this.$axios.put(
        "/api/customers/" + customer._id,
        customer
      );
      dispatch("GetCustomers");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
