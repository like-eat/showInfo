// ========================================================================
// 项目：梦幻西游（作品集）—— 尚未接入
//
// 图片文件夹：/梦幻西游  （4 张作品集页，按「第N页」的数字排序，封面用第 1 页）
//
// ★ 要正式启用（替换掉理工送）时，两步：
//   1) 把本文件【全部内容】复制，覆盖 src/projects/ligong.js
//   2) 填好下面 tag / title / detail 的文字后 push
//   （图片文件夹 /梦幻西游 已经放好，无需再动）
// ========================================================================

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
