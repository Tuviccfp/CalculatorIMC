import React from 'react';
import styled from 'styled-components';

const StyledMedida = styled.fieldset`
  height: 170px;
  width: 280px;
  display: flex;
  align-items: center;
  flex-direction: column;  
  border: none; 
  padding: 5px;
  input {
    width: 200px;
    height: 35px;
    border: 2px solid #202024;
    background-color: #202024;
    color: #7c7c8a;
    margin-bottom: 10px;
    &:focus {
      border: 1px solid #9BE1FB;
      outline-style: outset;
    }
    ::-webkit-input-placeholder {
      color: #7c7c8a;
      padding: 5px
     }
  }
  label {
    color: #e1e1e6;
    position: relative;
    right: 45px;
    margin-bottom: 4px;
  }
  .label-pound {position: relative; right: 50px}

  button {
    background-color: #81d8f7;
    width: 100px;
    height: 35px;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    right: 56px;
    margin-bottom: 5px;
    &:hover {
      background-color: #9be1fb;
      transition: 0.5s;
    }
  }
`
export default function CampInput() {

  return (
    <StyledMedida>
      <label className='label-pound'>Peso: (ex.: 69,2)</label>
      <input type='number' onWheel={(e) => e.currentTarget.blur()} placeholder='Informe seu peso' />
      <label>Altura: (ex.: 1,70)</label>
      <input type="number" placeholder='Informe a sua altura' />
      <button>Calcule</button>
    </StyledMedida>
  );
}


