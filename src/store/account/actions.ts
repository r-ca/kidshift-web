import { ActionTree } from 'vuex';
import { RootStateInterface } from '../index';
import { AccountStateInterface } from './state';
import { getChildDetails } from 'src/api/apiService';

const actions: ActionTree<AccountStateInterface, RootStateInterface> = {
  logout(context) {
    context.commit('setToken', '');
    context.commit('setUsername', '');
    context.commit('setLoggedIn', false);
  },
  fetchAccount(context) {
    }
};

export default actions;
