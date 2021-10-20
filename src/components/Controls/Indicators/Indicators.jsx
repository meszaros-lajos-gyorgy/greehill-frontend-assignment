import React from 'react'
import Indicator from './Indicator/Indicator.jsx'
import s from './style.module.scss'

const Indicators = () => {
  return (
    <div className={s.Indicators}>
      <Indicator label="Generation" value={12} />
      <Indicator label="Population" value={3407} />
    </div>
  )
}

export default Indicators
