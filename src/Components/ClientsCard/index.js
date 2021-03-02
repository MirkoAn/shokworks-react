import React from 'react'

import { Card, Rows } from './styles'

import ImmersityLogo from '../../assets/images/big_immersity_logo.png'
import PassLogo from '../../assets/images/logo_ipass.png'
import KinesisLogo from '../../assets/images/logo-rojo.png'
import MexperienciaLogo from '../../assets/images/logo_splash.png'
import MobileLogo from '../../assets/images/Group94.png'
import GoodtimesLogo from '../../assets/images/Group2788.png'

const ClientsLogos = [ImmersityLogo, PassLogo, KinesisLogo]
const ClientsLogos2 = [MexperienciaLogo, MobileLogo, GoodtimesLogo]

export const ClientsCard = ({ Logos = ClientsLogos, Logos2 = ClientsLogos2 }) => {
  const Client = Logos.map((item, id) => {
    return (
      <li key={id}>
        <Card>
          <img src={item} />
          <a href='#'>Learn More</a>
        </Card>
      </li>
    )
  })
  const Client2 = Logos2.map((item, id) => {
    return (
      <li key={id}>
        <Card>
          <img src={item} />
          <a href='#'>Learn More</a>
        </Card>
      </li>
    )
  })
  return (
    <>
      <Rows>
        {Client}
      </Rows>
      <Rows>
        {Client2}
      </Rows>
    </>
  )
}
