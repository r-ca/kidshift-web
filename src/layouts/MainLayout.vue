<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          KidShift for Web
        </q-toolbar-title>
        <q-btn flat round dense icon="refresh" />
        <q-btn flat round dense icon="logout" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { StoreInstance } from '@quasar/app-vite';
import { ref } from 'vue';
import { storeKey, useStore } from 'vuex';

// AccountStateStoreのisLoggedInがfalseなら/loginにリダイレクト

const store = useStore<StoreInstance>(storeKey);

console.log(store.getters['AccountStateStore/isLoggedIn']);

defineOptions({
  name: 'MainLayout'
});

</script>
