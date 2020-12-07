export default {
  async create(context, payload) {
    try {
      const response = await this.$api.call("users.create", payload);
      const data = response.data;
      return data;
    } catch (error) {
      throw error;
    }
  }
};

// auth destroy
// authOtpActivasion
