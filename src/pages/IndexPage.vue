<template>
  <QPage class="flex flex-center q-my-md">
    <QLayout view="hHh Lpr lFf">
      <QPageContainer>
        <QTabs v-if="isMobile" v-model="tab" class="text-teal" align="left" dense>
          <QTab slot="title" name="tab1" v-model="tab" label="タスク一覧" />
          <QTab slot="title" name="tab2" v-model="tab" label="ウォレット" />
        </QTabs>
        <QTabPanels v-if="isMobile" v-model="tab" animated>
          <QTabPanel name="tab1">
            <TaskList />
          </QTabPanel>
          <QTabPanel name="tab2">
            <WalletComponent />
          </QTabPanel>
        </QTabPanels>
        <div v-else class="row justify-center">
          <div class="col-6">
            <QCard class="q-ma-md q-pa-md">
              <div class="text-h6 q-py-md">タスク一覧</div>
              <TaskList />
            </QCard>
          </div>
          <div class="col-6">
            <WalletComponent />
          </div>
        </div>
      </QPageContainer>
    </QLayout>
  </QPage>
</template>

<script setup>
import { ref, computed } from 'vue';
import TaskList from 'components/TaskListComponent.vue';
import WalletComponent from 'src/components/WalletComponent.vue';

const tab = ref('tab1');

const isMobile = computed(() => {
  return window.innerWidth < 600; // 600px以下をモバイルデバイスとする
});
</script>

<style scoped>
/* 必要に応じてカスタムスタイルを追加 */
</style>
