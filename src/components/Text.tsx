import React from 'react'
import styled from "styled-components";

const StyledText = styled.div`
    width: 600px;    
    color: #e1e1e6
`
export default function Text() {
    return (
        <StyledText>
            <h3>Cálculo IMC</h3>
            <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
            <p>O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.</p>
            <p>Quer descobrir seu IMC? Insira seu peso e sua altura nos campos abaixo e compare com os índices da tabela. Importante: siga os exemplos e use pontos como separadores.</p>
        </StyledText>
    )
}
