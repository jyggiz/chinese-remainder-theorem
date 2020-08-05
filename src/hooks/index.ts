import * as React from 'react'

import { LeftOverList, GroundList } from '../model'

export function useGrounds () {
  const [grounds, setGrounds] = React.useState([]);
  const multiplies = React.useRef([])
  const Ground = new GroundList(grounds, setGrounds, multiplies.current)

  return Ground
}

export function useLeftovers () {
  const [leftovers, setLeftovers] = React.useState([]);
  const Leftover = new LeftOverList(leftovers, setLeftovers)

  return Leftover
}