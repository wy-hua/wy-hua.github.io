import type { Lang, Page } from '../types'
import { T } from '../i18n/translations'

interface Props { lang: Lang; nav: (p: Page) => void }

export default function Footer({ lang, nav }: Props) {
  const t = T[lang].footer
  const tNav = T[lang].nav
  const pages: [Page, string][] = [
    ['worship', tNav[1]], ['fellowship', tNav[2]], ['weekly', tNav[3]],
    ['sermons', tNav[4]], ['contact', tNav[5]], ['library', tNav[6]],
  ]
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-name">✝ {t.attn}</div>
          <div className="footer-detail">{t.addr}</div>
          <div className="footer-detail"><a href={`mailto:${t.email}`}>{t.email}</a></div>
        </div>
        <div className="footer-links">
          {pages.map(([p, label]) => (
            <button key={p} className="footer-link-btn" onClick={() => nav(p)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontSize: '13.5px', color: 'var(--text-muted)', padding: 0 }}
            >{label}</button>
          ))}
        </div>
        <div className="footer-links">
          <a href="https://www.facebook.com/ehwcc" target="_blank" rel="noopener noreferrer">{t.fb}</a>
          <a href="http://www.easternhillschurch.org/" target="_blank" rel="noopener noreferrer">{t.english}</a>
        </div>
      </div>
      <div className="footer-copy">© {t.copy}</div>
    </footer>
  )
}
