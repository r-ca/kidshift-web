<template>
  <q-card class="q-ma-md">
    <q-card-section class="row items-center">
      <q-icon name="attach_money" class="text-primary q-mr-md" size="42px" />
      <div>
        <div class="text-h6">支払予定額</div>
        <div class="text-h5 text-bold">{{ formattedAmount }} 円</div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { HistoryItem } from 'src/models/internal';

interface Props {
  histories: HistoryItem[];
}

const props = defineProps<Props>();

const amount = computed(() => {
  return props.histories.reduce((acc, history) => acc + history.reward, 0);
});

const formattedAmount = computed(() => {
  return amount.value.toLocaleString();
});
</script>

<style scoped>
.text-bold {
  font-weight: bold;
}
</style>

