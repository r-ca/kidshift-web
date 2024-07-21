<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <QAvatar icon="family_restroom" />
        <q-toolbar-title>
          KidShift  <span class="subtitle-childname" >{{ store.state.account.username }}</span> <!-- TODO: ハードコードやめる -->
        </q-toolbar-title>
        <q-btn flat round dense class="q-mx-sm" icon="refresh" @click="doRefresh()" />
        <q-btn flat round dense class="q-mx-sm" icon="logout" @click="doLogout()" />
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
import { getMeDetails } from 'src/api/apiService';
import { useQuasar } from 'quasar';

const store = useStore();
const $q = useQuasar();

if (!store.state.account.isLoggedIn) {
  // to /login
  router.push('/login');
}

const doRefresh = () => {
  console.log('doRefresh');
  // update user info
  getMeDetails().then((res) => {
    store.commit('account/setId', res.id);
    store.commit('account/setUsername', res.name);
  }).then(() => {
    $q.notify({
      message: 'ユーザー情報を更新しました',
      color: 'positive',
      position: 'bottom-left',
    });
  });
};

const doLogout = () => {
  console.log('doLogout');
  store.dispatch('account/logout');
  $q.notify({
    message: 'ログアウトしました',
    color: 'positive',
    position: 'bottom-left',
  });
  router.push('/login');
};

defineOptions({
  name: 'MainLayout'
});

</script>

<style lang="scss">

.subtitle-childname {
  font-size: 0.6em;
  color: darken(white, 10%);
}

</style>
