import { GetterTree } from 'vuex';
import { RootStateInterface } from '../index';
import { CacheStateInterface } from './state';

const getters: GetterTree<CacheStateInterface, RootStateInterface> = {
  getTasks: (state: CacheStateInterface) => {
    return state.tasks;
  }
};

export default getters;
