<template>
  <q-page class="q-pa-md">
    <payment-amount :amount="paymentAmount" />
    <past-tasks :tasks="pastTasks" />
  </q-page>
</template>

<script>
import PaymentAmount from 'components/TotalComponent.vue';
import PastTasks from 'components/HistoryComponent.vue';

export default {
  components: {
    PaymentAmount,
    PastTasks
  },
  data() {
    return {
      paymentAmount: 5000, // 支払予定額
      pastTasks: [
        { name: '皿洗い', date: '2024-07-15', amount: 200 },
        { name: '掃除', date: '2024-07-14', amount: 300 },
        { name: '洗濯', date: '2024-07-13', amount: 250 },
      ], // 過去のお手伝い
    };
  }
};

</script>
