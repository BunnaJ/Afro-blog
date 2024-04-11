// import { createApp } from 'vue'
import { createStore } from "vuex";

export const store = createStore({
  state: {
    // Define your initial state variables here
    post: {},
    loading: false,
    url: `https://public-api.wordpress.com/rest/v1.1/sites/leccelblog.wordpress.com/posts/slug:`,
  },
  mutations: {
    // Define your mutation functions here
    setPost(state, post) {
      state.post = post;
    },
    setLoading(state) {
      state.loading = !state.loading;
    },
  },

  actions: {
    // Define your action functions here
    async fetchPost(context, id) {
     setTimeout(() => {
      context.commit("setLoading");
     }, 0.5);
      try {
        let response = await fetch(context.state.url + id);
        if (!response.ok) {
          throw new Error(`http error: ${response.status}`);
        }
        const data = await response.json();
        console.log("response ",data);
        // this.state.post = data.posts.ID
        context.commit("setPost", data);
      } catch (error) {
        console.log(error);
      } finally {
        context.commit("setLoading");
      }
    },
  },
  getters: {
    // Define your getter functions here
  },
});
