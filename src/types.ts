export type Page = 'home' | 'worship' | 'fellowship' | 'weekly' | 'sermons' | 'contact' | 'library'
export type Lang = 'zh-TW' | 'zh-CN' | 'en'

export interface Sermon {
  date: string
  title: string
  speaker: string
  url: string
}
