/**
 *
 * Asynchronously loads the component for Account
 *
 */
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: 'loading...',
});
