/*
* @flow
*/
import * as React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import { justifyContent, alignItems, sizing, offset } from './styles'
import type { JustifyT, AlignT, SizeT, ViewPortT, ViewPortSizeT } from './types'

type PropsT = {
  reverse?: boolean,
  size?: ViewPortSizeT,
  offset?: SizeT,
  justify?: JustifyT,
  align?: AlignT,
  hiddenOn?: ViewPortT,
}; // prettier-ignore

const Col: React.ComponentType<PropsT> = styled.div`
  box-sizing: border-box;
  flex: 0 0 100%;
  padding-right: var(--half-gutter-width, 8px);
  padding-left: var(--half-gutter-width, 8px);

  flex-direction: ${({ reverse = false }) => (reverse ? ' column-reverse' : 'column')};

  ${sizing};
  ${offset};
  ${justifyContent};
  ${alignItems};
`
Col.displayName = 'Col'

export default Col
