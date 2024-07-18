import { GetterTree } from 'vuex';
import { AccountStateInterface } from './state';

const getters: GetterTree<AccountStateInterface, any> = {
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
