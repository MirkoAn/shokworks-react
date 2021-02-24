import React from 'react'

import { SupportWrapper, SupportImg, Container, ImgWrapper } from './styles'

import ArticleImg from '../../assets/images/article-image-5.png'

export const Support = () => {
  return (
    <SupportWrapper>
      <div>
        <ImgWrapper>
          <SupportImg src={ArticleImg} alt='article-img' />
        </ImgWrapper>
        <Container>
          <h2>We are here to <br /> <span>always help </span> you</h2>
          <p>
            Shokworks team provide solutions and guidance to every project,
            taking the project vision to high level.
          </p>
        </Container>
      </div>
    </SupportWrapper>
  )
}
