import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@pancakeswap/uikit'

import App from '@layouts/App';

render(
  <ThemeProvider theme={light}>
      <App />,
  </ThemeProvider>,
    document.querySelector('#app'),
);
