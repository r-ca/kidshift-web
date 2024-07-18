<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          KidShift for Web
        </q-toolbar-title>
        <q-btn flat round dense icon="refresh" @click="doRefresh()"/>
        <q-btn flat round dense icon="logout" @click="doLogout()"/>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">

import useStore from 'src/store';
import router from 'src/router';

const store = useStore();

if (!store.state.account.isLoggedIn) {
  // to /login
  router.push('/login');
}

const doRefresh = () => {
  console.log('doRefresh');
};

const doLogout = () => {
  console.log('doLogout');
  store.dispatch('account/logout');
  router.push('/login');
};

defineOptions({
  name: 'MainLayout'
});

</script>
