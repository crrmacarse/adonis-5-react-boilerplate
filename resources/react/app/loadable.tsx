import Loadable from 'react-loadable';
import BaseLoader from 'components/shared/loader/base';

export default ({ path }: { path: string }) => Loadable({
  loader: () => import(path),
  loading: BaseLoader,
});
