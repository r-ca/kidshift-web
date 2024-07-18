export interface Task {
  id: string;
  name: string;
  reward: number;
}

export interface UserState {
  token: string;
  username: string;
  taskList: Task[];
}
