<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="max-width: 400px; width: 100%;">
      <q-card-section>
        <div class="text-h6">KidShiftにログイン</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="login">
          <q-input
            v-model="loginCode"
            type="text"
            label="ログインコード"
            mask="####-####"
            fill-mask
            :rules="[val => val.length === 9 || 'ログインコードは8桁の数字です']"
            outlined
          />
          <q-btn type="submit" label="ログイン" color="primary" class="q-mt-md" :disable="!canLogin" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';

const loginCode = ref('');

const canLogin = computed(() => loginCode.value.length === 9);

const login = () => {
  if (canLogin.value) {
    alert('Login successful!');
  }
};
</script>

<style scoped>
.q-page {
  background: #f5f5f5;
}
</style>
