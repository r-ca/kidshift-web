import { api } from 'boot/axios';

export const sendPing = async (): Promise<string> => {
  const response = await api.get('/ping');
  return response.data;
};
