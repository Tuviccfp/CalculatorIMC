import React from 'react';
import styled from 'styled-components';

const StyledMedida = styled.input`
  width: 200px;
  height: 35px;
  border: 2px solid #202024;
  background-color: #202024;
  color: #7c7c8a;
  &:focus {
    border: 2px solid #9BE1FB;
  }
  ::-webkit-input-placeholder {
    color: #7c7c8a;
    padding: 5px
  }
`
export default function App() {
  
  return (
    <div>
      <StyledMedida type='number' onWheel={(e) => e.currentTarget.blur()} placeholder='Informe seu peso' />
      <input type="number" placeholder='Informe a sua altura' />
    </div>
  );
}


