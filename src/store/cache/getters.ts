import { GetterTree } from 'vuex';
import { RootStateInterface } from '../index';
import { CacheStateInterface } from './state';

const getters: GetterTree<CacheStateInterface, RootStateInterface> = {
  someGetter (/* context */) {
    // your code
  }
};

export default getters;
