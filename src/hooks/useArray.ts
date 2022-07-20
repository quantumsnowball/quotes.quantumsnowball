import { useState, useCallback } from 'react'
import useLocalStorage from './generic/useLocalStorage'


export function useArray<T>(initialValue: T[]) {
  const [value, setValue] = useState(initialValue)

  const push = useCallback((element: T) => {
    setValue(oldValue => [element, ...oldValue])
  }, [])

  const remove = useCallback((index: number) => {
    setValue(oldValue => oldValue.filter((_, i) => i !== index))
  }, [])

  function isEmpty() {
    return value.length === 0
  }

  return { value, setValue, push, remove, isEmpty }
}

export function usePersistedArray<T>(key: string, initialValue: T[]) {
  const [value, setValue] = useLocalStorage(key, initialValue)

  const push = useCallback((element: T) => {
    setValue(oldValue => [element, ...oldValue])
  }, [])

  const remove = useCallback((index: number) => {
    setValue(oldValue => oldValue.filter((_, i) => i !== index))
  }, [])

  function isEmpty() {
    return value.length === 0
  }

  return { value, setValue, push, remove, isEmpty }
}
