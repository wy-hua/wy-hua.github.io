import type { Sermon } from '../types'

// ╔══════════════════════════════════════════════════════════════════════╗
// ║              SERMON LIST  —  ADMIN EDITABLE                         ║
// ╠══════════════════════════════════════════════════════════════════════╣
// ║                                                                      ║
// ║  HOW TO ADD A NEW SERMON                                             ║
// ║  ───────────────────────                                             ║
// ║  1. Find the line that says  "↓ Add new sermons HERE ↓"  below.     ║
// ║  2. Copy the 6-line TEMPLATE block and paste it right below          ║
// ║     that marker (newest sermon always goes at the TOP).             ║
// ║  3. Fill in the four fields:                                         ║
// ║                                                                      ║
// ║     date    – the Sunday date.  Format: YYYY-MM-DD                   ║
// ║               Example: 2026-04-05                                    ║
// ║                                                                      ║
// ║     title   – the sermon title (Chinese or English is fine)          ║
// ║               Example: '復活的盼望'                                  ║
// ║                                                                      ║
// ║     speaker – preacher's name and title                              ║
// ║               Example: '刘铭辉 牧師'                                 ║
// ║                                                                      ║
// ║     url     – the full link to the video or audio file               ║
// ║               Example: 'http://www.ehwcc.org/Sermons/FILENAME.mp4'  ║
// ║               (Copy the file URL from the church server)             ║
// ║                                                                      ║
// ║  4. Save this file and redeploy the website.                         ║
// ║                                                                      ║
// ║  ── TEMPLATE (copy these 6 lines) ──────────────────────────────    ║
// ║                                                                      ║
// ║  {                                                                   ║
// ║    date:    '2026-04-05',                                            ║
// ║    title:   '講題 / Sermon Title',                                   ║
// ║    speaker: '姓名 牧師',                                             ║
// ║    url:     'http://www.ehwcc.org/Sermons/FILENAME.mp4',             ║
// ║  },                                                                  ║
// ║                                                                      ║
// ╚══════════════════════════════════════════════════════════════════════╝

export const SERMONS: Sermon[] = [

  // ↓↓↓  Add new sermons HERE (paste above this line)  ↓↓↓

  {
    date:    '2026-03-29',
    title:   '这是怎样的一位王',
    speaker: 'Barbara Farrow 牧師',
    url:     'http://www.ehwcc.org/Sermons/GMT20260329-134944_pastor_Barbara_Farrow.mp4',
  },
  {
    date:    '2026-03-22',
    title:   '认识我们的世代与信仰危机',
    speaker: '刘铭辉 牧師',
    url:     'http://www.ehwcc.org/Sermons/GMT20260322-134552_Pastor_Minghui_liu.mp4',
  },
  {
    date:    '2026-03-15',
    title:   '基督是神的智慧与大能',
    speaker: '任 传道',
    url:     'http://www.ehwcc.org/Sermons/GMT20260315-135056_Preacher_Ren.mp4',
  },
  {
    date:    '2026-03-08',
    title:   '若不是耶和华帮助我们',
    speaker: '简志敏 弟兄',
    url:     'http://www.ehwcc.org/Sermons/GMT20260308-134743_Brother_ZhiminJian.mp4',
  },
  {
    date:    '2026-03-01',
    title:   '让基督在我们身上显大',
    speaker: '傅连海 牧師',
    url:     'http://www.ehwcc.org/Sermons/GMT20260301-144555_Pastor_Lianhai_Fu.mp4',
  },
  {
    date:    '2026-02-22',
    title:   '华丽转身在正月',
    speaker: '刘铭辉 牧師',
    url:     'http://www.ehwcc.org/Sermons/GMT20260222-145027_Pastor_Minghui_liu.mp4',
  },
  {
    date:    '2026-02-15',
    title:   '清晰的使命,20:20的眼光',
    speaker: 'Barbara Farrow 牧師',
    url:     'http://www.ehwcc.org/Sermons/GMT20260215-144732_pastor_Barbara_Farrow.mp4',
  },
  {
    date:    '2026-02-08',
    title:   '我要听从谁',
    speaker: '朱黎 弟兄',
    url:     'http://www.ehwcc.org/Sermons/GMT20260208-145003_Brother_Li_zhu.mp4',
  },
  {
    date:    '2026-02-01',
    title:   '困锁中的福音',
    speaker: '傅连海 牧師',
    url:     'http://www.ehwcc.org/Sermons/GMT20260201-144951_Pastor_Lianhai_Fu.mp4',
  },
  {
    date:    '2026-01-25',
    title:   '2026年:不仅要活下去，更要发展壮大',
    speaker: 'Barbara Farrow 牧師',
    url:     'http://www.ehwcc.org/Sermons/GMT20260125-145413_Barbara_Farrow.mp4',
  },
]
