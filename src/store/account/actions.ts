import { ActionTree } from 'vuex';
import { RootStateInterface } from '../index';
import { AccountStateInterface } from './state';
import { getMeDetails } from 'src/api/apiService';

const actions: ActionTree<AccountStateInterface, RootStateInterface> = {
  logout(context) {
    context.commit('setToken', '');
    context.commit('setUsername', '');
    context.commit('setLoggedIn', false);
  }
};

export default actions;
