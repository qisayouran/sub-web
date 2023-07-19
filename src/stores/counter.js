import { defineStore } from "pinia"

// export const useCounterStore = defineStore({
//   id: "counter",
//   state: () => ({
//     counter: 0,
//   }),
//   getters: {
//     doubleCount: (state) => state.counter * 2,
//   },
//   actions: {
//     increment() {
//       this.counter++
//     },
//   },
// })

export const useThemeStore = defineStore({
  id: "theme",
  state: () => ({
    selectTheme: "",
  }),
  getters: {},
  actions: {
    changeTheme() {
      if (this.selectTheme == "dark") {
        this.selectTheme = "defult"
      } else {
        this.selectTheme = "dark"
      }
    },
  },
  persist: true,
})
