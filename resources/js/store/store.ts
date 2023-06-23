import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => {
    return {
      nb_post: 0 as number,
    };
  },
});
