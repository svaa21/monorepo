import { useEffect, useRef, useState } from 'react'
import { openDB, type IDBPDatabase } from 'idb'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storage, setStorage] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
      // return item ? JSON.parse(item) ?? initialValue : initialValue;
    } catch (error) {
      console.log(error)
      // console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storage))
    // try {
    //   const serialized = JSON.stringify(storage);
    //   if (localStorage.getItem(key) !== serialized) {
    //     localStorage.setItem(key, serialized);
    //   }
    // } catch (error) {
    //   console.warn(`Error setting localStorage key "${key}":`, error);
    // }
  }, [key, storage])

  return [storage, setStorage] as const
}

export function useSessionStorage<T>(key: string, initialValue: T) {
  const [storage, setStorage] = useState<T>(() => {
    try {
      const item = sessionStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(storage))
  }, [key, storage])

  return [storage, setStorage] as const
}

export function useIndexedDB(
  idbName: string,
  storeNames: string[],
  version: number = 1
) {
  const [idb, setIdb] = useState<IDBPDatabase | null>(null)

  const stableStoreNames = useRef(storeNames)

  useEffect(() => {
    try {
      const init = async () => {
        const db = await openDB(idbName, version, {
          upgrade(db) {
            for (const storeName of stableStoreNames.current) {
              if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, {
                  keyPath: 'id',
                  autoIncrement: true
                })
              }
            }
          }
        })
        setIdb(db)
      }

      init()
    } catch (error) {
      console.log(error)
      setIdb(null)
    }
  }, [idbName, version])

  return idb
}
