import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    text: '#212121',
    black: '#000',
    white: '#fff',
    gray: '#e0e0e0',
    accent: 'tomato',
    green: 'green',
    red: 'orangeRed',
    lightBlue: 'lightblue',
    randomColor: getRandomHexColor(),
  },
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
