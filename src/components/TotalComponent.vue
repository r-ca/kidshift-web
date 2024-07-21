<template>
  <q-card class="q-ma-md">
    <q-card-section>
      <div class="text-h5">
        支払予定額: {{ amount }} 円
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { TaskBaseItem } from 'src/models/task';
import { computed } from 'vue';


interface Props {
  tasks: TaskBaseItem[];
}

// Props の取得
const props = defineProps<Props>();

const amount = computed(() => {
  return props.tasks.reduce((acc, task) => acc + task.reward, 0);
});

</script>

<style scoped>
/* 必要に応じてスタイルを追加 */
</style>

