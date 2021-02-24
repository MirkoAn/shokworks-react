import React from 'react'
import { Header } from './Components/Header'
import { Hero } from './Components/Hero'

import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Hero />
  </>
)
