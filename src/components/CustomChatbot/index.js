import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass/styled-components';

import ChatBot from 'react-simple-chatbot';
import CreatePDF from '~/components/PDF';

import insertPerson1 from './steps/person1';
import insertPerson2 from './steps/person2';

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
  boxShadow: '0 3px 4px 0 rgba(47, 47, 162, 0.15)',
  borderStyle: 'solid',
}

const CustomChatbot = p => {
  const {
    accessStore: { setFirstName, firstName },
  } = p;

  const steps = [
    {
      id: '1',
      message: 'Hallo! Wie kann ich dir helfen?',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        {
          value: 1,
          label: 'Meldeformular',
          trigger: input => {
            setFirstName(input.value);

            return 'p-p1-first-name';
          },
        },
      ],
    },
    ...insertPerson1(),
    ...insertPerson2(),
    {
      id: 'p-download',
      message: 'Vielen Dank. Dein Formular steht zum Download bereit:',
      trigger: 'r-download',
    },
    {
      id: 'r-download',
      component: <CreatePDF />,
      end: true,
    },
  ];

  return (
    <StyledBox px={['2%', '5%', '10%', '30%']} py={['15%']}>
      <StyledChatBot
        width="100%"
        botDelay="500"
        userDelay="500"
        hideBotAvatar
        bubbleStyle={BubbleStyled}
        headerTitle="CityLAB Chatbot"
        height="50vh"
        steps={steps}
      />
    </StyledBox>
  );
};

export default CustomChatbot;
