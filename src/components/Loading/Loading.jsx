import React from 'react'
import cn from 'classnames'
import s from './style.module.scss'

const LoadingText = ({ visible = true }) => {
  return <div className={cn(s.Loading, { [s.visible]: visible })}>Loading...</div>
}

export default LoadingText
