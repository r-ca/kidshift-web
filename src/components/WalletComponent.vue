<template>
  <QPage>
    <TotalComponent :histories=histories />
    <HistoryWrappedComponent :histories=histories @containPaid:checked="changeContainPaid" />
  </QPage>
</template>

<script setup lang="ts">
import TotalComponent from 'components/TotalComponent.vue';
import HistoryWrappedComponent from './HistoryWrappedComponent.vue';
import { ref } from 'vue';
import { getHistories } from 'src/service/historyService';
import { HistoryItem } from 'src/models/internal';

// Props の型定義
interface Props {
  childId: string;
}

// Props の取得
const props = defineProps<Props>();

const histories = ref([] as HistoryItem[]);

const changeContainPaid = (value: boolean) => {
  getHistories(props.childId, value).then((res) => {
    histories.value = res;
  });
};

getHistories(props.childId, false).then((res) => {
  histories.value = res;
});

</script>
