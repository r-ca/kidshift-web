<template>
  <QPage class="flex flex-center q-my-md">
    <QLayout view="hHh Lpr lFf">
      <QPageContainer>
        <QTabs v-if="isMobile" v-model="tab" active-color="primary" indicator-color="secondary" align="left" dense>
          <QTab slot="title" name="tab1" v-model="tab" label="タスク一覧" />
          <QTab slot="title" name="tab2" v-model="tab" label="ウォレット" />
        </QTabs>
        <QTabPanels v-if="isMobile" v-model="tab" animated>
          <QTabPanel name="tab1">
            <TaskList :childId=cachedChildId />
          </QTabPanel>
          <QTabPanel name="tab2">
            <TotalComponent :histories=histories />
            <HistoryComponent :histories=histories />
          </QTabPanel>
        </QTabPanels>
        <div v-else class="row justify-center">
          <div class="col-6">
            <QCard class="q-ma-md q-pa-md">
              <div class="text-h6 q-py-md">タスク一覧</div>
              <TaskList :childId=cachedChildId />
            </QCard>
          </div>
          <div class="col-6">
            <WalletComponent :childId=cachedChildId />
          </div>
        </div>
      </QPageContainer>
    </QLayout>
  </QPage>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import TaskList from 'components/TaskListComponent.vue';
import WalletComponent from 'src/components/WalletComponent.vue';
import TotalComponent from 'src/components/TotalComponent.vue';
import HistoryComponent from 'src/components/HistoryComponent.vue';
import useStore from 'src/store';
import { getHistories } from 'src/service/historyService';
import { HistoryItem } from 'src/models/internal';

const store = useStore();
const tab = ref('tab1');

const cachedChildId = computed(() => store.state.account.id);

const isMobile = computed(() => {
  return window.innerWidth < 600; // 600px以下をモバイルデバイスとする
});

const histories = ref([] as HistoryItem[]);

getHistories(cachedChildId.value, true).then((res) => {
  histories.value = res;
});

</script>

<style scoped>
/* 必要に応じてカスタムスタイルを追加 */
</style>
