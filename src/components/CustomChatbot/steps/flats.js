import { useStoreActions } from 'easy-peasy';
import Store from '~/state/Store';

export default function useFlatSteps() {
  const setField = useStoreActions(state => state.flats.setField);
  const setNewFlatType = useStoreActions(
    state => state.flats.newflat_type.setFlatType
  );
  const setOldFlatType = useStoreActions(
    state => state.flats.oldflat_type.setFlatType
  );
  const setKeptFlatStatus = useStoreActions(
    state => state.flats.oldflat_iskept.setKeptFlatStatus
  );
  const setOtherFlatsStatus = useStoreActions(
    state => state.flats.other_flats.setOtherFlatsStatus
  );
  const setCountry = useStoreActions(
    state => state.flats.country_of_previous_residence.setCountry
  );

  const partnerIsPresent = false; // TODO: get info from store

  const steps = [
    {
      id: `newflat_movingindate_1`,
      message: () => {
        const phrasingDistinction = partnerIsPresent
          ? 'werdet Ihr in Eure'
          : 'wirst Du in Deine';

        return `An welchem Datum ${phrasingDistinction} neue Wohnung einziehen?`;
      },
      trigger: `newflat_movingindate_2`,
    },
    {
      id: `newflat_movingindate_2`,
      user: true,
      trigger: input => {
        setField({ field: `newflat_movingindate`, value: input.value });
        return `newflat_municipality_1`;
      },
    },
    {
      id: `newflat_municipality_1`,
      message: () => {
        const phrasingDistinction = partnerIsPresent ? 'Eurer' : 'Deiner';

        return `Bitte nenne mir zunächst Postleitzahl, Gemeinde und ggfs. Ortsteil ${phrasingDistinction} neuen Wohnung.`;
      },
      trigger: `newflat_municipality_2`,
    },
    {
      id: `newflat_municipality_2`,
      user: true,
      placeholder: `Postleitzahl, Gemeinde, Ortsteil`,
      trigger: input => {
        setField({ field: `newflat_municipality`, value: input.value });
        return `newflat_address_1`;
      },
    },
    {
      id: `newflat_address_1`,
      message: `Als nächstes benötige ich die Straße und Hausnummer der Wohnung.`,
      trigger: `newflat_address_2`,
    },
    {
      id: `newflat_address_2`,
      user: true,
      placeholder: `Straße, Hausnummer, ggfs. Zusätze`,
      trigger: input => {
        setField({ field: `newflat_address`, value: input.value });
        return `newflat_gemeindekennzahl_1`;
      },
    },
    {
      id: `newflat_gemeindekennzahl_1`,
      message: () => {
        const municipality = Store.getState().flats.newflat_municipality.text;

        return `Jetzt trage hier bitte den Amtlichen Gemeindeschlüssel von ${municipality} ein.`;
      },
      trigger: `newflat_gemeindekennzahl_2`,
    },
    {
      id: `newflat_gemeindekennzahl_2`,
      user: true,
      placeholder: `Tipp: Suche einfach bei Google nach 'Amtlicher Gemeindeschlüssel'.`,
      trigger: input => {
        setField({ field: `newflat_gemeindekennzahl`, value: input.value });
        return `newflat_type_1`;
      },
    },
    {
      id: `newflat_type_1`,
      message: () => {
        const phrasingDistinction = partnerIsPresent ? 'Eure' : 'Deine';

        return `Die neue Wohnung ist ${phrasingDistinction}... ?`;
      },
      trigger: `newflat_type_2`,
    },
    {
      id: `newflat_type_2`,
      options: [
        {
          value: `alleinige_wohnung`,
          label: `Alleinige Wohnung`,
          trigger: input => {
            setNewFlatType(input.value);
            return `country_of_previous_residence_1`;
          },
        },
        {
          value: `hauptwohnung`,
          label: `Hauptwohnung`,
          trigger: input => {
            setNewFlatType(input.value);
            return `country_of_previous_residence_1`;
          },
        },
        {
          value: `nebenwohnung`,
          label: `Nebenwohnung`,
          trigger: input => {
            setNewFlatType(input.value);
            return `country_of_previous_residence_1`;
          },
        },
      ],
    },
    {
      id: `country_of_previous_residence_1`,
      message: () => {
        const phrasingDistinction = partnerIsPresent ? 'Euer' : 'Dein';

        return `In welchem Staat befand sich ${phrasingDistinction} letzter Wohnsitz?`;
      },
      trigger: `country_of_previous_residence_2`,
    },
    {
      id: `country_of_previous_residence_2`,
      options: [
        {
          value: `Deutschland`,
          label: `Deutschland`,
          trigger: input => {
            setCountry({ movedFromAbroad: false, country: input.value });
            return `oldflat_municipality_1`;
          },
        },
        {
          value: `Anderes Land`,
          label: `Anderer Staat`,
          trigger: `country_of_previous_residence_3`,
        },
      ],
    },
    {
      id: `country_of_previous_residence_3`,
      message: () => {
        const phrasingDistinction = partnerIsPresent
          ? 'Ihr zugezogen seid'
          : 'Du zugezogen bist';

        return `Bitte nenne nun den Staat, aus dem ${phrasingDistinction}.`;
      },
      trigger: `country_of_previous_residence_4`,
    },
    {
      id: `country_of_previous_residence_4`,
      user: true,
      trigger: input => {
        setCountry({ movedFromAbroad: true, country: input.value });
        setOtherFlatsStatus(`no`);
        return null;
      },
    },
    {
      id: `oldflat_municipality_1`,
      message: () => {
        const phrasingDistinction = partnerIsPresent ? 'Eurer' : 'Deiner';

        return `Bitte nenne nun Postleitzahl, Gemeinde und ggfs. Ortsteil ${phrasingDistinction} bisherigen Wohnung im Inland.`;
      },
      trigger: `oldflat_municipality_2`,
    },
    {
      id: `oldflat_municipality_2`,
      user: true,
      placeholder: `Postleitzahl, Gemeinde, Ortsteil`,
      trigger: input => {
        setField({ field: `oldflat_municipality`, value: input.value });
        return `oldflat_address_1`;
      },
    },
    {
      id: `oldflat_address_1`,
      message: `Wie lautet die Adresse der bisherigen Wohnung?`,
      trigger: `oldflat_address_2`,
    },
    {
      id: `oldflat_address_2`,
      user: true,
      placeholder: `Straße, Hausnummer, ggfs. Zusätze`,
      trigger: input => {
        setField({ field: `oldflat_address`, value: input.value });
        return `oldflat_gemeindekennzahl_1`;
      },
    },
    {
      id: `oldflat_gemeindekennzahl_1`,
      message: `Nun benötige ich auch den Amtlichen Gemeindeschlüssel der bisherigen Wohnung.`,
      trigger: `oldflat_gemeindekennzahl_2`,
    },
    {
      id: `oldflat_gemeindekennzahl_2`,
      user: true,
      trigger: input => {
        setField({ field: `oldflat_gemeindekennzahl`, value: input.value });
        return `oldflat_movingoutdate_1`;
      },
    },
    {
      id: `oldflat_movingoutdate_1`,
      message: `An welchem Datum erfolgte der Auszug aus dieser Wohnung?`,
      trigger: `oldflat_movingoutdate_2`,
    },
    {
      id: `oldflat_movingoutdate_2`,
      user: true,
      trigger: input => {
        setField({ field: `oldflat_movingoutdate`, value: input.value });
        return `oldflat_type_1`;
      },
    },
    {
      id: `oldflat_type_1`,
      message: () => {
        const phrasingDistinction = partnerIsPresent ? 'Eure' : 'Deine';

        return `Die bisherige Wohnung war ${phrasingDistinction}... ?`;
      },
      trigger: `oldflat_type_2`,
    },
    {
      id: `oldflat_type_2`,
      options: [
        {
          value: `alleinige_wohnung`,
          label: `Alleinige Wohnung`,
          trigger: input => {
            setOldFlatType(input.value);
            return `oldflat_iskept_1`;
          },
        },
        {
          value: `hauptwohnung`,
          label: `Hauptwohnung`,
          trigger: input => {
            setOldFlatType(input.value);
            return `oldflat_iskept_1`;
          },
        },
        {
          value: `nebenwohnung`,
          label: `Nebenwohnung`,
          trigger: input => {
            setOldFlatType(input.value);
            return `oldflat_iskept_1`;
          },
        },
      ],
    },
    {
      id: `oldflat_iskept_1`,
      message: () => {
        const phrasingDistinction = partnerIsPresent ? 'Eure' : 'Deine';

        return `Falls diese Wohnung beibehalten wird, wird sie ${phrasingDistinction} Haupt- oder Nebenwohnung?`;
      },
      trigger: `oldflat_iskept_2`,
    },
    {
      id: `oldflat_iskept_2`,
      options: [
        {
          value: `not_kept`,
          label: `Die Wohnung wird nicht beibehalten`,
          trigger: input => {
            setKeptFlatStatus(input.value);
            return `other_flats_1`;
          },
        },
        {
          value: `hauptwohnung`,
          label: `Hauptwohnung`,
          trigger: input => {
            setKeptFlatStatus(input.value);
            return `other_flats_1`;
          },
        },
        {
          value: `nebenwohnung`,
          label: `Nebenwohnung`,
          trigger: input => {
            setKeptFlatStatus(input.value);
            return `other_flats_1`;
          },
        },
      ],
    },
    {
      id: `other_flats_1`,
      message: () => {
        const person2 = `other person`; // TODO: get name from store
        return `Haben Du oder ${person2} noch weitere Wohnungen in Deutschland? (Falls ja, siehe: ...)`; // TODO: find link
      },
      trigger: `other_flats_2`,
    },
    {
      id: `other_flats_2`,
      options: [
        {
          value: `yes`,
          label: `Ja`,
          trigger: input => {
            setOtherFlatsStatus(input.value);
            return null;
          },
        },
        {
          value: `no`,
          label: `Nein`,
          trigger: input => {
            setOtherFlatsStatus(input.value);
            return null;
          },
        },
      ],
    },
  ];

  return steps;
}
