import { Module } from 'vuex';
import { RootStateInterface } from '../index';
import state, { CacheStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const exampleModule: Module<CacheStateInterface, RootStateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default exampleModule;
