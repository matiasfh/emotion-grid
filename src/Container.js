/* 
* @flow
*/
import * as React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'

type PropsT = {
  fluid?: boolean
}; // prettier-ignore

const Container: React.ComponentType<PropsT> = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding-right: ${p => (p.fluid ? 'var(--gutter-width, 16px)' : '8px')};
  padding-left: ${p => (p.fluid ? 'var(--gutter-width, 16px)' : '8px')};

  @media (--sm-viewport) {
    width: calc(var(--sm-min) - var(--gutter-width));
    max-width: 100%;
  }
  @media (--md-viewport) {
    width: calc(var(--md-min) - var(--gutter-width));
    max-width: 100%;
  }
  @media (--lg-viewport) {
    width: calc(var(--lg-min) - var(--gutter-width));
    max-width: 100%;
  }
  @media (--xl-viewport) {
    width: calc(var(--xl-min) - var(--gutter-width));
    max-width: 100%;
  }
`
Container.displayName = 'Container'

export default Container
