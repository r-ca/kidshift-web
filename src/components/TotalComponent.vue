<template>
  <q-card class="q-ma-md">
    <q-card-section>
      <div class="text-h5">
        支払予定額: {{ amount }} 円
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'TotalComponent',
  props: {
    amount: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
/* 必要に応じてスタイルを追加 */
</style>

