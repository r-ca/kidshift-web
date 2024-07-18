import { Module } from 'vuex';
import { UserState } from './types';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import { StateInterface } from '../index';

const userModule: Module<UserState, StateInterface> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default userModule;
