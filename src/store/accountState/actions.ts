import { ActionTree } from 'vuex';
import { UserState, Task } from './types';
import { StateInterface } from '../index';

const actions: ActionTree<UserState, StateInterface> = {
  updateToken({ commit }, token: string) {
    commit('setToken', token);
  },
  updateUsername({ commit }, username: string) {
    commit('setUsername', username);
  },
  updateTaskList({ commit }, taskList: Task[]) {
    commit('setTaskList', taskList);
  },
  addTask({ commit }, task: Task) {
    commit('addTask', task);
  },
  completeTask({ commit }, taskId: number) {
    commit('completeTask', taskId);
  },
};

export default actions;
