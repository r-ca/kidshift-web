import { api } from 'boot/axios';
import { ChildDetailsResponse } from 'src/models/child';
import { HistoryListResponse } from 'src/models/history';
import { TaskListResponse } from 'src/models/task';
import useStore from 'src/store';

const store = useStore();

export const sendPing = async (): Promise<string> => {
  const response = await api.get('/meta/ping');
  return response.data;
};

export const loginWithCode = async (code: string): Promise<string> => {
  const response = await api.post('/child/auth/login', { loginCode: code })
  return response.data.accessToken;
}

export const getChildDetails = async (childId: string): Promise<ChildDetailsResponse> => {
  const response = await api.get(`/child/${childId}`);
  if (response.status !== 200) {
    throw new Error('ユーザー情報の取得に失敗しました');
  }
  return response.data;
}

export const getMeDetails = async (): Promise<ChildDetailsResponse> => {
  const response = await api.get(`/child/me`);
  if (response.status !== 200) {
    throw new Error('ユーザー情報の取得に失敗しました');
  }
  return response.data;
}

export const getTaskList = async (): Promise<TaskListResponse> => {
  const response = await api.get(`/task`);
  if (response.status !== 200) {
    throw new Error('タスク情報の取得に失敗しました');
  }
  store.commit('cache/setTasks', response.data.list); // Update cache
  return response.data;
}

export const completeTask = async (taskId: string, childId: string): Promise<void> => {
  const params = new URLSearchParams();
  params.append('childId', childId);
  const response = await api.post(`/task/${taskId}/complete`, {}, { params });
  if (response.status !== 200) {
    throw new Error('タスクの完了に失敗しました');
  }
}

export const getHistory = async (childId: string, containPaid?: boolean): Promise<HistoryListResponse> => {
  if (containPaid !== undefined) {
    const response = await api.get(`/task/history/${childId}`, { params: { containPaid } });
    if (response.status !== 200) {
      throw new Error('履歴情報の取得に失敗しました');
    }
    return response.data;
  }
  const response = await api.get(`/task/history/${childId}`);
  if (response.status !== 200) {
    throw new Error('履歴情報の取得に失敗しました');
  }
  return response.data;
}
