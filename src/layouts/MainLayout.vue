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

import useStore from 'src/store';

const store = useStore();

if (store.state.account.isLoggedIn) {
  // debug, show alert
  alert('User is logged in');
} else {
  // debug, show alert
  alert('User is not logged in');
}

defineOptions({
  name: 'MainLayout'
});

</script>
