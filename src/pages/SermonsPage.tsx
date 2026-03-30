import type { Lang } from '../types'
import { T } from '../i18n/translations'
import { SERMONS } from '../data/sermons'
import PageHeader from '../components/PageHeader'

export default function SermonsPage({ lang }: { lang: Lang }) {
  const t = T[lang].sermons
  return (
    <div className="page">
      <PageHeader zh="證道信息" en="Sermons" lang={lang} />
      <div className="container-wide">
        <p className="sermon-intro">{t.intro}</p>
        <div className="section">
          <span className="section-title">{t.tableH}</span>
          <div className="sermons-table-wrap">
            <table className="sermons-table">
              <thead>
                <tr>
                  <th>{t.date}</th>
                  <th>{t.title}</th>
                  <th>{t.speaker}</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {SERMONS.map(s => (
                  <tr key={s.date}>
                    <td className="sermon-date">{s.date}</td>
                    <td>{s.title}</td>
                    <td>{s.speaker}</td>
                    <td>
                      <a className="sermon-listen" href={s.url} target="_blank" rel="noopener noreferrer">
                        {t.listen}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="sermons-note">{t.more}</p>
        </div>
        <div className="section">
          <span className="section-title">{t.archiveH}</span>
          <div className="info-card">
            <div className="info-row">
              <span className="info-label"></span>
              <span className="info-value">
                <a href="http://www.ehwcc.org/home_files/Sermons-2012-05.htm" target="_blank" rel="noopener noreferrer">{t.archive2012}</a>
              </span>
            </div>
            <div className="info-row">
              <span className="info-label"></span>
              <span className="info-value">
                <a href="http://www.ehwcc.org/home_files/Sermons-2011-07.html" target="_blank" rel="noopener noreferrer">{t.archive2011}</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
