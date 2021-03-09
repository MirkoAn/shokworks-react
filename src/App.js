import React from 'react'
import { Slider } from './Components/Slider'
import { Footer } from './Components/Footer'
import { FormContainer } from './Components/FormContainer'
import { Header } from './Components/Header'
import { Hero } from './Components/Hero'
import { Partners } from './Components/Partners&Clients'
import { Support } from './Components/Support'
import { Work } from './Components/Work'

import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Hero />
    <Work />
    <Support />
    <Slider />
    <Partners />
    <FormContainer />
    <Footer />
  </>
)
