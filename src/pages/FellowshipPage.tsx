import type { Lang } from '../types'
import { T } from '../i18n/translations'
import PageHeader from '../components/PageHeader'

export default function FellowshipPage({ lang }: { lang: Lang }) {
  const t = T[lang].fellowship
  return (
    <div className="page">
      <PageHeader zh="團契小組" en="Fellowships" lang={lang} />
      <div className="container">
        <div className="section">
          <span className="section-title">{t.goalH}</span>
          <p className="body-text">{t.goal}</p>
        </div>
        <div className="section">
          <span className="section-title">{t.purposeH}</span>
          <p className="body-text">{t.purpose}</p>
        </div>
        <div className="open-notice">✝︎ {t.open}</div>
        <div className="verse-block" style={{ marginTop: 24 }}>
          <p>{t.verse}</p>
          <cite>{t.verseRef}</cite>
        </div>
      </div>
    </div>
  )
}
