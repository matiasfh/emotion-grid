/*
* @flow
*/
import * as React from 'react'

export type PropsT = {
  fluid: boolean,
  className: string,
  tagName: string,
  children: React.Node,
}; //prettier-ignore

export type SizeT = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12; //prettier-ignore
export type JustifyT = 'start' | 'center' | 'end' | 'space-around' | 'space-between'; //prettier-ignore
export type AlignT = 'start' | 'center' | 'end'; //prettier-ignore
export type ViewPortT = 'xs' | 'sm' | 'md' | 'lg' | 'xl'; //prettier-ignore
export type ViewPortSizeT = SizeT | Object
