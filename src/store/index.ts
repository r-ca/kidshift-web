import { store } from 'quasar/wrappers';
import { InjectionKey } from 'vue';
import { Router } from 'vue-router';
import { createStore, Store as VuexStore } from 'vuex';
import accountState from './accountState';
import { UserState } from './accountState/types';

export interface StateInterface {
  user: UserState;
}

// Provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>;
  }
}

// Provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> = Symbol('vuex-key');

// Provide typings for `this.$router` inside Vuex stores
declare module 'vuex' {
  export interface Store<S> {
    readonly $router: Router;
  }
}

export default store(function() {
  const Store = createStore<StateInterface>({
    modules: {
      accountState,
    },
  });

  return Store;
});
