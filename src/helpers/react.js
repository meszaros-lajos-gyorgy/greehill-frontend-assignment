import { useEffect } from 'react'

export const useEffectOnce = (fn) => {
  return useEffect(fn, [])
}
