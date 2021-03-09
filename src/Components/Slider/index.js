import React, { useState, useEffect } from 'react'

import Carousel from 'react-elastic-carousel'
// import { FeaturesCard } from '../FeaturesCard'

import { Card, Title } from './styles'

const currentDate = new Date()
const cDay = String(currentDate.getDate())
const cMonth = String(currentDate.getMonth() + 1)
const cYear = String(currentDate.getFullYear())

const dateToday = cYear + '-' + cMonth + '-' + cDay

const breakPoints = [
  { width: 1, itemsToShow: 1, pagination: false },
  { width: 700, itemsToShow: 3, pagination: false },
  { width: 1200, itemsToShow: 4, pagination: false },
  { width: 1900, itemsToShow: 5, pagination: false }
]

export const Slider = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    window.fetch(`http://newsapi.org/v2/everything?q=tesla&from=${dateToday}&sortBy=publishedAt&apiKey=514e065ac6b0450d92c323eb504276cf`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then((data) => {
        setData(data.articles.slice(0, 10))
      })
      .catch((error) => {
        setError(error)
      })
      .finally((loading) => {
        setLoading(false)
      })
  }, [])

  if (loading) return 'Loading...'
  if (error) return 'Error!'

  const Slides = data.map((slide, index) => {
    return (
      <Card key={index}>
        <div>
          <img src={slide.urlToImage} alt='article-image' />
        </div>
        <h2>{slide.title}</h2>
        <p>{slide.description}</p>
      </Card>
    )
  })

  return (
    <>
      <Title>
        <h2>what is the <br /><span>specialty of us?</span></h2>
      </Title>
      <Carousel breakPoints={breakPoints}>
        {Slides}
      </Carousel>
    </>
  )
}
