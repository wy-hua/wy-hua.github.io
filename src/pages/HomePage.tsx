import type { Lang, Page } from '../types'
import { T } from '../i18n/translations'
import ContactBlock from '../components/ContactBlock'

interface Props { lang: Lang; nav: (p: Page) => void }

export default function HomePage({ lang, nav }: Props) {
  const t = T[lang]
  const h = t.home
  return (
    <div className="page">
      <div className="hero">
        <div className="hero-name-zh">{t.churchName}</div>
        <div className="hero-name-en">{t.churchSub}</div>
        <div className="hero-tagline">{t.tagline}</div>
      </div>
      <div className="container">
        <div className="section">
          <h2 className="section-title">{h.welcomeH}</h2>
          <p className="body-text">{h.p1}</p>
          <p className="body-text">{h.p2}</p>
          <p className="body-text">{h.p3}</p>
          <div className="home-verse">
            <p>{h.verse}</p>
            <cite>{h.verseRef}</cite>
          </div>
        </div>

        <div className="section">
          <span className="section-title">{h.scheduleH}</span>
          <div className="home-grid">
            <div className="home-card">
              <div className="home-card-icon">⛪</div>
              <div className="home-card-title">{h.sundayH}</div>
              <div className="home-card-item"><strong>{h.sunday}</strong></div>
              <div className="home-card-item"><small>{h.sundayLoc}</small></div>
              <div style={{ marginTop: 12 }}>
                <button className="sermon-listen" onClick={() => nav('worship')} style={{ cursor: 'pointer' }}>
                  {t.ui.learnMore}
                </button>
              </div>
            </div>
            <div className="home-card">
              <div className="home-card-icon">📖</div>
              <div className="home-card-title">{h.fridayH}</div>
              <div className="home-card-item"><strong>{h.friday}</strong></div>
              <div className="home-card-item"><small>{h.fridayInfo}</small></div>
            </div>
            <div className="home-card">
              <div className="home-card-icon">🙏</div>
              <div className="home-card-title">{h.satH}</div>
              <div className="home-card-item"><strong>{h.saturday}</strong></div>
              <div className="home-card-item"><small>{h.satInfo}</small></div>
            </div>
          </div>
        </div>

        <div className="section">
          <span className="section-title">{h.contactH}</span>
          <ContactBlock lang={lang} />
        </div>
      </div>
    </div>
  )
}
