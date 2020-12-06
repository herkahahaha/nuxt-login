import Cookies from "js-cookie";

export default {
  mutationAuthCreate(state, payload) {
    state.userData = payload.user;
    state.userToken = payload.token;
    state.userTokenRefresh = payload.refresh;
    Cookies.set("u", state.userData, { expires: 7 });
    Cookies.set("t", state.userToken, { expires: 7 });
    Cookies.set("r", state.userTokenRefresh, { expires: 7 });
    this.$axios.setToken(state.userToken, "Bearer");
  },

  mutationAuthDataUpdate(state, payload) {
    state.userData = payload.user;
    Cookies.set("u", state.userData, { expires: 7 });
  },

  mutationAuthDestroy(state) {
    state.userData = null;
    state.userToken = null;
    state.userTokenRefresh = null;

    Cookies.remove("u");
    Cookies.remove("t");
    Cookies.remove("r");
  }
};
