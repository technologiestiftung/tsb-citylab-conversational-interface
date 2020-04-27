import DataModel from './DataModel';
import PersonsModel from './PersonsModel';
import FlatModel from './FlatModel';

export default {
  data: DataModel,
  flats: FlatModel,
  ...PersonsModel,
};
