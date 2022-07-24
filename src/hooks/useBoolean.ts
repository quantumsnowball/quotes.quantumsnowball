import { useCallback, useState } from "react";

export function useBoolean(initialValue: boolean) {
  const [value, setValue] = useState(initialValue)

  const toggleValue = useCallback(() => setValue(prev => !prev), [])

  return { value, setValue, toggleValue }
}                                                                   
