import { useStoreActions } from 'easy-peasy';
import Store from '~/state/Store';

export default function usePerson2Steps() {
  const setField = useStoreActions(state => state.person.setField);

  const steps = [
    {
      id: 'p-p2-first-name',
      message:
        'Okay. Bitte nenne mir zunächst den Vornamen des Familienmitglieds.',
      trigger: 'r-p2-first-name',
    },
    {
      id: 'r-p2-first-name',
      user: true,
      placeholder: 'Hier kannst Du auch mehrere Vornamen eintragen ...',
      trigger: input => {
        setField({ field: `person2_firstname`, value: input.value });

        return 'p-p2-last-name';
      },
    },
    {
      id: 'p-p2-last-name',
      message: 'Und der Nachname des Familienmitglieds?',
      trigger: 'r-p2-last-name',
    },
    {
      id: 'r-p2-last-name',
      user: true,
      trigger: 'p-p2-is-doctor',
    },
    {
      id: 'p-p2-is-doctor',
      message: 'Besitzt die Person einen Doktortitel?',
      trigger: 'r-p2-is-doctor',
    },
    {
      id: 'r-p2-is-doctor',
      options: [
        {
          value: 1,
          label: 'Ja',
          trigger: input => {
            const lastNameWithTitle = `Dr. ${input.steps['r-p2-last-name'].value}`;
            setField({ field: `person2_lastname`, value: lastNameWithTitle });

            return 'p-marital-status-together';
          },
        },
        {
          value: 0,
          label: 'Nein',
          trigger: input => {
            setField({
              field: `person2_lastname`,
              value: input.steps[`r-p2-last-name`].value,
            });

            return 'p-marital-status-together';
          },
        },
      ],
    },
    {
      id: 'p-marital-status-together',
      message: 'In welchem Familienverhältnis steht Ihr?',
      trigger: 'r-marital-status-together',
    },
    {
      id: 'r-marital-status-together',
      user: true,
      trigger: input => {
        setField({ field: `marital_status`, value: input.value });

        return 'p-marital-status-together-info';
      },
    },
    {
      id: 'p-marital-status-together-info',
      message:
        'Bitte nenne nun Datum, Ort und Land der Eheschließung oder Lebenspartnerschaft.',
      trigger: 'r-marital-status-together-info',
    },
    {
      id: 'r-marital-status-together-info',
      user: true,
      trigger: input => {
        setField({ field: `marital_status_details`, value: input.value });

        return 'p-p2-has-other-names';
      },
    },
    {
      id: 'p-p2-has-other-names',
      message: () => {
        const firstName = Store.getState().person.person2_firstname.text;
        return `Danke. Besitzt ${firstName} einen Ordens- oder Künstlernamen?`;
      },
      trigger: 'r-p2-has-other-names',
    },
    {
      id: 'r-p2-has-other-names',
      options: [
        { value: 1, label: 'Ja', trigger: 'p-p2-other-names' },
        {
          value: 0,
          label: 'Nein',
          trigger: () => {
            setField({
              field: `person2_alternativename`,
              value: `-`,
            });
            return 'p-p2-birth-date';
          },
        },
      ],
    },
    {
      id: 'p-p2-other-names',
      message: 'Wie lautet der Ordens- oder Künstlername?',
      trigger: 'r-p2-other-names',
    },
    {
      id: 'r-p2-other-names',
      user: true,
      trigger: input => {
        setField({
          field: `person2_alternativename`,
          value: input.value,
        });
        return 'p-p2-birth-date';
      },
    },
    {
      id: 'p-p2-birth-date',
      message: () => {
        const firstName = Store.getState().person.person2_firstname.text;
        return `Danke. Wie lautet das Geburtsdatum von ${firstName}?`;
      },
      trigger: 'r-p2-birth-date',
    },
    {
      id: 'r-p2-birth-date',
      user: true,
      trigger: 'p-p2-birth-place',
    },
    {
      id: 'p-p2-birth-place',
      message: () => {
        const firstName = Store.getState().person.person2_firstname.text;
        return `In welchem Ort und Land wurde ${firstName} geboren?`;
      },
      trigger: 'r-p2-birth-place',
    },
    {
      id: 'r-p2-birth-place',
      user: true,
      placeholder: 'Ort, Land ...',
      trigger: input => {
        const birthData = `${input.steps['r-p2-birth-date'].value}, ${input.value}`;
        setField({ field: `person2_birthdata`, value: birthData });

        return 'p-p2-has-another-birth-name';
      },
    },
    {
      id: 'p-p2-has-another-birth-name',
      message: () => {
        const firstName = Store.getState().person.person2_firstname.text;
        return `Hatte ${firstName} bei der Geburt einen anderen Namen?`;
      },
      trigger: 'r-p2-has-another-birth-name',
    },
    {
      id: 'r-p2-has-another-birth-name',
      options: [
        { value: 1, label: 'Ja', trigger: 'p-p2-birth-name' },
        {
          value: 0,
          label: 'Nein',
          trigger: input => {
            const birthName = `${input.steps['r-p2-first-name'].value} ${input.steps['r-p2-last-name'].value}`;
            setField({ field: `person2_birthname`, value: birthName });

            return 'p-p2-nationality';
          },
        },
      ],
    },
    {
      id: 'p-p2-birth-name',
      message: 'Wie lautete der volle Name damals?',
      trigger: 'r-p2-birth-name',
    },
    {
      id: 'r-p2-birth-name',
      user: true,
      trigger: input => {
        setField({ field: `person2_birthname`, value: input.value });

        return 'p-p2-nationality';
      },
    },
    {
      id: 'p-p2-nationality',
      message: () => {
        const firstName = Store.getState().person.person2_firstname.text;
        return `Bitte nenne mir nun die Staatsangehörigkeit von ${firstName}.`;
      },
      trigger: 'r-p2-nationality',
    },
    {
      id: 'r-p2-nationality',
      user: true,
      placeholder: 'Hier kannst Du auch mehrere nennen',
      trigger: input => {
        setField({ field: `person2_nationality`, value: input.value });

        return 'p-p2-has-religion';
      },
    },
    {
      id: 'p-p2-has-religion',
      message: () => {
        const firstName = Store.getState().person.person2_firstname.text;
        return `Gehört ${firstName} formell einer Religion an?`;
      },
      trigger: 'r-p2-has-religion',
    },
    {
      id: 'r-p2-has-religion',
      options: [
        { value: 1, label: 'Ja', trigger: 'p-p2-religion' },
        {
          value: 'no',
          label: 'Nein',
          trigger: () => {
            setField({ field: `person2_religion`, value: `-` });

            return 'p-p2-sex';
          },
        },
      ],
    },
    {
      id: 'p-p2-religion',
      message: 'Welcher Religion?',
      trigger: 'r-p2-religion',
    },
    {
      id: 'r-p2-religion',
      user: true,
      trigger: input => {
        setField({ field: `person2_religion`, value: input.value });

        return 'p-p2-sex';
      },
    },
    {
      id: 'p-p2-sex',
      message: () => {
        const firstName = Store.getState().person.person2_firstname.text;
        return `Welches Geschlecht ist in den Ausweisdokumenten von ${firstName} vermerkt?`;
      },
      trigger: 'r-p2-sex',
    },
    {
      id: 'r-p2-sex',
      user: true,
      trigger: input => {
        setField({ field: `person2_sex`, value: input.value });
        console.table(Store.getState().person);

        return 'newflat_movingindate_1';
      },
    },
  ];

  return steps;
}
