import { action } from 'easy-peasy';

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
  country_of_previous_residence: {
    text: null,
    x: null,
    y: null,
    setCountry: action((state, payload) => {
      const { movedFromAbroad, country } = payload;
      state.value = movedFromAbroad ? country : '';
    }),
  },
  oldflat_gemeindekennzahl: {
    text: null,
    x: null,
    y: null,
  },
  oldflat_movingindate: {
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
    value: null,
    text: 'x',
    x: null,
    y: null,
    setKeptStatus: action((state, payload) => {
      state.value = payload;
    }),
  },
  oldflat_kept_type: {
    text: '',
    options: {
      hauptwohnung: {
        x: null,
        y: null,
      },
      nebenwohnung: {
        x: null,
        y: null,
      },
    },
    setKeptFlatType: action((state, payload) => {
      state = { state, text: 'x', ...state.options[payload] };
    }),
  },
  other_flats: {
    text: 'x',
    x: null,
    y: null,
  },
  setField: action((state, payload) => {
    const { field, value } = payload;
    state[field].text = value;
  }),
};

export default FlatModel;
