import { useEffect, useState } from 'react'
import { Contrast, Minus, Plus, RotateCcw } from 'lucide-react'

const STORAGE_KEY = 'accessible-hue-preferences'

type Preferences = {
  fontScale: number
  highContrast: boolean
  reduceMotion: boolean
}

const defaultPreferences: Preferences = {
  fontScale: 1,
  highContrast: false,
  reduceMotion: false,
}

function readPreferences(): Preferences {
  const raw = localStorage.getItem(STORAGE_KEY)

  if (!raw) {
    return defaultPreferences
  }

  try {
    return { ...defaultPreferences, ...(JSON.parse(raw) as Partial<Preferences>) }
  } catch {
    return defaultPreferences
  }
}

export function AccessibilityToolbar() {
  const [preferences, setPreferences] = useState<Preferences>(() => readPreferences())

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--user-font-scale',
      preferences.fontScale.toString(),
    )
    document.documentElement.dataset.contrast = preferences.highContrast ? 'high' : 'normal'
    document.documentElement.dataset.motion = preferences.reduceMotion ? 'reduced' : 'normal'
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences))
  }, [preferences])

  const updateFontScale = (amount: number) => {
    setPreferences((current) => ({
      ...current,
      fontScale: Math.min(1.35, Math.max(0.95, Number((current.fontScale + amount).toFixed(2)))),
    }))
  }

  return (
    <section className="accessibility-toolbar" aria-label="Tùy chọn tiếp cận">
      <div className="accessibility-toolbar__inner">
        <p className="accessibility-toolbar__label">Tùy chọn tiếp cận</p>
        <div className="toolbar-actions" role="group" aria-label="Điều chỉnh hiển thị">
          <button type="button" className="icon-button" onClick={() => updateFontScale(-0.1)}>
            <Minus aria-hidden="true" size={17} />
            <span>Giảm cỡ chữ</span>
          </button>
          <button type="button" className="icon-button" onClick={() => updateFontScale(0.1)}>
            <Plus aria-hidden="true" size={17} />
            <span>Tăng cỡ chữ</span>
          </button>
          <button
            type="button"
            className="icon-button"
            aria-pressed={preferences.highContrast}
            onClick={() =>
              setPreferences((current) => ({
                ...current,
                highContrast: !current.highContrast,
              }))
            }
          >
            <Contrast aria-hidden="true" size={17} />
            <span>Tương phản cao</span>
          </button>
          <button
            type="button"
            className="icon-button"
            aria-pressed={preferences.reduceMotion}
            onClick={() =>
              setPreferences((current) => ({
                ...current,
                reduceMotion: !current.reduceMotion,
              }))
            }
          >
            <RotateCcw aria-hidden="true" size={17} />
            <span>Giảm chuyển động</span>
          </button>
        </div>
      </div>
    </section>
  )
}
