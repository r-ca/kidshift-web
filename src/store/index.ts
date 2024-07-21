import { createStore } from 'vuex'
import accountStateModule from './account';
import cacheStateModule from './cache';
import { AccountStateInterface } from './account/state';
import createPersistedState from 'vuex-persistedstate';
import { CacheStateInterface } from './cache/state';

export interface RootStateInterface {
  // Define your own store structure, using submodules if needed
  account: AccountStateInterface;
  cache: CacheStateInterface;
}

export default function (/* { ssrContext } */) {
  const store = createStore({
    modules: {
      account: accountStateModule,
      cache: cacheStateModule
    },
    plugins: [createPersistedState({storage: window.localStorage})],

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING === 'true'
  })

  return store
}
