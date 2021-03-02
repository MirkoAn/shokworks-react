import React from 'react'

import { Card, AvatarImg, ArrowContainer, RichardImg, RebecaImg, SadieImg, EricImg } from './styles'

import RubiyaAvatar from '../../assets/images/Ellipse344.png'
import RichardAvatar from '../../assets/images/Ellipse348.png'
import RebecaAvatar from '../../assets/images/Ellipse346.png'
import SadieAvatar from '../../assets/images/Ellipse347.png'
import EricAvatar from '../../assets/images/Ellipse350.png'

import LeftArrow from '../../assets/images/arrow-left.svg'
import RightArrow from '../../assets/images/arrow-right.svg'

export const Testimonials = () => {
  return (
    <Card>
      <div>
        <AvatarImg src={RubiyaAvatar} alt='RubiyaAvatar' />
      </div>
      <p>Shokworks are dedicated and they accomplished all my ideas and thoughts for my project, excellent guidance.</p>
      <h4>Rubiya Mond De-Patrica</h4>
      <span>CEO, Zexbay-fine</span>
      <ArrowContainer>
        <img src={LeftArrow} alt='LeftArrow' />
        <img src={RightArrow} alt='RightArrow' />
      </ArrowContainer>
      <RichardImg src={RichardAvatar} alt='RichardAvatar' />
      <RebecaImg src={RebecaAvatar} alt='RebecaAvatar' />
      <SadieImg src={SadieAvatar} alt='SadieAvatar' />
      <EricImg src={EricAvatar} alt='EricAvatar' />
    </Card>
  )
}
