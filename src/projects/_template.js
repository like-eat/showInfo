// ========================================================================
// 项目模板（未接入，仅供复制）
//
// 用法：把本文件全部内容复制、覆盖到 ligong.js（理工送），
//      再把下面 4 处「新项目文件夹」改成你的图片文件夹名，
//      填好标签/标题/正文，放好图片，push 即可上线。
// ========================================================================

// 1) 图片文件夹：在项目根目录新建一个文件夹放这个项目的图，把下面路径里的
//    「新项目文件夹」都改成它的名字（4 处，两个 glob 各 2 段）。
//    规则：文件名以 Slide 开头的那张 = 封面；其余按文件名【结尾数字】从小到大排。
const images = Object.entries(
  import.meta.glob('../../新项目文件夹/*.png', { eager: true, query: '?url', import: 'default' })
)
  .filter(([p]) => !/Slide/.test(p))
  .sort(([a], [b]) => Number(a.match(/(\d+)\.png$/)[1]) - Number(b.match(/(\d+)\.png$/)[1]))
  .map(([, url]) => url)

const cover = Object.values(
  import.meta.glob('../../新项目文件夹/Slide*.png', { eager: true, query: '?url', import: 'default' })
)[0]

export default {
  // 2) 卡片上的小标签（中 / 英）
  tag: { cn: '标签中文', en: 'Tag EN' },
  // 3) 卡片标题（中 / 英）
  title: { cn: '项目标题中文', en: 'Project Title EN' },
  // 4) 封面填充方式：'object-contain' 完整显示不裁剪 / null 或 'object-cover' 裁剪铺满
  coverFit: 'object-contain',
  cover,
  images,
  detail: {
    // 5) 详情页正文（中 / 英）
    cn: '这里写中文项目介绍……',
    en: 'Write the English project description here…',
    // 6) 角色（中 / 英）与年份
    role: '交互设计',
    roleEn: 'UX Design',
    year: '2025',
  },
}
