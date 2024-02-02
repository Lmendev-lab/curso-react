import { useState } from "react"

const useLocalStorage = (itemName, initialItem) => {
  const parsedTodos = () => {
    const localStorageItem = localStorage.getItem(itemName)

    if (localStorageItem) return JSON.parse(localStorageItem)

    return initialItem
  }

  const [item, setItem] = useState(parsedTodos);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))

    setItem(newItem)
  }

  return [item, saveItem]
}

export { useLocalStorage }
