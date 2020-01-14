import CreatePDF from '~/components/PDF';

export const steps = [
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you! How can I help you?',
      trigger: '4',
    },
    {
      id: '4',
      options: [
        { value: 1, label: 'Open Data', trigger: '5' },
        { value: 2, label: 'Shared Mobility', trigger: '6' },
        { value: 3, label: 'Digitalisation', trigger: '7' },
      ]
    },
    {
      id: "5",
      message: "Okay, let's talk about Open Data!",
      component: (<CreatePDF></CreatePDF>)
      end: true,
    },
    {
      id: "6",
      message: "Okay, let's talk about Shared Mobility!",
      end: true,
    },
    {
      id: "7",
      message: "Okay, let's talk about Digitalisation!",
      end: true,
    },
];

export default {
  steps
}