import { useState, useEffect } from 'react'
import './App.css'
import type { Lang, Page } from './types'
import Nav from './components/Nav'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import WorshipPage from './pages/WorshipPage'
import FellowshipPage from './pages/FellowshipPage'
import WeeklyPage from './pages/WeeklyPage'
import SermonsPage from './pages/SermonsPage'
import ContactPage from './pages/ContactPage'
import LibraryPage from './pages/LibraryPage'

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [lang, setLang] = useState<Lang>('zh-TW')

  // Follow system dark/light preference; allow manual override
  const [dark, setDark] = useState<boolean>(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => setDark(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const navigate = (p: Page) => { setPage(p); window.scrollTo(0, 0) }

  return (
    <div data-theme={dark ? 'dark' : 'light'}>
      <Nav page={page} setPage={navigate} lang={lang} setLang={setLang} dark={dark} setDark={setDark} />
      {page === 'home'       && <HomePage       lang={lang} nav={navigate} />}
      {page === 'worship'    && <WorshipPage    lang={lang} />}
      {page === 'fellowship' && <FellowshipPage lang={lang} />}
      {page === 'weekly'     && <WeeklyPage     lang={lang} />}
      {page === 'sermons'    && <SermonsPage    lang={lang} />}
      {page === 'contact'    && <ContactPage    lang={lang} />}
      {page === 'library'    && <LibraryPage    lang={lang} />}
      <Footer lang={lang} nav={navigate} />
    </div>
  )
}
