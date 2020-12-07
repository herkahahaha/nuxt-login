import Cookies from "js-cookie";

function checkCookies(cookie) {
  return cookie && cookie !== "undefined" && cookie !== "null";
}

export default () => ({
  callRefreshToken: null,
  userData: checkCookies(Cookies.get("u"))
    ? JSON.parse(Cookies.get("u"))
    : null,
  userToken: Cookies.get("t") || null,
  userTokenRefresh: Cookies.get("r") || null
});
