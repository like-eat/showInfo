// 项目：爱学Web官网
// 图片文件夹：/5官网  （封面用文件名以 Slide 开头的图，长图按结尾数字排序，支持 png/jpg）

const images = Object.entries(
  import.meta.glob('../../5官网/*.{png,jpg}', { eager: true, query: '?url', import: 'default' })
)
  .filter(([p]) => !/Slide/.test(p))
  .sort(([a], [b]) => Number(a.match(/(\d+)\D*$/)[1]) - Number(b.match(/(\d+)\D*$/)[1]))
  .map(([, url]) => url)

const cover = Object.values(
  import.meta.glob('../../5官网/Slide*.png', { eager: true, query: '?url', import: 'default' })
)[0]

export default {
  tag: { cn: '官网设计', en: 'IP Design' },
  title: { cn: '爱学Web官网', en: 'Smart Charging IP' },
  coverFit: null,
  cover,
  images,
  detail: {
    cn: '从 0 到 1 打造智能桌充产品的 IP 形象，包括 IP 形象的制定、故事线的描绘以及参与动画制作。',
    en: 'Built a smart tabletop charger IP from scratch, including character creation, storyline development, and animation production.',
    role: 'IP 设计',
    roleEn: 'IP Design',
    year: '2025',
  },
}
