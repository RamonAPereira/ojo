import { defineStore } from "pinia";

export const useFilms = defineStore("main", {
  state: () => {
    return {
      films: null,
    };
  },
  actions: {
    async setFilmsInfo() {
      const response = await fetch("https://swapi.dev/api/films");
      const data = await response.json();
      this.films = data;
    },
  },
  getters: {
    getFilms: (state) => state,
  },
});
