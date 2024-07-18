<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore, Store } from 'vuex';
import { StateInterface } from './store';

export default defineComponent({
  name: 'App',
  setup() {
    const store: Store<StateInterface> = useStore();
    return { store };
  },
});
</script>
