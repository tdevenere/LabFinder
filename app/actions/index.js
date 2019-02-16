import * as MapActions from './mapActions';
import * as featureTypeActions from './featureTypeActions';
import * as projectActions from './projectActions'

export const ActionCreators = Object.assign({},
    MapActions,
    featureTypeActions,
    projectActions,
);
