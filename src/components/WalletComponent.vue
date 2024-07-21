<template>
  <q-page>
    <TotalComponent :amount="paymentAmount" />
    <HistoryComponent :tasks="pastTasks" />
  </q-page>
</template>

<script setup lang="ts">
import TotalComponent from 'components/TotalComponent.vue';
import HistoryComponent from 'components/HistoryComponent.vue';

// 仮置きデータ
const paymentAmount = 500; // お手伝いの報酬
const pastTasks = [
  { name: '皿洗い', date: '2024-07-15', amount: 200 },
  { name: '掃除', date: '2024-07-14', amount: 300 },
  { name: '洗濯', date: '2024-07-13', amount: 250 },
]

</script>
