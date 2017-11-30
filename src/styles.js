/*
* @flow
*/
import { injectGlobal, css } from 'emotion'
import normalize from 'normalize.css'
import type { JustifyT, AlignT, SizeT, ViewPortT, ViewPortSizeT } from './types'

const init = () => {
  injectGlobal(normalize)

  injectGlobal`
    @custom-media --sm-viewport only screen and (min-width: 576px);
    @custom-media --md-viewport only screen and (min-width: 768px);
    @custom-media --lg-viewport only screen and (min-width: 992px);
    @custom-media --xl-viewport only screen and (min-width: 1200px);
    
    @custom-media --xs-only only screen and (max-width: 575px);
    @custom-media --sm-only only screen and (min-width: 576px) and (max-width: 767px);
    @custom-media --md-only only screen and (min-width: 768px) and (max-width: 991px);
    @custom-media --lg-only only screen and (min-width: 992px) and (max-width: 1199px);
    @custom-media --xl-only only screen and (min-width: 1200px);
    :root {
      --gutter-width: 16px;
      --outer-margin: 32px;
      --gutter-compensation: calc((var(--gutter-width) * 0.5) * -1);
      --half-gutter-width: calc((var(--gutter-width) * 0.5));
      --xs-min: 0rem;
      --sm-min: 576px;
      --md-min: 768px;
      --lg-min: 992px;
      --xl-min: 1200px;
    }
  `
}

export const justifyContent = ({ justify = 'start' }: { justify: JustifyT }): string =>
  css`
    justify-content: ${() => {
      switch (justify) {
        case 'start':
          return 'flex-start'
        case 'end':
          return 'flex-end'
        default:
          return justify
      }
    }};
  `
export const alignItems = ({ align = 'start' }: { align?: AlignT }): string =>
  css`
    align-items: ${() => {
      switch (align) {
        case 'start':
          return 'flex-start'
        case 'end':
          return 'flex-end'
        default:
          return align
      }
    }};
  `

export const mediaQuery = (size: ViewPortT, percent: number) => {
  const defaultBreakpoints = {
    xs: '320',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  }

  return `
    @media only screen and (min-width: ${defaultBreakpoints[size]}) {
      flex-grow: 1;
      flex-basis: ${percent}%;
      max-width: ${percent}%;
    }
  `
}

export const sizing = ({ size = 0 }: { size?: ViewPortSizeT }): string => {
  if (typeof size === 'object') {
    let styles = Object.keys(size).reduce((accumulator, label) => {
      const percent = size[label] * 100 / 12
      accumulator.push(mediaQuery(label, percent))
      return accumulator
    }, [])

    return styles.join(';\n')
  }
  if (size === 0) {
    return css``
  }
  const percent = size * 100 / 12
  return `
    flex-grow: 1;
    flex-basis: ${percent}%;
    max-width: ${percent}%;
  `
}

export const offset = ({ offset = 0 }: { offset?: SizeT }): string => {
  const percent = offset * 100 / 12
  return `
    margin-left: ${percent}%;
  `
}

export const hideForViewPort = ({ hiddenOn = 'xs' }: { hiddenOn: ViewPortT }): string => {
  return `
    @media (--${hiddenOn}--only) {
      display: none;
    }
  `
}

export default init
