import { MutationTree } from 'vuex';
import { UserState, Task } from './types';

const mutations: MutationTree<UserState> = {
  setToken(state, token: string) {
    state.token = token;
  },
  setUsername(state, username: string) {
    state.username = username;
  },
  setTaskList(state, taskList: Task[]) {
    state.taskList = taskList;
  },
  addTask(state, task: Task) {
    state.taskList.push(task);
  },
};

export default mutations;
