export default function ({ $axios, app, env, store }) {
  $axios.setBaseURL(env.API_URL);
  $axios.setToken(app.$cookies.get("cmsToken"), "Bearer");

  $axios.onRequest((config) => {
    store.commit("utils/setLoader", true);
  });
  $axios.onResponse((res) => {
    store.commit("utils/setLoader", false);
  });

  $axios.onError((error) => {
    store.commit("utils/setLoader", false);
    app.$toast.error(
      error.response?.data.message || "Somethign went wrong. Try again.",
      { icon: "mdi-alert" }
    );
  });
}
