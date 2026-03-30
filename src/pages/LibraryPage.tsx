import type { Lang } from '../types'
import { T } from '../i18n/translations'
import { LIBRARY } from '../data/library'
import PageHeader from '../components/PageHeader'

export default function LibraryPage({ lang }: { lang: Lang }) {
  const t = T[lang].library
  return (
    <div className="page">
      <PageHeader zh="公佈欄/圖書館" en="Bulletin / Library" lang={lang} />
      <div className="container-wide">
        <div className="section">
          <span className="section-title">{t.missionH}</span>
          <p className="body-text">{t.missionNote}</p>
        </div>
        <div className="section">
          <span className="section-title">{t.rulesH}</span>
          <ul className="rules-list">
            {t.rules.map((r, i) => (
              <li key={i} className="rule-item">
                <span className="rule-num">{i + 1}</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="section">
          <span className="section-title">{t.catalogH}</span>
          <div className="library-table-wrap">
            <table className="library-table">
              <thead>
                <tr>
                  <th className="lib-no">{t.no}</th>
                  <th>{t.title}</th>
                </tr>
              </thead>
              <tbody>
                {LIBRARY.map((title, i) => (
                  <tr key={i}>
                    <td className="lib-no">{i + 1}</td>
                    <td>{title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
