// 项目：搜狐心流Agent
// 图片文件夹：/心流  （封面用第 1 张图，长图按文件名结尾数字排序）

const images = Object.entries(
  import.meta.glob('../../心流/*.png', { eager: true, query: '?url', import: 'default' })
)
  .sort(([a], [b]) => Number(a.match(/(\d+)\.png$/)[1]) - Number(b.match(/(\d+)\.png$/)[1]))
  .map(([, url]) => url)

export default {
  // 卡片标签
  tag: { cn: 'AI Agent', en: 'AI Agent' },
  // 卡片标题
  title: { cn: '搜狐心流Agent', en: 'Sohu Xinliu Agent' },
  // 封面填充方式：object-contain 完整显示 / object-cover 裁剪铺满
  coverFit: 'object-contain',
  cover: images[0],
  images,
  detail: {
    cn: '负责搜狐 BI 工具部门 AI 创作与智能体平台产品的交互方案设计。解决基于 Dify 的 Agent 前端展示与交互复制，实现平台化移植，满足心流框架、绿屏本生成等专业需求；从 0-1 主导心流 AI，制定产品 Web 界面风格与标准，包括界面、图标、控件等，建立设计规范与素材库，跨部门协作，共同验收设计效果。',
    en: 'Led interaction design for the AI-creation & agent platform of the BI tools dept. Solved Dify-based Agent front-end presentation and interaction replication, enabling platform-level porting for professional needs such as the Xinliu framework and green-screen script generation. Drove Xinliu AI from 0 to 1: defined the web UI style and standards (screens, icons, components), built design specs and an asset library, and collaborated cross-team on design acceptance.',
    role: '体验设计',
    roleEn: 'Experience Design',
    year: '2025',
  },
}
