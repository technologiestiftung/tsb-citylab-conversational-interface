import { action, debug } from 'easy-peasy';

const FlatModel = {
  newflat_gemeindekennzahl: {
    text: '',
    x: 183,
    y: 754,
  },
  newflat_movingindate: {
    text: '',
    x: 42,
    y: 699,
  },
  newflat_municipality: {
    text: '',
    x: 106,
    y: 699,
  },
  newflat_address: {
    text: '',
    x: 42,
    y: 672,
  },
  newflat_type: {
    text: 'x',
    options: {
      alleinige_wohnung: {
        x: 133,
        y: 734,
      },
      hauptwohnung: {
        x: 193,
        y: 734,
      },
      nebenwohnung: {
        x: 248,
        y: 734,
      },
    },
    setFlatType: action((state, payload) => {
      state = { ...state, ...state.options[payload] };
    }),
  },
  country_of_previous_residence: {
    text: '',
    x: 430,
    y: 646,
    setCountry: action((state, payload) => {
      const { movedFromAbroad, country } = payload;
      state.text = movedFromAbroad ? country : '';
    }),
  },
  oldflat_gemeindekennzahl: {
    text: '',
    x: 452,
    y: 754,
  },
  oldflat_movingoutdate: {
    text: '',
    x: 310,
    y: 699,
  },
  oldflat_municipality: {
    text: '',
    x: 377,
    y: 699,
  },
  oldflat_address: {
    text: '',
    x: 308,
    y: 672,
  },
  oldflat_type: {
    text: 'x',
    options: {
      alleinige_wohnung: {
        x: 414,
        y: 734,
      },
      hauptwohnung: {
        x: 463,
        y: 734,
      },
      nebenwohnung: {
        x: 516,
        y: 734,
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
        x: 206,
        y: 628,
      },
      hauptwohnung: {
        x: 340,
        y: 628,
      },
      nebenwohnung: {
        x: 446,
        y: 628,
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
        x: 391,
        y: 612,
      },
      no: {
        x: 340,
        y: 612,
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
