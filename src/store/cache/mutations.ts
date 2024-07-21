import { TaskBaseItem } from 'src/models/task';
import { MutationTree } from 'vuex';
import { CacheStateInterface } from './state';

const mutation: MutationTree<CacheStateInterface> = {
  setTasks(state: CacheStateInterface, tasks: TaskBaseItem[]) {
    state.tasks = tasks;
  },
};

export default mutation;
