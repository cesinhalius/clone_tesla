import React from 'react'

import { ModelsWrapper, ModelSection } from '../Model'
import DefaultOverlayContent from '../DefaultOverlayContent'
import UniqueOverlay from '../UniqueOverlay'

import { Container, Spacer } from './style'

const Page: React.FC = () => {
  return (
    <Container>
    <ModelsWrapper>
      <div>
        {[
          'Model 3',
          'Model Y',
          'Model S',
          'Model X',
          'Acessórios',
          'Powerwall',
          'Other'
        ].map(modelName => (
          <ModelSection
            key={modelName}
            className="colored"
            modelName={modelName}
            overlayNode={
              <DefaultOverlayContent
                label={modelName}
                description=" agende test driver "
              />
            }
          />
        ))}
      </div>

      <Spacer />

      <UniqueOverlay />
    </ModelsWrapper>
  </Container>

      
  )
}

export default Page