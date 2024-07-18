import { createStore } from 'vuex'
import accountStateModule from './account';
import { AccountStateInterface } from './account/state';

export interface RootStateInterface {
  // Define your own store structure, using submodules if needed
  account: AccountStateInterface;
}

export default function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      accountStateModule
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING === 'true'
  })

  return Store
}
