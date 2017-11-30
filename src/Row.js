/* 
* @flow
*/
import * as React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import type { JustifyT, AlignT } from './types'
import { justifyContent, alignItems } from './styles'

type PropsT = {
  reverse?: boolean,
  justify?: JustifyT,
  align?: AlignT
}; // prettier-ignore

const Row: React.ComponentType<PropsT> = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  margin-right: var(--gutter-compensation, -08px);
  margin-left: var(--gutter-compensation, -08px);
  flex-direction: ${({ reverse = false }) => (reverse ? 'row-reverse' : 'row')};
  ${justifyContent};
  ${alignItems};
`
Row.displayName = 'Row'

export default Row
