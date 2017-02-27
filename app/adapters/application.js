import DRFAdapter from './drf';
import ENV from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DRFAdapter.extend(DataAdapterMixin, {
  authorizer : 'authorizer:token',
  host: ENV.APP.API_HOST,
  namespace: 'api'
});
