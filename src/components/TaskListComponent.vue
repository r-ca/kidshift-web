<template>
  <q-list bordered>
    <q-item v-for="task in tasks" :key="task.id" class="q-py-md q-px-md">
      <q-item-section>
        <q-item-label>{{ task.name }}</q-item-label>
        <q-item-label caption>{{ task.reward }}円</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-btn @click="completeTask(task)" label="完了" color="primary" rounded/>
      </q-item-section>
    </q-item>
  </q-list>
  <q-dialog v-model="confirmDialog" backdrop-filter="blur(4px)" persistent>
    <q-card style="max-width: 512px; width: 100%;" class="q-py-sm q-px-sm">
      <q-card-section class="text-h6">タスクを完了しますか？</q-card-section>
      <q-card-section>
        <q-item>
          <q-item-section>
            <q-item-label>{{ selectedTask.name }}</q-item-label>
            <q-item-label caption>{{ selectedTask.reward }}円</q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn label="キャンセル" color="primary" @click="confirmDialog = false" />
        <q-btn label="完了" color="primary" @click="confirmDialog = false" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { getTaskList } from 'src/api/apiService';

// get and set tasks
let tasks = ref([]);
let selectedTask = ref(null);
let confirmDialog = ref(false);

getTaskList().then((res) => {
  console.log(res);
  tasks.value = res.list;
});

const completeTask = (task) => {
  // 完了ボタンが押されたときの処理をここに記述します
  console.log(`${task.name}が完了しました`);

  selectedTask.value = task;
  confirmDialog.value = true;
};
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
