import React from 'react';
import { useTransform } from 'framer-motion';
import { useWrapperScroll } from '../Model';


import { Container,Header, Footer, Logo, Img} from './style';

const UniqueOverlay: React.FC = () => {
  const {scrollYProgress} = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9,1], [0, 1])

  return(
      <Container>
          <Header>
              <Logo/>
              <ul>
                  <li>
                    <a href="#">Model S</a>
                  </li>
                  <li>
                      <a href="#">Model 3</a>
                  </li>
                  <li>
                      <a href="#">Model X</a>
                  </li>
                  <li>
                      <a href="#">Model Y</a>
                  </li>
              </ul>
              <Img/>
          </Header>

          <Footer style={{ opacity }}>
              <ul>
                  <li>
                      <a href="#">UI</a>
                  </li>
                  <li>
                      <a href="#">UI</a>
                  </li>
                  <li>
                      <a href="#">UI</a>
                  </li>
                  <li>
                      <a href="#">UI</a>
                  </li>
                  <li>
                      <a href="#">UI</a>
                  </li>
              </ul>
          </Footer>
      </Container>
  )
}

export default UniqueOverlay;