import { MutationTree } from 'vuex';
import { AccountStateInterface } from './state';

const mutation: MutationTree<AccountStateInterface> = {
  setId(state: AccountStateInterface, id: string) {
    state.id = id;
  },
  setToken(state: AccountStateInterface, token: string) {
    state.token = token;
  },
  setUsername(state: AccountStateInterface, username: string) {
    state.username = username;
  },
  setLoggedIn(state: AccountStateInterface, isLoggedIn: boolean) {
    state.isLoggedIn = isLoggedIn;
  }
};

export default mutation;
