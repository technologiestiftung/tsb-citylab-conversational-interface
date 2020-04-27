export default function useIntro() {
  const steps = [
    {
      id: 'p-form-selection',
      message: 'Hallo! Womit kann ich Dir helfen?',
      trigger: 'r-form-selection',
    },
    {
      id: 'r-form-selection',
      options: [
        {
          value: 'Meldeformular',
          label: 'Meldeformular',
          trigger: 'p-bot-disclosure',
        },
      ],
    },
    {
      id: 'p-bot-disclosure',
      message:
        'Übrigens, ich bin kein echter Mensch, sondern ein Chatbot. Möchtest Du, dass ich Dich durch den {previousValue}-Prozess leite?',
      trigger: 'r-bot-disclosure',
    },
    {
      id: 'r-bot-disclosure',
      options: [
        {
          value: 'yes',
          label: 'Ja',
          trigger: 'p-p1-first-name',
        },
        {
          value: 'no',
          label: 'Nein',
          trigger: null,
        },
      ],
    },
  ];

  return steps;
}
