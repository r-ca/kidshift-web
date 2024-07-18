import { boot } from 'quasar/wrappers';
import axiosPlugin from 'src/plugins/axios';

export default boot(({ app }) => {
  app.use(axiosPlugin);
});

