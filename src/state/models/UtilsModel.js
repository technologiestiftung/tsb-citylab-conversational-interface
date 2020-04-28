import { computed } from 'easy-peasy';

const UtilsModel = {
  person2IsPresent: computed(
    [
      (state, storeState) => {
        return storeState.person.person2_lastname;
      },
    ],
    person => person.text != null
  ),
};

export default UtilsModel;
