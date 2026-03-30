import type { Lang } from '../types'
import { T } from '../i18n/translations'
import PageHeader from '../components/PageHeader'

export default function ContactPage({ lang }: { lang: Lang }) {
  const full = T[lang]
  const t = full.contact
  return (
    <div className="page">
      <PageHeader zh="如何前往" en="How to Find Us" lang={lang} />
      <div className="container">
        <div className="section">
          <span className="section-title">{t.dirH}</span>
          <ol className="steps">
            {[t.step1, t.step2, t.step3].map((s, i) => (
              <li key={i} className="step">
                <span className="step-num">{i + 1}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
          <div style={{ marginTop: 20 }}>
            <a
              href="https://www.google.com/maps/search/8445+Greiner+Road+Williamsville+NY+14221"
              target="_blank"
              rel="noopener noreferrer"
              className="sermon-listen"
            >
              {t.maps}
            </a>
          </div>
        </div>
        <div className="section">
          <span className="section-title">{t.rideH}</span>
          <p className="body-text">{t.ride}</p>
        </div>
        <div className="section">
          <span className="section-title">{t.contactH}</span>
          <div className="contact-block">
            <div className="contact-line">
              <span className="contact-line-label">{full.ui.church}</span>
              <span>{t.attn}</span>
            </div>
            <div className="contact-line">
              <span className="contact-line-label">{full.ui.addr}</span>
              <span>{t.addr}</span>
            </div>
            <div className="contact-line">
              <span className="contact-line-label">Email</span>
              <a href={`mailto:${t.email}`}>{t.email}</a>
            </div>
            <div className="contact-line">
              <span className="contact-line-label">{full.ui.social}</span>
              <a href="https://www.facebook.com/ehwcc" target="_blank" rel="noopener noreferrer">{t.fb}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
