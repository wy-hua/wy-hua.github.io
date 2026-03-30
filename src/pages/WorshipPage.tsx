import type { Lang } from '../types'
import { T } from '../i18n/translations'
import PageHeader from '../components/PageHeader'

export default function WorshipPage({ lang }: { lang: Lang }) {
  const full = T[lang]
  const t = full.worship
  return (
    <div className="page">
      <PageHeader zh="主日崇拜" en="Sunday Worship" lang={lang} />
      <div className="container">
        <div className="section">
          <p className="body-text">{t.p1}</p>
          <p className="body-text">{t.p2}</p>
        </div>
        <div className="section">
          <span className="section-title">{t.timeH}</span>
          <div className="info-card">
            <div className="info-row">
              <span className="info-label">{full.ui.time}</span>
              <span className="info-value">{t.time}</span>
            </div>
            <div className="info-row">
              <span className="info-label">{full.ui.location}</span>
              <span className="info-value">{t.loc}</span>
            </div>
            <div className="info-row">
              <span className="info-label">{full.ui.addr}</span>
              <span className="info-value">{t.addr}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Email</span>
              <span className="info-value"><a href="mailto:cbcgb2022@gmail.com">cbcgb2022@gmail.com</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
