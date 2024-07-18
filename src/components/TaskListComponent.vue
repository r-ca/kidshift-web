<template>
  <q-list bordered>
    <q-item v-for="task in tasks" :key="task.id" class="q-py-sm q-px-md">
      <q-item-section>
        <q-item-label>{{ task.name }}</q-item-label>
        <q-item-label caption>{{ task.price }}円</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-btn @click="completeTask(task)" label="完了" color="primary" rounded/>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup>
import { getTaskList } from 'src/api/apiService';

// get and set tasks
const tasks = await getTaskList();

const completeTask = (task) => {
  // 完了ボタンが押されたときの処理をここに記述します
  console.log(`${task.name}が完了しました`);
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
