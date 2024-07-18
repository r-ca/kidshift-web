import { GetterTree } from 'vuex';
import { UserState } from './types';
import { StateInterface } from '../index';

const getters: GetterTree<UserState, StateInterface> = {
  token: state => state.token,
  username: state => state.username,
  taskList: state => state.taskList,
};

export default getters;
