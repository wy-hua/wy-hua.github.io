import { useState } from 'react'
import type { Lang } from '../types'
import { T } from '../i18n/translations'
import { SERMONS } from '../data/sermons'
import PageHeader from '../components/PageHeader'

const PAGE_SIZE = 20

export default function SermonsPage({ lang }: { lang: Lang }) {
  const t = T[lang].sermons
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(SERMONS.length / PAGE_SIZE)
  const start = (page - 1) * PAGE_SIZE
  const visible = SERMONS.slice(start, start + PAGE_SIZE)

  function goTo(p: number) {
    setPage(p)
    window.scrollTo(0, 0)
  }

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
                {visible.map(s => (
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
          <div className="sermons-pagination">
            <button
              className="sermon-page-btn"
              onClick={() => goTo(page - 1)}
              disabled={page === 1}
            >
              {t.prev}
            </button>
            <span className="sermon-page-info">{t.pageOf(page, totalPages)}</span>
            <button
              className="sermon-page-btn"
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages}
            >
              {t.next}
            </button>
          </div>
          <p className="sermons-note">{t.more}</p>
        </div>
        <div className="section">
          <span className="section-title">{t.archiveH}</span>
          <div className="sermon-archive-links">
            <a href="http://www.ehwcc.org/home_files/Sermons-2012-05.htm" target="_blank" rel="noopener noreferrer" className="sermon-archive-link">
              <span className="sermon-archive-arrow">→</span>{t.archive2012}
            </a>
            <a href="http://www.ehwcc.org/home_files/Sermons-2011-07.html" target="_blank" rel="noopener noreferrer" className="sermon-archive-link">
              <span className="sermon-archive-arrow">→</span>{t.archive2011}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
