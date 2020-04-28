import DataModel from './DataModel';
import PersonsModel from './PersonsModel'; // TODO: remove
import FlatModel from './FlatModel';
import PersonModel from './PersonModel';
import UtilsModel from './UtilsModel';

export default {
  data: DataModel,
  flats: FlatModel,
  person: PersonModel,
  utils: UtilsModel,
  ...PersonsModel, // TODO: remove
};
