/*
  IDs follow the pattern: type(p=prompt, r=response)-field
*/

const personSteps = [
  {
    id: 'p-first-name',
    message: 'Super! Verrätst Du mir zunächst Deinen Vornamen?',
    trigger: 'r-first-name',
  },
  {
    id: 'r-first-name',
    user: true,
    placeholder: 'Hier kannst Du auch mehrere Vornamen eintragen ...',
    trigger: 'p-last-name',
  },
  {
    id: 'p-last-name',
    message: 'Danke {previousValue}, und dein Nachname?',
    trigger: 'r-last-name',
  },
  {
    id: 'r-last-name',
    user: true,
    trigger: 'p-doctor',
  },
  {
    id: 'p-doctor',
    message: 'Besitzt Du einen Doktortitel?',
    trigger: 'r-doctor',
  },
  {
    id: 'r-doctor',
    options: [
      { value: 1, label: 'Ja', trigger: 'p-other-names' },
      { value: 0, label: 'Nein', trigger: 'p-other-names' },
    ],
  },
  {
    id: 'p-other-names',
    message: 'Besitzt Du einen Ordens- oder Künstlernamen?',
    trigger: 'r-other-names',
  },
  {
    id: 'r-other-names',
    options: [
      { value: 1, label: 'Ja', trigger: 'p-other-names-manual' },
      { value: 0, label: 'Nein', trigger: 'p-birth' },
    ],
  },
  {
    id: 'p-other-names-manual',
    message: 'Wie lautet Dein Ordens- oder Künstlername?',
    trigger: 'r-other-names-manual',
  },
  {
    id: 'r-other-names-manual',
    user: true,
    trigger: 'p-birth',
  },
  {
    id: 'p-birth',
    message: 'Wie lautet Dein Geburtsdatum?',
    trigger: 'r-birth',
  },
  {
    id: 'r-birth',
    user: true,
    trigger: 'p-birth-place',
  },
  {
    id: 'p-birth-place',
    message: 'In welchem Ort und Land wurdest Du geboren?',
    trigger: 'r-birth-place',
  },
  {
    id: 'r-birth-place',
    user: true,
    placeholder: 'Ort, Land ...',
    trigger: 'p-birth-name',
  },
  {
    id: 'p-birth-name',
    message: 'Hattest Du als Du geboren wurdest einen anderen Namen?',
    trigger: 'r-birth-name',
  },
  {
    id: 'r-birth-name',
    options: [
      { value: 1, label: 'Ja', trigger: 'p-birth-name-manual' },
      { value: 0, label: 'Nein', trigger: 'p-nationality' },
    ],
  },
  {
    id: 'p-birth-name-manual',
    message: 'Wie lautete Dein voller Name damals?',
    trigger: 'r-birth-name-manual',
  },
  {
    id: 'r-birth-name-manual',
    user: true,
    trigger: 'p-nationality',
  },
  {
    id: 'p-nationality',
    message: 'Bitte nenne mir nun Deine Staatsangehörigkeit.',
    trigger: 'r-nationality',
  },
  {
    id: 'r-nationality',
    user: true,
    placeholder: 'Hier kannst Du auch mehrere nennen',
    trigger: 'p-religion',
  },
  {
    id: 'p-religion',
    message: 'Gehörst Du formell einer Religion an?',
    trigger: 'r-religion',
  },
  {
    id: 'r-religion',
    options: [
      { value: 1, label: 'Ja', trigger: 'p-religion-manual' },
      { value: 0, label: 'Nein', trigger: 'p-sex' },
    ],
  },
  {
    id: 'p-religion-manual',
    message: 'Danke. Welcher Religion gehörst Du an?',
    trigger: 'r-religion-manual',
  },
  {
    id: 'r-religion-manual',
    user: true,
    trigger: 'p-sex',
  },
  {
    id: 'p-sex',
    message: 'Welches Geschlecht ist in Deinen Ausweisdokumenten vermerkt?',
    trigger: 'r-sex',
  },
  {
    id: 'r-sex',
    user: true,
    trigger: 'p-download',
  },
];

export { personSteps as default };
