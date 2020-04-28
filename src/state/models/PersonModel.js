import { action, debug } from 'easy-peasy';

const PersonModel = {
  person1_lastname: {
    text: null,
    x: 150,
    y: 575,
  },
  person1_firstname: {
    text: null,
    x: 150,
    y: 545,
  },
  person1_birthname: {
    text: null,
    x: 150,
    y: 527,
  },
  person1_sex: {
    text: null,
    x: 150,
    y: 512,
  },
  person1_birthdata: {
    text: null,
    x: 150,
    y: 498,
  },
  person1_religion: {
    text: null,
    x: 150,
    y: 484,
  },
  person1_nationality: {
    text: null,
    x: 150,
    y: 470,
  },
  person1_alternativename: {
    text: null,
    x: 150,
    y: 456,
  },
  person2_lastname: {
    text: null,
    x: 150,
    y: 417,
  },
  person2_firstname: {
    text: null,
    x: 150,
    y: 388,
  },
  person2_birthname: {
    text: null,
    x: 150,
    y: 370,
  },
  person2_sex: {
    text: null,
    x: 150,
    y: 356,
  },
  person2_birthdata: {
    text: null,
    x: 150,
    y: 341,
  },
  person2_religion: {
    text: null,
    x: 150,
    y: 327,
  },
  person2_nationality: {
    text: null,
    x: 150,
    y: 313,
  },
  person2_alternativename: {
    text: null,
    x: 150,
    y: 299,
  },
  marital_status: {
    text: null,
    x: 42,
    y: 269,
  },
  marital_status_details: {
    text: null,
    x: 150,
    y: 269,
  },
  setField: action((state, payload) => {
    const { field, value } = payload;
    state[field].text = value;
  }),
};

export default PersonModel;
