export default function ({ $axios, app, env }) {
  $axios.setBaseURL(env.API_URL);
  $axios.setToken(app.$cookies.get("cmsToken"), "Bearer");

  $axios.onRequest((config) => {});

  $axios.onError((error) => {
    app.$toast.error(error.message, { icon: "mdi-alert" });
  });
}
