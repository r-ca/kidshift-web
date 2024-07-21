<template>
  <q-card class="q-ma-md">
    <q-card-section>
      <div class="text-h6">
        過去のお手伝い
      </div>
      <q-list bordered padding>
        <q-item v-for="(task, index) in tasks" :key="index" clickable>
          <q-item-section>
            <q-item-label>{{ task.name }}</q-item-label>
            <q-item-label caption>{{ task.date }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label>{{ task.amount }} 円</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'PastTasks',
  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
/* 必要に応じてスタイルを追加 */
</style>

