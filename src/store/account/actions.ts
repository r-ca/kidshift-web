import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AccountStateInterface } from './state';

const actions: ActionTree<AccountStateInterface, StateInterface> = {
  logout(context) {
    context.commit('setToken', '');
    context.commit('setUsername', '');
    context.commit('setLoggedIn', false);
  }
};

export default actions;
