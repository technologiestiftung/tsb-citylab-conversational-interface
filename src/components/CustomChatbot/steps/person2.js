export default function insertPerson2() {
  return [
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
      trigger: 'p-p2-last-name',
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
        { value: 1, label: 'Ja', trigger: 'p-marital-status-together' },
        { value: 0, label: 'Nein', trigger: 'p-marital-status-together' },
      ],
    },
    {
      id: 'p-marital-status-together',
      message:
        'In welchem Familienverhältnis stehtst Du mit der genannten Person?',
      trigger: 'r-marital-status-together',
    },
    {
      id: 'r-marital-status-together',
      user: true,
      trigger: 'p-marital-status-together-info',
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
      trigger: 'p-p2-has-other-names',
    },
    {
      id: 'p-p2-has-other-names',
      message:
        'Danke. Zurück zur Person. Besitzt die Person einen Ordens- oder Künstlernamen?',
      trigger: 'r-p2-has-other-names',
    },
    {
      id: 'r-p2-has-other-names',
      options: [
        { value: 1, label: 'Ja', trigger: 'p-p2-other-names' },
        { value: 0, label: 'Nein', trigger: 'p-p2-birth-date' },
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
      trigger: 'p-p2-birth-date',
    },
    {
      id: 'p-p2-birth-date',
      message: 'Wie lautet das Geburtsdatum der Person?',
      trigger: 'r-p2-birth-date',
    },
    {
      id: 'r-p2-birth-date',
      user: true,
      trigger: 'p-p2-birth-place',
    },
    {
      id: 'p-p2-birth-place',
      message: 'In welchem Ort und Land wurde die Person geboren?',
      trigger: 'r-p2-birth-place',
    },
    {
      id: 'r-p2-birth-place',
      user: true,
      placeholder: 'Ort, Land ...',
      trigger: 'p-p2-has-another-birth-name',
    },
    {
      id: 'p-p2-has-another-birth-name',
      message: 'Hatte die Person als sie geboren wurde einen anderen Namen?',
      trigger: 'r-p2-has-another-birth-name',
    },
    {
      id: 'r-p2-has-another-birth-name',
      options: [
        { value: 1, label: 'Ja', trigger: 'p-p2-birth-name' },
        { value: 0, label: 'Nein', trigger: 'p-p2-nationality' },
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
      trigger: 'p-p2-nationality',
    },
    {
      id: 'p-p2-nationality',
      message: 'Bitte nenne mir nun die Staatsangehörigkeit der Person.',
      trigger: 'r-p2-nationality',
    },
    {
      id: 'r-p2-nationality',
      user: true,
      placeholder: 'Hier kannst Du auch mehrere nennen',
      trigger: 'p-p2-has-religion',
    },
    {
      id: 'p-p2-has-religion',
      message: 'Gehört die Person formell einer Religion an?',
      trigger: 'r-p2-has-religion',
    },
    {
      id: 'r-p2-has-religion',
      options: [
        { value: 1, label: 'Ja', trigger: 'p-p2-religion' },
        { value: 0, label: 'Nein', trigger: 'p-p2-sex' },
      ],
    },
    {
      id: 'p-p2-religion',
      message: 'Danke. Welcher Religion gehört die Person an?',
      trigger: 'r-p2-religion',
    },
    {
      id: 'r-p2-religion',
      user: true,
      trigger: 'p-p2-sex',
    },
    {
      id: 'p-p2-sex',
      message:
        'Welches Geschlecht ist in den Ausweisdokumenten der Person vermerkt?',
      trigger: 'r-p2-sex',
    },
    {
      id: 'r-p2-sex',
      user: true,
      trigger: 'p-download',
    },
  ];
}
