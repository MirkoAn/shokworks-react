export const breakpoints = {
  tablet: 767,
  laptop: 1200,
  laptopxl: 1919
}

export const mediaQueries = key => {
  return style => `@media (min-width: ${breakpoints[key]}px) { ${style} }`
}
