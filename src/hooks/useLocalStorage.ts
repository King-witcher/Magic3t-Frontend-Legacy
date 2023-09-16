import { useEffect, useState } from 'react'

export function useLocalStorage<T = any>(key: string, initialValue: T) {
  const [data, setData] = useState<T>(get() || initialValue)

  function get() {
    const item = localStorage.getItem(key)
    if (item) return JSON.parse(localStorage.getItem(key) || '') as T
    else return null
  }

  function set() {
    localStorage.setItem(key, JSON.stringify(data))
  }

  useEffect(set, [data])

  return [data, setData]
}
