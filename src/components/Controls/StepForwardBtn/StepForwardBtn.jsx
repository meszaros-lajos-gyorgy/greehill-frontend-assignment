import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStepForward } from '@fortawesome/free-solid-svg-icons'
import cn from 'classnames'
import s from './style.module.scss'

const StepForwardBtn = () => {
  return (
    <button
      className={cn(s.StepForwardBtn)}
      onClick={() => {
        console.log('előre egyet')
      }}
    >
      <FontAwesomeIcon icon={faStepForward} />
    </button>
  )
}

export default StepForwardBtn
