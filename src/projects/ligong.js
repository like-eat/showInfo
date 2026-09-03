// 项目：理工送外卖APP
// 图片文件夹：/5理工送  （封面用文件名以 Slide 开头的图，长图按结尾数字排序）
//
// ★ 以后要换成别的项目时：把 _template.js 的内容复制过来覆盖本文件，
//   再把 /5理工送 文件夹换成新项目的图即可（或改下面的文件夹路径）。


const images = Object.entries(
  import.meta.glob('../../梦幻西游/*.png', { eager: true, query: '?url', import: 'default' })
)
  .sort(([a], [b]) => Number(a.match(/(\d+)\D*\.png$/)[1]) - Number(b.match(/(\d+)\D*\.png$/)[1]))
  .map(([, url]) => url)

export default {
  // 卡片小标签（中 / 英）—— 按需修改
  tag: { cn: '游戏UI设计', en: 'Game UI' },
  // 卡片标题（中 / 英）
  title: { cn: '梦幻西游', en: 'Fantasy Westward Journey' },
  // 封面填充方式：'object-contain' 完整显示不裁剪 / null 裁剪铺满
  coverFit: 'object-contain',
  // 无独立封面图，用作品集第 1 页作封面
  cover: images[0],
  images,
  detail: {
    // 详情页正文（中 / 英）—— 待填写
    cn: '这里填写梦幻西游项目的中文介绍……',
    en: 'Write the English description for this project here…',
    role: 'UI 设计',
    roleEn: 'UI Design',
    year: '2025',
  },
}