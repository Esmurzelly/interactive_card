import styled, {css} from 'styled-components';
import { useState } from 'react';

import Card from './components/Cards';

import Inputs from './components/Inputs';


// const Button = styled.button`
// background: transparent;
// border-radius: 3px;
// border: 2px solid palevioletred;
// color: palevioletred;
// margin: 0 1em;
// padding: 0.25em 1em;

//   ${props => props.primary && css`
//     background: palevioletred;
//     color: white;
//   `}
// `;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .top {
    flex-grow: 1;
  }
`;


function App() {
    const [numCard, setNumCard] = useState("0000 0000 0000 0000");
    const [name, setName] = useState("Jane Appleseed");
    const [dateMM, setDateMM] = useState("00");
    const [dateYY, setDateYY] = useState("00");
    const [cvc, setCvc] = useState("000");

    const updateNumCard = (e) => {
      const updatedNumCard = e.target.value;
      setNumCard(updatedNumCard);
    }

    const updateName = (e) => {
      const updatedName = e.target.value;
      setName(updatedName);
    }

    const updateDateMM = (e) => {
      const updatedDateMM = e.target.value;
      setDateMM(updatedDateMM);
    }

    const updateDateYY = (e) => {
      const updatedDateYY = e.target.value;
      setDateYY(updatedDateYY);
    }

    const updateCvc = (e) => {
      const updatedCvc = e.target.value;
      setCvc(updatedCvc);
    }

  return (
    <Wrapper>
        <div className='top'>
          <Card 
            numCard={numCard} 
            name={name} 
            dateMM={dateMM} 
            dateYY={dateYY} 
            cvc={cvc} 
          />
        </div>
        <Inputs 
          updateNumCard={updateNumCard} 
          updateName={updateName}
          updateDateMM={updateDateMM}
          updateDateYY={updateDateYY}
          updateCvc={updateCvc}  
        />
      {/* <Button>asd</Button>
      <Button primary>Primat</Button> */}
    </Wrapper>
  );
}

export default App;
