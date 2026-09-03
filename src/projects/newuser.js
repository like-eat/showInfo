// 项目：爱学APP新手专区活动
// 图片文件夹：/3新用户  （封面用文件名以 Slide 开头的图，长图按结尾数字排序）

const images = Object.entries(
  import.meta.glob('../../3新用户/*.png', { eager: true, query: '?url', import: 'default' })
)
  .filter(([p]) => /\d+\.png$/.test(p) && !/Slide/.test(p))
  .sort(([a], [b]) => Number(a.match(/(\d+)\.png$/)[1]) - Number(b.match(/(\d+)\.png$/)[1]))
  .map(([, url]) => url)

const cover = Object.values(
  import.meta.glob('../../3新用户/Slide*.png', { eager: true, query: '?url', import: 'default' })
)[0]

export default {
  tag: { cn: '运营设计', en: 'UI Project' },
  title: { cn: '爱学APP新手专区活动', en: 'AI Bookkeeping' },
  coverFit: 'object-contain',
  cover,
  images,
  detail: {
    cn: '本策划案，围绕"提升新用户领课率、线索质量与留存"，通过任务制活动设计，引导用户融入 APP 生态，增强参与感，最终实现线索成本下降与转化效率提升。',
    en: 'This proposal centers on "improving new-user course-claim rate, lead quality, and retention". Through a task-based activity design, it guides users to integrate into the APP ecosystem and strengthens engagement, ultimately reducing lead costs and improving conversion efficiency.',
    role: '体验设计',
    roleEn: 'Experience Design',
    year: '2024',
  },
}
