import { useTheme } from '../hooks'

interface Props {
  className?: string
}

export const ThemeSwitcher = ({ className }: Props) => {
  const { theme, setLight, setDark, setSystem } = useTheme()

  return (
    <div className={`flex gap-2 rounded-xl border px-2 py-1 ${className}`}>
      <button
        onClick={setLight}
        className={`rounded p-1 ${theme === 'light' ? 'bg-gray-300/50' : ''}`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          aria-hidden='true'
          data-slot='icon'
          width='20'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
          ></path>
        </svg>
      </button>
      <button
        onClick={setDark}
        className={`rounded p-1 ${theme === 'dark' ? 'bg-gray-300/30' : ''}`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          aria-hidden='true'
          data-slot='icon'
          width='20'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z'
          ></path>
        </svg>
      </button>
      <button
        onClick={setSystem}
        className={`rounded p-1 ${theme === 'system' ? 'bg-gray-300/30' : ''}`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
          aria-hidden='true'
        >
          <rect width='20' height='14' x='2' y='3' rx='2'></rect>
          <line x1='8' x2='16' y1='21' y2='21'></line>
          <line x1='12' x2='12' y1='17' y2='21'></line>
        </svg>
      </button>
    </div>
  )
}
