import type { Lang } from '../types'

interface Props { zh: string; en: string; lang: Lang }

export default function PageHeader({ zh, en, lang }: Props) {
  return (
    <div className="page-header">
      <div className="page-header-zh">{lang !== 'en' ? zh : en}</div>
      <div className="page-header-en">{lang !== 'en' ? en : zh}</div>
    </div>
  )
}
