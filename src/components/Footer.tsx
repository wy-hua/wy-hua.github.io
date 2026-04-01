import type { Lang } from '../types'
import { T } from '../i18n/translations'

interface Props { lang: Lang }

export default function Footer({ lang }: Props) {
  const t = T[lang].footer
  const tUi = T[lang].ui
  const tagline = T[lang].tagline
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-identity">
          <div className="footer-name">
            <span className="footer-name-cross">✝</span>
            {t.attn}
          </div>
          <div className="footer-tagline">{tagline}</div>
        </div>
        <div className="footer-right">
          <div className="footer-contact-row">
            <span className="footer-contact-label">{tUi.addr}</span>
            <span className="footer-contact-value">{t.addr}</span>
          </div>
          <div className="footer-contact-row">
            <span className="footer-contact-label">Email</span>
            <a href={`mailto:${t.email}`} className="footer-contact-value footer-contact-link">{t.email}</a>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com/ehwcc" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              {t.fb}
            </a>
            <a href="http://www.easternhillschurch.org/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              {t.english}
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copy">© {t.copy}</div>
    </footer>
  )
}
