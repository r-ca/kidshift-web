import { api } from 'boot/axios';
import { ChildDetailsResponse } from 'src/models/child';

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
