<template>
  <QCard class="q-ma-md">
    <QCardSection>
      <HistoryComponent :histories=props.histories @containPaid:checked="handleContainPaidCheckbox"/>
    </QCardSection>
  </QCard>
</template>

<script setup lang="ts">

import HistoryComponent from 'src/components/HistoryComponent.vue';
import { HistoryItem } from 'src/models/internal';

interface Props {
  histories: HistoryItem[];
}

const props = defineProps<Props>();

const handleContainPaidCheckbox = (value: boolean) => {
  console.log(value);
};

</script>
