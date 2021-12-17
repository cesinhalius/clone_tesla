import React from 'react';


import { Container,Heading,Buttons } from './style';

interface Props{
    label:string;
    description:string;
}

const OverlayContent: React.FC<Props> = ({ label, description}) => {
  return (
      <Container>
          <Heading>
              <h1>{label}</h1>
              <h1>{description}</h1>
          </Heading>

          <Buttons>
              <button>Custom Order</button>
              <button className='white'>Existing Inventary</button>
          </Buttons>
      </Container>
  )
}

export default OverlayContent;