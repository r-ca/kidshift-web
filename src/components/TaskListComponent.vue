<template>
  <QList bordered>
    <QItem v-for="task in tasks" :key="task.id" class="q-py-md q-px-md">
      <QItemSection>
        <QItemLabel>{{ task.name }}</QItemLabel>
        <QItemLabel caption>{{ task.reward }}円</QItemLabel>
      </QItemSection>
      <QItemSection side>
        <QBtn @click="selectTask(task)" label="完了" color="primary" rounded />
      </QItemSection>
    </QItem>
  </QList>
  <QDialog v-model="confirmDialog" backdrop-filter="blur(4px)" persistent>
    <QCard style="max-width: 512px; width: 100%;" class="q-py-sm q-px-sm">
      <QCardSection class="text-h6">タスクを完了しますか？</QCardSection>
      <QCardSection>
        <QItem>
          <QItemSection>
            <QItemLabel>{{ selectedTask.name }}</QItemLabel>
            <QItemLabel caption>{{ selectedTask.reward }}円</QItemLabel>
          </QItemSection>
        </QItem>
      </QCardSection>
      <QCardActions align="right">
        <QBtn label="キャンセル" color="primary" @click="confirmDialog = false" />
        <QBtn label="完了" color="primary" @click="registTaskComplete(selectedTask)" />
      </QCardActions>
    </QCard>
  </QDialog>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getTaskList, completeTask } from 'src/api/apiService';
import { TaskBaseItem, TaskListResponse } from 'src/models/task';
import { useQuasar } from 'quasar';

// Props の型定義
interface Props {
  childId: string;
}

// Props の取得
const props = defineProps<Props>();

const tasks = ref([] as TaskBaseItem[]);
const selectedTask = ref({} as TaskBaseItem);
const confirmDialog = ref(false);
const $q = useQuasar();

const fetchTaskList = async () => {
  const res: TaskListResponse = await getTaskList();
  tasks.value = res.list;
};

const selectTask = (task: TaskBaseItem) => {
  selectedTask.value = task;
  confirmDialog.value = true;
};

const registTaskComplete = (task: TaskBaseItem) => {
  confirmDialog.value = false;
  completeTask(task.id, props.childId).then(() => {
    $q.notify({
      message: 'タスクを完了しました',
      color: 'positive',
      position: 'bottom-left',
    });
    getTaskList().then((res) => {
      tasks.value = res.list;
    });
  });
};

onMounted(() => {
  fetchTaskList();
});

</script>

<style scoped>
.q-btn {
  background-color: #3b5998;
  color: #fff;
}

.q-item-section {
  align-items: center;
}

.q-list {
  background: #f5f5f5;
}
</style>
