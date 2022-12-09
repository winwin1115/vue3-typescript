import { createStore } from "vuex";
import Task from "@/models/Task";
import { findIndex } from "lodash";

export default createStore({
  state: {
    tasks: [
      {
        name: "Demo for VueJs and TS",
        createdAt: new Date(),
        updatedAt: new Date(),
        completed: false,
      },
      {
        name: "UI design",
        createdAt: new Date(),
        updatedAt: new Date(),
        completed: false
      }
    ] as Task[]
  },
  getters: {},
  mutations: {
    setTask: (state, task) => state.tasks.push(task),
    deleteTask(state, task) {
      let taskIndex = findIndex(state.tasks, task);
      state.tasks[taskIndex].completed = true;
    }
  },
  actions: {},
  modules: {},
});
