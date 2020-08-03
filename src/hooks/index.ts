import * as React from 'react'

import { List, LeftOverList } from '../model'

export function useGrounds () {
  const [grounds, setGrounds] = React.useState([]);
  const Ground = new List(grounds, setGrounds)

  return Ground
}

export function useLeftovers () {
  const [leftovers, setLeftovers] = React.useState([]);
  const Leftover = new LeftOverList(leftovers, setLeftovers)

  return Leftover
}