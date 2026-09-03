// 站点内容入口：项目部分改为「每个项目一个文件」，集中在 src/projects/ 下。
// 想改某个项目的文字/图片，去改对应的项目文件即可，不用动本文件。

import xinliu from './projects/xinliu.js'
import newuser from './projects/newuser.js'
import ligong from './projects/ligong.js'
import referral from './projects/referral.js'
import website from './projects/website.js'

// 项目在「项目目录」里的显示顺序 = 这个数组的顺序。
// 想调整顺序 / 增删项目：改这一行即可（封面、卡片文字、详情会一起跟着走，不会错位）。
const PROJECTS = [xinliu, newuser, ligong, referral, website]

// 下面三项由 PROJECTS 自动派生，保持按序对齐，组件无需改动。
export const COVERS = PROJECTS.map((p) => p.cover)

export const PROJECT_DETAILS = PROJECTS.map((p) => ({ ...p.detail, images: p.images }))

const galleryProjects = (lang) =>
  PROJECTS.map((p) => ({ tag: p.tag[lang], title: p.title[lang], coverFit: p.coverFit || undefined }))

export const I18N = {
  cn: {
    nav: ['首页', '项目目录', '个人信息', '实习经历'],
    hero: { line1: 'Fiona', line2: 'UIUX Design', line3: '2025-2026', scroll: '探索作品' },
    gallery: {
      title: '项目目录',
      projects: galleryProjects('cn'),
    },
    about: {
      title: '个人信息',
      edu: '教育经历',
      skills: '专业技能',
      award: '获奖荣誉',
      contact: { email: 'E-mail: 690041588@qq.com', wechat: 'wechat: M15689909089' },
      aiAssistant: 'Fiona 小助手',
      aiPlaceholder: '向 PP 提问...',
      schools: [
        { name: '华南理工大学', degree: '设计学 硕士 · 2024-2027' },
        { name: '武汉理工大学', degree: '工业设计 本科 · 2020-2024' },
      ],
      awards: [
        '全国大学生创新创业大赛国家级',
        '全国数字艺术设计大赛全国二等奖',
        '全国大学生数字媒体科技作品及创意竞赛二等奖',
        '2021-2023 校三等奖学金 · CET-6',
        '2020-2024 年校优秀班干部',
      ],
    },
    exp: {
      title: '实习经历',
      list: [
        { c: '网易互娱', r: '交互设计师', d: '2026.04-2026.08', desc: '隶属 Mage 设计部梦幻西游 Cool 设计组，负责梦幻西游双端设计规范化，沉淀项目 Design Token 与模板体系，实现 AI 交付物规范；参与秋季资料片-助战系统、多个节庆活动构建，输出完整 UX 方案，支撑产品长线版本拓展；参与车迟斗法等经典玩法迭代、百变画笔等系统功能迭代，梳理游戏痛点，推动体验升级' },
        { c: '北京搜狐天下网络公司', r: '体验设计师', d: '2025.12-2026.2', desc: '独立负责搜狐 BI 工具部门 AI 创作与智能体平台产品的交互方案设计，参与 Agent 产品方向探索，共支持需求 12 个、输出页面约 40p+（心流 AI、畅游精灵）' },
        { c: '北京与爱为舞公司', r: 'UI 设计师', d: '2025.12-2026.2', desc: '负责核心业务爱学 APP，参与新用户、转介绍、官网迭代等项目设计产出，并参与设计走查（新用户引导、转介绍活动、官网 3.0 迭代）' },
        { c: '武汉酷酷球科技有限公司', r: '用户增长设计师', d: '2024.2-2024.3', desc: '用户增长方向设计支持' },
        { c: '武汉绘创坊设计有限公司', r: '设计助理', d: '2022.7-2022.10', desc: '官网、信息管理平台、品牌包装等多类设计支持' },
      ],
    },
    footer: { btn: '回到首页' },
    back: '返回项目',
  },
  en: {
    nav: ['Home', 'Gallery', 'About', 'Experience'],
    hero: { line1: 'Fiona', line2: 'UIUX Design', line3: '2025-2026', scroll: 'Explore' },
    gallery: {
      title: 'Project Gallery',
      projects: galleryProjects('en'),
    },
    about: {
      title: 'About Me',
      edu: 'Education',
      skills: 'Skills',
      award: 'Recognition',
      contact: { email: 'E-mail: 690041588@qq.com', wechat: 'wechat: M15689909089' },
      aiAssistant: 'Fiona Assistant',
      aiPlaceholder: 'Ask Deepseek...',
      schools: [
        { name: 'SCUT', degree: 'M.Eng Design · 2024-2027' },
        { name: 'WUT', degree: 'B.Eng Industrial Design · 2020-2024' },
      ],
      awards: [
        'National College Innovation & Entrepreneurship Competition',
        'National Digital Art Design Competition — 2nd Prize',
        'National Digital Media Sci-Tech & Creativity — 2nd Prize',
        '2021-2023 University Scholarship · CET-6',
        '2020-2024 Outstanding Class Cadre',
      ],
    },
    exp: {
      title: 'Experience',
      list: [
        { c: 'NetEase Interactive Entertainment', r: 'Interaction Designer', d: '2026.04-2026.08', desc: 'Mage Design Dept, Fantasy Westward Journey Cool Design Group. Led dual-platform design standardization, established Design Token & template systems, and standardized AI deliverables. Contributed to autumn expansion (Assist Battle system), festival events with full UX proposals; iterated classic gameplay (Chichi Arena) and system features (Magic Brush), identified pain points and drove UX upgrades' },
        { c: 'Sohu (Beijing)', r: 'Experience Designer', d: '2025.12-2026.2', desc: 'Led interaction design for the BI dept AI-creation & agent platform; explored Agent product direction. Supported 12 requirements, delivered ~40p+ (Xinliu AI, Changyou Genie)' },
        { c: 'Yuaiweiwu (Beijing)', r: 'UI Designer', d: '2025.12-2026.2', desc: 'Core product AiXue APP: design output for new-user, referral and website iteration projects, plus design QA (onboarding, referral, website 3.0)' },
        { c: 'Kukuqiu Tech (Wuhan)', r: 'Growth Designer', d: '2024.2-2024.3', desc: 'Design support for user-growth initiatives' },
        { c: 'Huichuangfang Design (Wuhan)', r: 'Design Assistant', d: '2022.7-2022.10', desc: 'Support across websites, management platforms and brand packaging' },
      ],
    },
    footer: { btn: 'Back to Home' },
    back: 'Back to Projects',
  },
}

export const PORTRAIT = new URL('../Rectangle 4.png', import.meta.url).href
