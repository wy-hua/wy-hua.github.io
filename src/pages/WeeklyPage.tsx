import type { Lang } from '../types'
import { T } from '../i18n/translations'
import PageHeader from '../components/PageHeader'

export default function WeeklyPage({ lang }: { lang: Lang }) {
  const t = T[lang].weekly
  return (
    <div className="page">
      <PageHeader zh="週間聚會" en="Weekly Meetings" lang={lang} />
      <div className="container">
        <div className="meeting-card">
          <div className="meeting-day">{t.friDay}</div>
          <div className="meeting-body">
            <div className="meeting-title">{t.fridayH}</div>
            <div className="meeting-time">{t.fridayTime}</div>
            <div className="meeting-zoom">{t.fridayZoom}</div>
            <p className="meeting-desc">{t.fridayDesc}</p>
          </div>
        </div>
        <div className="meeting-card">
          <div className="meeting-day">{t.satDay}</div>
          <div className="meeting-body">
            <div className="meeting-title">{t.satH}</div>
            <div className="meeting-time">{t.satTime}</div>
            <div className="meeting-zoom">{t.satZoom}</div>
          </div>
        </div>
        <div className="meeting-card">
          <div className="meeting-day">{t.sunDay}</div>
          <div className="meeting-body">
            <div className="meeting-title">{t.sunH}</div>
            <div className="meeting-time">{t.sunTime}</div>
            <div className="meeting-zoom">{t.sunLoc}</div>
          </div>
        </div>
        <p className="body-text" style={{ marginTop: 24 }}>
          {t.contact} <a href="mailto:cbcgb2022@gmail.com">cbcgb2022@gmail.com</a>
        </p>
      </div>
    </div>
  )
}
