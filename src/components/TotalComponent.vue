<template>
  <QCard class="q-ma-md">
    <QCardSection>
      <div class="text-h5">
        支払予定額: {{ amount }} 円
      </div>
    </QCardSection>
  </QCard>
</template>

<script setup lang="ts">
import { HistoryItem } from 'src/models/internal';
import { computed } from 'vue';


interface Props {
  histories: HistoryItem[];
}

// Props の取得
const props = defineProps<Props>();

const amount = computed(() => {
  return props.histories.reduce((acc, history) => acc + history.reward, 0);
});

</script>

<style scoped>
/* 必要に応じてスタイルを追加 */
</style>

