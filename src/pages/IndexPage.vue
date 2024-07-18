<template>
  <q-page class="flex flex-center q-my-md">
    <q-card class="q-pa-sm q-ma-sm" style="max-width: 720px; width: 100%;">
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
</style>
