<template>
  <router-view />
</template>

<script setup lang="ts">

import useStore from 'src/store';
import { getMeDetails } from './api/apiService';

const store = useStore();

// 非同期で更新
getMeDetails().then((res) => {
  store.commit('account/setId', res.id);
  store.commit('account/setUsername', res.name);
});

defineOptions({
  name: 'App'
});
</script>
