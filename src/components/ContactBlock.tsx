import type { Lang } from '../types'
import { T } from '../i18n/translations'

export default function ContactBlock({ lang }: { lang: Lang }) {
  const t = T[lang]
  return (
    <div className="contact-block">
      <div className="contact-line">
        <span className="contact-line-label">{t.ui.addr}</span>
        <span>{t.contact.addr}</span>
      </div>
      <div className="contact-line">
        <span className="contact-line-label">Email</span>
        <a href={`mailto:${t.footer.email}`}>{t.footer.email}</a>
      </div>
      <div className="contact-line">
        <span className="contact-line-label">{t.ui.social}</span>
        <a href="https://www.facebook.com/ehwcc" target="_blank" rel="noopener noreferrer">{t.contact.fb}</a>
      </div>
    </div>
  )
}
