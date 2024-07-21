<template>
  <div class="text-h6">
    過去のお手伝い
  </div>
  <q-list padding>
    <q-item v-for="(history, index) in props.histories" :key="index" clickable>
      <q-item-section>
        <q-item-label>{{ history.name }}</q-item-label>
        <!-- <q-item-label caption>{{ task.date }}</q-item-label> -->
      </q-item-section>
      <q-item-section side>
        <q-item-label>{{ history.reward }} 円</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import { HistoryItem } from 'src/models/internal';

interface Props {
  histories: HistoryItem[];
}

// Props の取得
const props = defineProps<Props>();

</script>

<style scoped>
/* 必要に応じてスタイルを追加 */
</style>
