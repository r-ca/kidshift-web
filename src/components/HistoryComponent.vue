<template>
  <div class="text-h6" style="display: flex; justify-content: space-between; align-items: center;">
    <span>過去のお手伝い</span>
    <q-checkbox v-model="containPaid"></q-checkbox>
  </div>
  <q-list padding>
    <q-item v-for="(history, index) in props.histories" :key="index" clickable>
      <QIcon name="check" color="positive" class="q-my-auto q-mr-sm" v-if="history.isPaid" />
      <QIcon name="schedule" color="warning" class="q-my-auto q-mr-sm" v-else />
      <q-item-section>
        <q-item-label>{{ history.name }}</q-item-label>
        <!-- <q-item-label caption>{{ task.date }}</q-item-label> -->
      </q-item-section>
      <q-item-section side>
        <q-item-label>{{ history.reward }} 円</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import { HistoryItem } from 'src/models/internal';
import { ref, watch } from 'vue';

interface Props {
  histories: HistoryItem[];
}

// Props の取得
const props = defineProps<Props>();
const emit = defineEmits(['containPaid:checked']);

const containPaid = ref(false);

watch(() => containPaid.value, (value) => {
  console.log(value);
  emit('containPaid:checked', value);
});

</script>

<style scoped>
/* 必要に応じてスタイルを追加 */
</style>
