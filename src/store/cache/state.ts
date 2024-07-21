import { TaskBaseItem } from "src/models/task";

export interface CacheStateInterface {
  tasks: TaskBaseItem[];
}

function state(): CacheStateInterface {
  return {
    tasks: [],
  };
}

export default state;
