import React from 'react'
import { ClientsCard } from '../ClientsCard'

import { Container } from './styles'

export const Partners = () => {
  return (
    <Container>
      <div>
        <h2>our partners &amp; clients</h2>
      </div>
      <ClientsCard />
    </Container>
  )
}
