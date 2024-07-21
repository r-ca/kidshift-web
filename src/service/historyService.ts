import { HistoryListResponse, HistoryResponse } from "src/models/history";
import { HistoryItem } from "src/models/internal";
import { getHistory } from "src/api/apiService";
import useStore from "src/store";

const store = useStore();

async function getHistories(childId: string, containPaid?: boolean): Promise<HistoryItem[]> {
  const HistoriesResponse = await getHistory(childId, containPaid);
  const taskList = store.state.cache.tasks; // use cache

  const result: HistoryItem[] = HistoriesResponse.list.map((history) => {
    const task = taskList.find((task) => task.id === history.taskId);
    return {
      id: history.id,
      name: task?.name || "Error!, please reload",
      reward: task?.reward || 0,
      isPaid: history.isPaid,
    };
  });

  return result;
}


export { getHistories };
