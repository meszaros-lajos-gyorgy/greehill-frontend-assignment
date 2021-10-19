import { useEffect } from 'react'

const useEffectOnce = (fn) => {
  return useEffect(fn, [])
}

export { useEffectOnce }
