import { createStore } from 'vuex'
import accountStateModule from './account';
import { AccountStateInterface } from './account/state';
import createPersistedState from 'vuex-persistedstate';

export interface RootStateInterface {
  // Define your own store structure, using submodules if needed
  account: AccountStateInterface;
}

export default function (/* { ssrContext } */) {
  const store = createStore({
    modules: {
      account: accountStateModule
    },
    plugins: [createPersistedState({storage: window.sessionStorage})],

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING === 'true'
  })

  return store
}
