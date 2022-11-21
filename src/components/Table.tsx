import styled from "styled-components";

const StyledTable = styled.table`
    color: #e1e1e6;
    margin-top: 15px;    
    h4 {
        background-color: #81d8f7;
        padding: 10px;
        border-radius: 4px;
        color: #202024;
    }
    th {
        border: 1px solid #e1e1e6;
        padding: 7px;
    }
    div {
        margin-top: 15px;
        background-color: #81d8f7;
        width: 200px;
        height: 40px;
        padding: 6px;
        border-radius: 4px;
        p {
            position: relative;
            top: -4px;
            color: #202024;
        }
    }
`

export default function Table() {
    return (
        <StyledTable>
                <h4>VEJA A INTERPRETAÇÃO DO IMC</h4>
                <tr className="header">
                    <th>IMC</th>
                    <th>CLASSIFICAÇÃO</th>
                    <th>OBESIDADE (GRAU)</th>
                </tr>
                <tr>
                    <th>MENOR QUE 18,5</th>
                    <th>MAGREZA</th>
                    <th>0</th>
                </tr>
                <tr>
                    <th>ENTRE 18,5 E 24,9</th>
                    <th>NORMAL</th>
                    <th>0</th>
                </tr>
                <tr>
                    <th>ENTRE 18,5 E 24,9</th>
                    <th>NORMAL</th>
                    <th>0</th>
                </tr>
                <tr>
                    <th>ENTRE 25,0 E 29,9</th>
                    <th>SOBREPESO</th>
                    <th>I</th>
                </tr>
                <tr>
                    <th>ENTRE 30,0 E 39,9</th>
                    <th>OBESIDADE</th>
                    <th>II</th>
                </tr>
                <tr>
                    <th>MAIOR QUE 40,0</th>
                    <th>OBESIDADE GRAVE</th>
                    <th>III</th>
                </tr>
        <div><p>SEU IMC: {}</p></div>
        </StyledTable>
    )
}