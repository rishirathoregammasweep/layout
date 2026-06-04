/* eslint-disable react-refresh/only-export-components */
import * as React from "react"
import { initThemeColorsFromStorage } from "@/lib/theme-colors"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  disableTransitionOnChange?: boolean
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = React.createContext<
  ThemeProviderState | undefined
>(undefined)

function disableTransitionsTemporarily() {
  const style = document.createElement("style")
  style.appendChild(
    document.createTextNode(
      "*,*::before,*::after{-webkit-transition:none!important;transition:none!important}"
    )
  )
  document.head.appendChild(style)

  return () => {
    window.getComputedStyle(document.body)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        style.remove()
      })
    })
  }
}

function applyDarkMode(disableTransitionOnChange: boolean) {
  const root = document.documentElement
  const restoreTransitions = disableTransitionOnChange
    ? disableTransitionsTemporarily()
    : null

  root.classList.remove("light", "dark")
  root.classList.add("dark")

  if (restoreTransitions) {
    restoreTransitions()
  }
}

export function ThemeProvider({
  children,
  storageKey = "theme",
  disableTransitionOnChange = true,
  ...props
}: ThemeProviderProps) {
  const setTheme = React.useCallback(
    (_nextTheme: Theme) => {
      localStorage.setItem(storageKey, "dark")
    },
    [storageKey]
  )

  React.useEffect(() => {
    initThemeColorsFromStorage()
    localStorage.setItem(storageKey, "dark")
    applyDarkMode(disableTransitionOnChange)
  }, [disableTransitionOnChange, storageKey])

  const value = React.useMemo(
    () => ({
      theme: "dark" as Theme,
      setTheme,
    }),
    [setTheme]
  )

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
