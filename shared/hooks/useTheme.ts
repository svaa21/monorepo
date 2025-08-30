import { useEffect, useState } from 'react'

function getPreferredTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme') || 'system'
    let appliedTheme = stored
    if (stored === 'system') {
      appliedTheme = getPreferredTheme()
      localStorage.setItem('theme', 'system')
    }
    document.documentElement.classList.toggle('dark', appliedTheme === 'dark')
    return stored
  })

  useEffect(() => {
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handler = (e: MediaQueryListEvent) => {
        document.documentElement.classList.toggle('dark', e.matches)
      }
      mediaQuery.addEventListener('change', handler)
      return () => mediaQuery.removeEventListener('change', handler)
    }
  }, [theme])

  function applyTheme(preference: 'light' | 'dark' | 'system') {
    localStorage.setItem('theme', preference)
    setTheme(preference)

    const actualTheme =
      preference === 'system' ? getPreferredTheme() : preference
    document.documentElement.classList.toggle('dark', actualTheme === 'dark')
  }

  function toggleTheme() {
    if (theme === 'system') {
      applyTheme(getPreferredTheme() === 'dark' ? 'light' : 'dark')
    } else {
      applyTheme(theme === 'dark' ? 'light' : 'dark')
    }
  }

  return {
    theme,
    setLight: () => applyTheme('light'),
    setDark: () => applyTheme('dark'),
    setSystem: () => applyTheme('system'),
    toggleTheme
  }
}
