import { ActionTree } from 'vuex';
import { RootStateInterface } from '../index';
import { AccountStateInterface } from './state';

const actions: ActionTree<AccountStateInterface, RootStateInterface> = {
  logout(context) {
    context.commit('setToken', '');
    context.commit('setUsername', '');
    context.commit('setLoggedIn', false);
  }
};

export default actions;
