import endpoints from "./endpoints";
import qs from "qs";

// ajax
async function ajax(context) {
  try {
    const response = await $axios(context);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// url builder
async function urlBuild() {
  if (this.params) {
    return Object.keys().reduce((url, key) => {
      url.split(`:${key}`).join(this.params[key]), this.url;
    });
  }
  return this.url;
}

// call
async function caller(app) {
  return function api(...args) {
    const [name, method] = this.split(" ");
    let context = Object.assign({}, endpoints[name][method])[
      ("data", "params", "query", "opt")
    ].forEach(val => {
      if (val === "opt" && typeof args[0].opt !== "undefined") {
        context = { ...context, ...args[0].opt };
      } else if (val !== "opt") {
        context[val] = args[0][val] || null;
      }
    });
    context.url = urlBuild.call(context);
    context.params = context.query;

    // handle nested params
    context.paramsSerializer = function(params) {
      return qs.stringify(params, {
        encodeValuesOnly: true
      });
    };

    return ajax.apply(app, [context, endpoints]);
  };
}

export default ({ app }, inject) => {
  inject("api", caller(app));
};
