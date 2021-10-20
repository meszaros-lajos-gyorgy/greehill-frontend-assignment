import React from 'react'
import s from './style.module.scss'

const Indicator = ({ label, value }) => {
  return (
    <div className={s.Indicator}>
      <label>{label}</label>
      <span>{value}</span>
    </div>
  )
}

export default Indicator
