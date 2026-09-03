import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { I18N, COVERS, PROJECT_DETAILS } from './data.js'
import { Cursor } from './components/Cursor.jsx'
import { Starfield } from './components/Starfield.jsx'
import { Nav } from './components/Nav.jsx'
import { Hero } from './components/Hero.jsx'
import { Gallery } from './components/Gallery.jsx'
import { About } from './components/About.jsx'
import { Experience } from './components/Experience.jsx'
import { SiteFooter } from './components/SiteFooter.jsx'
import { ProjectModal } from './components/ProjectModal.jsx'

const SECTION_IDS = ['home', 'gallery', 'about', 'experience']

export default function App() {
  const [lang, setLang] = useState('cn')
  const [theme, setTheme] = useState('dark')
  const [activeIdx, setActiveIdx] = useState(0)
  const [openProject, setOpenProject] = useState(null)
  const t = I18N[lang]

  // Keep the page <body> backdrop in sync with the active theme (covers overscroll areas).
  useEffect(() => {
    document.body.style.backgroundColor = theme === 'light' ? '#ffffff' : '#010103'
  }, [theme])

  // Track which section is closest to viewport top — drives the nav indicator.
  useEffect(() => {
    const onScroll = () => {
      const offsets = SECTION_IDS.map((id) => {
        const el = document.getElementById(id)
        return el ? Math.abs(el.getBoundingClientRect().top) : Infinity
      })
      setActiveIdx(offsets.indexOf(Math.min(...offsets)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      data-theme={theme}
      className="bg-[#010103] text-white min-h-screen cursor-none overflow-x-hidden selection:bg-blue-500/30 font-premium"
    >
      <Starfield dark={theme === 'dark'} />
      <Cursor />
      <Nav
        items={t.nav}
        activeIdx={activeIdx}
        lang={lang}
        onToggleLang={() => setLang(lang === 'cn' ? 'en' : 'cn')}
        theme={theme}
        onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />

      <main className="relative z-10 max-w-6xl mx-auto px-8">
        <Hero data={t.hero} />
        <Gallery
          data={t.gallery}
          covers={COVERS}
          onOpen={(proj) =>
            setOpenProject({ ...proj, cover: COVERS[proj.index], detail: PROJECT_DETAILS[proj.index] })
          }
        />
        <About data={t.about} lang={lang} />
        <Experience data={t.exp} />
        <SiteFooter data={t.footer} />
      </main>

      <AnimatePresence>
        {openProject && (
          <ProjectModal
            project={openProject}
            lang={lang}
            onClose={() => setOpenProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
