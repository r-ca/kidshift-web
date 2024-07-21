import { ActionTree } from 'vuex';
import { RootStateInterface } from '../index';
import { CacheStateInterface } from './state';

const actions: ActionTree<CacheStateInterface, RootStateInterface> = {
  clearCache(context) {
    context.commit('setTasks', []);
  }
};

export default actions;
