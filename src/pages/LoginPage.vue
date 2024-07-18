<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="max-width: 400px; width: 100%;">
      <q-card-section>
        <div class="text-h6">KidShiftにログイン</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="login">
          <q-input v-model="loginCode" type="text" label="ログインコード" mask="########" fill-mask
            :rules="[val => val.length === 8 || 'ログインコードは8桁の数字です']" outlined />
          <q-btn type="submit" label="ログイン" color="primary" class="q-mt-md" :disable="!canLogin" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import useStore from 'src/store';
import { loginWithCode } from 'src/api/apiService';
import router from 'src/router';

const loginCode = ref('');

const canLogin = computed(() => loginCode.value.length === 8);

const store = useStore();

const login = () => {
  if (canLogin.value) {
    loginWithCode(loginCode.value).then((accessToken) => {
      store.commit('account/setToken', accessToken);
      store.commit('account/setLoggedIn', true);
      router.push('/');
    }).catch((error) => {
      alert('ログインエラー: ' + error);
    });
  }
};
</script>

<style scoped>
.q-page {
  background: #f5f5f5;
}
</style>
