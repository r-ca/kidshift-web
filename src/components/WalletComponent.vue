<template>
  <q-page>
    <TotalComponent :tasks=tasks />
    <HistoryComponent :tasks=tasks />
  </q-page>
</template>

<script setup lang="ts">
import TotalComponent from 'components/TotalComponent.vue';
import HistoryComponent from 'components/HistoryComponent.vue';
import { getHistory } from 'src/api/apiService';
import { TaskBaseItem } from 'src/models/task';
import { ref } from 'vue';

// Props の型定義
interface Props {
  childId: string;
}

// Props の取得
const props = defineProps<Props>();

const tasks = ref([] as TaskBaseItem[]);

getHistory(props.childId).then((res) => {
  tasks.value = res.list;
});

</script>
