export default {
  async authCreate(context, payload) {
    try {
      const response = await this.$api.call("users.login", payload);
      const responseData = response.data;
      context.commit("mutationAuthCreate", responseData);
      return responseData;
    } catch (error) {
      context.commit("mutationAuthCreate", {});
      context.dispatch("authDestroy");
      throw error;
    }
  },
  authDestroy(context) {
    context.commit("mutationAuthDestroy");
    clearTimeout(context.state.callRefreshToken);
    this.$router.push("/");
  }
};
