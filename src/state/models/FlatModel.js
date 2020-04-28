import { action, debug } from 'easy-peasy';

// TODO: insert actual coords of all fields

const FlatModel = {
  newflat_gemeindekennzahl: {
    text: null,
    x: null,
    y: null,
  },
  newflat_movingindate: {
    text: null,
    x: null,
    y: null,
  },
  newflat_municipality: {
    text: null,
    x: null,
    y: null,
  },
  newflat_address: {
    text: null,
    x: null,
    y: null,
  },
  newflat_type: {
    text: 'x',
    options: {
      alleinige_wohnung: {
        x: 1,
        y: 1,
      },
      hauptwohnung: {
        x: 2,
        y: 2,
      },
      nebenwohnung: {
        x: 3,
        y: 3,
      },
    },
    setFlatType: action((state, payload) => {
      state = { ...state, ...state.options[payload] };
    }),
  },
  country_of_previous_residence: {
    text: null,
    x: null,
    y: null,
    setCountry: action((state, payload) => {
      const { movedFromAbroad, country } = payload;
      state.text = movedFromAbroad ? country : '';
    }),
  },
  oldflat_gemeindekennzahl: {
    text: null,
    x: null,
    y: null,
  },
  oldflat_movingoutdate: {
    text: null,
    x: null,
    y: null,
  },
  oldflat_municipality: {
    text: null,
    x: null,
    y: null,
  },
  oldflat_address: {
    text: null,
    x: null,
    y: null,
  },
  oldflat_type: {
    text: 'x',
    options: {
      alleinige_wohnung: {
        x: null,
        y: null,
      },
      hauptwohnung: {
        x: null,
        y: null,
      },
      nebenwohnung: {
        x: null,
        y: null,
      },
    },
    setFlatType: action((state, payload) => {
      state = { state, ...state.options[payload] };
    }),
  },
  oldflat_iskept: {
    text: 'x',
    options: {
      not_kept: {
        x: 1,
        y: 1,
      },
      hauptwohnung: {
        x: 2,
        y: 2,
      },
      nebenwohnung: {
        x: 3,
        y: 3,
      },
    },
    setKeptFlatStatus: action((state, payload) => {
      state = { ...state, ...state.options[payload] };
    }),
  },
  other_flats: {
    text: 'x',
    options: {
      yes: {
        x: 1,
        y: 1,
      },
      no: {
        x: 2,
        y: 2,
      },
    },
    setOtherFlatsStatus: action((state, payload) => {
      state = { ...state, ...state.options[payload] };
    }),
  },
  setField: action((state, payload) => {
    const { field, value } = payload;
    state[field].text = value;
  }),
};

export default FlatModel;
