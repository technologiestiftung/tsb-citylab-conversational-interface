import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import App from './App';
import defaultTheme from './style/themes/default';

test('renders title in header', () => {
  const { getByText } = render(
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  );
  const titleElement = getByText(/CityLAB Chatbot/i);
  expect(titleElement).toBeInTheDocument();
});
