import React from 'react';
import styled from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import CreatePDF from './components/PDF';
import { Box } from 'rebass/styled-components';

export const steps = [
  {
    id: '1',
    message: 'Hallo! Wie kann ich dir helfen?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 1, label: 'Meldeformular', trigger: '3' },
      // { value: 2, label: 'Shared Mobility', trigger: '5' },
      // { value: 3, label: 'Digitalisation', trigger: '5' },
    ]
  },
  {
    id: '3',
    message: 'Wie ist dein Familienname?',
    trigger: 'name',
  },
  {
    id: 'name',
    user: true,
    trigger: '4',
  },
  {
    id: "4",
    message: "Ihr Formular steht zum Download bereit:",
    trigger: "5"
  },
  {
    id: "5",
    component: (<CreatePDF></CreatePDF>),
    end: true,
  },
  // {
  //   id: "6",
  //   message: "Okay, let's talk about Shared Mobility!",
  //   end: true,
  // },
  // {
  //   id: "7",
  //   message: "Okay, let's talk about Digitalisation!",
  //   end: true,
  // },
];

const StyledBox = styled(Box)`
  align-items: center;
`;

const StyledChatBot = styled(ChatBot)`
  .rsc-container {
    box-shadow: ${p => p.theme.shadow};
    border-radius: 0px;
    background: white;
    height: auto;
  }

  .rsc-content {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
  }

  .rsc-header {
    margin-top: 24px;
    height: 60px;
    padding-left: 28px;
    font-family: ${p => p.theme.fonts.headline};
  }

  .rsc-os-option-element {
    color: ${p => p.theme.colors.primary};
    box-shadow: 0 3px 4px 0 rgba(47, 47, 162, 0.15);
  }

  .rsc-input {
    padding: 25px 25px;
    color: ${p => p.theme.colors.primary};
  }

  .rsc-footer {
    height: 49px;
  }

  .rsc-submit-button {
    height: 69px;
    padding-right: 27px;
    font-size: 20px;
  }
`;

const BubbleStyled = {
  borderRadius: '0px',
  borderWidth: `0px`,
  fontSize: `20px`,
  borderColor: 'rgba(47, 47, 162, 0.05)',
  boxShadow: "0 3px 4px 0 rgba(47, 47, 162, 0.15)",
  borderStyle: 'solid'
}

function App() {
  return (
    <StyledBox
      px={["2%","5%","10%",'30%']}
      py={['15%']}
    >
      <StyledChatBot
        width='100%'
        botDelay="500"
        userDelay="500"
        hideBotAvatar={true}
        bubbleStyle={BubbleStyled}
        headerTitle="CityLAB Chatbot"
        height='50vh'
        steps={steps} />
    </StyledBox>
  );
}

export default App;
