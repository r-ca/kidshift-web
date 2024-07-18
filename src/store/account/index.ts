import { Module } from 'vuex';
import { RootStateInterface } from '../index';
import state, { AccountStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const accountStateModule: Module<AccountStateInterface, RootStateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default accountStateModule;
