// 项目：爱学转介绍活动
// 图片文件夹：/2转介绍裂变  （封面用第 1 张图，长图按文件名结尾数字排序）

const images = Object.entries(
  import.meta.glob('../../2转介绍裂变/*.png', { eager: true, query: '?url', import: 'default' })
)
  .sort(([a], [b]) => Number(a.match(/(\d+)\.png$/)[1]) - Number(b.match(/(\d+)\.png$/)[1]))
  .map(([, url]) => url)

export default {
  tag: { cn: '运营设计', en: 'H5 Design' },
  title: { cn: '爱学转介绍活动', en: 'Global Audio Chat' },
  coverFit: null,
  cover: images[0],
  images,
  detail: {
    cn: '公司转介绍业务在小学阶段因正价课学员基数小，因线索成本过高而使 ROI 无法打正。在此背景下，"分享海报带线索"拟引入"正转低"模式，通过老生分享海报吸引新生领取低价体验课，以低成本获取大量线索，实现转介业务的规模化增长。',
    en: 'The referral business struggled to reach positive ROI in the primary-school stage due to a small base of full-price students and high lead-acquisition costs. Against this backdrop, the "Share Poster for Leads" initiative introduced a "full-to-low" model: existing students share posters to attract new students who claim low-priced trial courses, acquiring large volumes of leads at low cost and scaling the referral business.',
    role: 'UI 设计',
    roleEn: 'UI Design',
    year: '2025',
  },
}
