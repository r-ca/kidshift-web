<template>
  <q-page class="flex flex-center q-my-md">
    <q-card class="q-pa-sm q-ma-sm" style="max-width: 720px; width: 100%;">
      <q-card-section>
        <div class="text-h6">タスク一覧</div>
      </q-card-section>
      <q-card-section>
        <q-tabs
          v-if="isMobile"
          class="text-grey-8"
          active-color="primary"
          indicator-color="primary"
          v-model="tab"
        >
          <q-tab name="tab1" label="Tab 1" />
          <q-tab name="tab2" label="Tab 2" />
          <q-tab name="tab3" label="Tab 3" />
        </q-tabs>

        <q-tab-panels v-else v-model="tab" animated>
          <q-tab-panel name="tab1">
            <TaskList />
          </q-tab-panel>
          <q-tab-panel name="tab2">
            <!-- 他のコンテンツ -->
          </q-tab-panel>
          <q-tab-panel name="tab3">
            <!-- 他のコンテンツ -->
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';
import TaskList from 'components/TaskListComponent.vue';

const tab = ref('tab1');

const isMobile = computed(() => {
  return window.innerWidth < 600; // 600px以下をモバイルデバイスとする
});
</script>

<style scoped>
/* 必要に応じてカスタムスタイルを追加 */
</style>

