import { ActionTree } from 'vuex';
import { RootStateInterface } from '../index';
import { CacheStateInterface } from './state';

const actions: ActionTree<CacheStateInterface, RootStateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
