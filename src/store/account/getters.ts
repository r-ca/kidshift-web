import { GetterTree } from 'vuex';
import { RootStateInterface } from '../index';
import { AccountStateInterface } from './state';

const getters: GetterTree<AccountStateInterface, RootStateInterface> = {
  getId(state: AccountStateInterface): string {
    return state.id;
  },
  getToken(state: AccountStateInterface): string {
    return state.token;
  },
  getUsername(state: AccountStateInterface): string {
    return state.username;
  },
  isLoggedIn(state: AccountStateInterface): boolean {
    return state.isLoggedIn;
  }
};

export default getters;
