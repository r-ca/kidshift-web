<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="max-width: 400px; width: 100%;">
      <q-card-section>
        <div class="text-h6">タスク一覧</div>
      </q-card-section>
      <q-card-section>
        <TaskList />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import TaskList from 'components/TaskListComponent.vue';
</script>

<style scoped>
.q-page {
  background: #f5f5f5;
}
</style>
