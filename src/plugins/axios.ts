import { App } from 'vue';
import axios, { AxiosInstance } from 'axios';
import { API_BASE_URL } from 'src/const';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 1000, // タイムアウトを設定（ミリ秒）
  headers: { 'Content-Type': 'application/json' } // デフォルトのヘッダーを設定
});

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

export default {
  install: (app: App): void => {
    app.config.globalProperties.$axios = axiosInstance;
  }
};

