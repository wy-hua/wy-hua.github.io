import { useState } from 'react'
import type { Lang, Page } from '../types'
import { T } from '../i18n/translations'

interface Props {
  page: Page
  setPage: (p: Page) => void
  lang: Lang
  setLang: (l: Lang) => void
  dark: boolean
  setDark: (d: boolean) => void
}

export default function Nav({ page, setPage, lang, setLang, dark, setDark }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const t = T[lang]
  const pages: [Page, string][] = [
    ['home', t.nav[0]], ['worship', t.nav[1]], ['fellowship', t.nav[2]],
    ['weekly', t.nav[3]], ['sermons', t.nav[4]], ['contact', t.nav[5]], ['library', t.nav[6]],
  ]

  const goTo = (p: Page) => { setPage(p); setMenuOpen(false); window.scrollTo(0, 0) }

  const langButtons = (closeOnSelect: boolean) => (
    <div className="lang-segmented">
      {(['zh-TW', 'zh-CN', 'en'] as Lang[]).map(l => (
        <button
          key={l}
          className={`lang-seg-btn${lang === l ? ' active' : ''}`}
          onClick={() => { setLang(l); if (closeOnSelect) setMenuOpen(false) }}
        >
          {l === 'zh-TW' ? '繁' : l === 'zh-CN' ? '简' : 'EN'}
        </button>
      ))}
    </div>
  )

  return (
    <nav className="nav">
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => goTo('home')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <span className="nav-cross">✝︎</span>
          <span className="nav-name">{t.churchName}</span>
        </button>
        <div className="nav-links">
          {pages.map(([p, label]) => (
            <button key={p} className={`nav-link${page === p ? ' active' : ''}`} onClick={() => goTo(p)}>
              {label}
            </button>
          ))}
          <a href="http://www.easternhillschurch.org/" target="_blank" rel="noopener noreferrer" className="nav-link nav-external">
            {t.nav[7]}
          </a>
        </div>
        <div className="nav-controls">
          {langButtons(false)}
          <button className="nav-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? '☀' : '🌙'}
          </button>
        </div>
        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          style={{ marginLeft: 'auto' }}
        >
          <span /><span /><span />
        </button>
      </div>
      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
        {pages.map(([p, label]) => (
          <button key={p} className={`nav-link${page === p ? ' active' : ''}`} onClick={() => goTo(p)}>
            {label}
          </button>
        ))}
        <a href="http://www.easternhillschurch.org/" target="_blank" rel="noopener noreferrer" className="nav-link nav-external">
          {t.nav[7]}
        </a>
        <div className="nav-mobile-controls">
          {langButtons(true)}
          <button className="nav-btn" onClick={() => { setDark(!dark); setMenuOpen(false) }}>
            {dark ? '☀ Light' : '🌙 Dark'}
          </button>
        </div>
      </div>
    </nav>
  )
}
