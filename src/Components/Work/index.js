import React from 'react'

import Img from '../../assets/images/what-can-you-build.png'

import { Container, Button, Wrapper, ImgWrapper, BuildImage } from './styles'

export const Work = () => {
  return (
    <Container>
      <ImgWrapper>
        <BuildImage src={Img} alt='build-img' />
      </ImgWrapper>
      <Wrapper>
        <h2>the process <br /> about our work</h2>
        <p>
          <span>Alejandro Laplana</span> leads and adaptable end-to-end development team
          consisting of a large portion of captable enterprise mixed reality solutions
        </p>
        <Button>
          <a href='#'>Know More</a>
        </Button>
      </Wrapper>
    </Container>
  )
}
