import { action, computed } from 'easy-peasy';

const PersonsModel = {
  firstPerson: {
    firstName: '',
    setFirstName: action((state, payload) => {
      state.firstName = payload;
    }),
    lastName: '',
    setLastName: action((state, payload) => {
      state.lastName = payload;
    }),
    fullName: computed(state => `${state.firstName} ${state.lastName}`),
  },
  secondPerson: {
    firstName: '',
    setFirstName: action((state, payload) => {
      state.firstName = payload;
    }),
    lastName: '',
    setLastName: action((state, payload) => {
      state.lastName = payload;
    }),
    fullName: computed(state => `${state.firstName} ${state.lastName}`),
  },
};

export default PersonsModel;
