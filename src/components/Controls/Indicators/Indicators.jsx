import { flatten, sum } from 'ramda'
import React from 'react'
import { useSelector } from 'react-redux'
import Indicator from './Indicator/Indicator.jsx'
import s from './style.module.scss'

const Indicators = () => {
  const generation = useSelector((state) => state.Game.generation)
  const population = useSelector((state) => sum(flatten(state.Game.grid)))

  return (
    <div className={s.Indicators}>
      <Indicator label="Generation" value={generation} />
      <Indicator label="Population" value={population} />
    </div>
  )
}

export default Indicators
