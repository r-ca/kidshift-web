<template>
  <q-page>
    <TotalComponent :tasks=tasks />
    <HistoryComponent :tasks=tasks />
  </q-page>
</template>

<script setup lang="ts">
import TotalComponent from 'components/TotalComponent.vue';
import HistoryComponent from 'components/HistoryComponent.vue';
import { ref } from 'vue';
import { getHistories } from 'src/service/historyService';
import { HistoryItem } from 'src/models/internal';

// Props の型定義
interface Props {
  childId: string;
}

// Props の取得
const props = defineProps<Props>();

const tasks = ref([] as HistoryItem[]);

getHistories(props.childId, true).then((res) => {
  tasks.value = res;
});

</script>
