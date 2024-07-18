<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="max-width: 400px; width: 100%;">
      <q-card-section>
        <div class="text-h6">Login</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="login">
          <q-input
            v-model="loginCode"
            type="text"
            label="Enter 8-digit code"
            mask="########"
            fill-mask
            :rules="[val => val.length === 8 || 'Code must be 8 digits']"
            outlined
          />
          <q-btn type="submit" label="Login" color="primary" class="q-mt-md" :disable="!canLogin" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';

const loginCode = ref('');

const canLogin = computed(() => loginCode.value.length === 8);

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
