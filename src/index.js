import onecolor from 'onecolor'

export default function getContrastRatio(foreground, background) {
  const backgroundOnWhite = alphaBlend(background, '#fff')
  const backgroundOnBlack = alphaBlend(background, '#000')

  const LWhite = getRelativeLuminance(backgroundOnWhite)
  const LBlack = getRelativeLuminance(backgroundOnBlack)
  const LForeground = getRelativeLuminance(foreground)

  if (LWhite < LForeground) {
    return getContrastRatioOpaque(foreground, backgroundOnWhite)
  } else if (LBlack > LForeground) {
    return getContrastRatioOpaque(foreground, backgroundOnBlack)
  } else {
    return 1
  }
}

function alphaBlend(cssForeground, cssBackground) {
  const foreground = onecolor(cssForeground)
  const background = onecolor(cssBackground)
  const result = onecolor('#fff')
  const a = foreground.alpha()

  result._red = foreground._red * a + background._red * (1 - a)
  result._green = foreground._green * a + background._green * (1 - a)
  result._blue = foreground._blue * a + background._blue * (1 - a)

  return result
}

function getContrastRatioOpaque(foreground, background) {
  const L1 = getRelativeLuminance(background)
  const L2 = getRelativeLuminance(alphaBlend(foreground, background))

  // https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
  return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05)
}

function getRelativeLuminance(cssColor) {
  // https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
  const color = onecolor(cssColor)

  const R =
    color._red <= 0.03928
      ? color._red / 12.92
      : Math.pow((color._red + 0.055) / 1.055, 2.4)
  const G =
    color._green <= 0.03928
      ? color._green / 12.92
      : Math.pow((color._green + 0.055) / 1.055, 2.4)
  const B =
    color._blue <= 0.03928
      ? color._blue / 12.92
      : Math.pow((color._blue + 0.055) / 1.055, 2.4)

  const L = 0.2126 * R + 0.7152 * G + 0.0722 * B

  return L
}
