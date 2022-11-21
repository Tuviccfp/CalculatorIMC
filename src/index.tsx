import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import CampInput from './components/CampInput';
import Table from './components/Table';
import Text from './components/Text';

const StyledRoot = styled.div`
  display:flex;
  align-items: center;
  flex-direction: column;
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StyledRoot>
      <Text />
      <CampInput />
      <Table />
    </StyledRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

