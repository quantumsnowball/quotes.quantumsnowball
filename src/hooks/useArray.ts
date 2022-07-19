import { useState, useCallback } from 'react'


function useArray<T>(initialValue: T[]) {
  const [value, setValue] = useState(initialValue)

  const push = useCallback((element: T) => {
    setValue(oldValue => [...oldValue, element])
  }, [])

  const remove = useCallback((index: number) => {
    setValue(oldValue => oldValue.filter((_, i) => i !== index))
  }, [])

  function isEmpty() {
    return value.length === 0
  }

  return { value, setValue, push, remove, isEmpty }
}

export default useArray

