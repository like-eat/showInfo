import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

const SECTIONS = ['home', 'gallery', 'about', 'experience']

// Pill nav (top-right). Active indicator slides under the active label; lang toggle on the side.
export function Nav({ items, activeIdx, lang, onToggleLang, theme, onToggleTheme }) {
  return (
    <motion.nav className="fixed top-[80px] right-12 z-[100] flex items-center gap-3 scale-[0.9] origin-right">
      <div className="relative bg-white/[0.03] backdrop-blur-[40px] border border-white/20 p-1.5 rounded-full flex items-center shadow-[0_8px_32px_rgba(0,0,0,0.5)] h-[52px]">
        <motion.div
          className="absolute h-[calc(100%-12px)] rounded-full bg-white/10 backdrop-blur-md border border-white/30 z-0"
          animate={{ x: activeIdx * 110 + 4, width: 110 }}
        />
        {items.map((label, i) => (
          <button
            key={i}
            onClick={() => document.getElementById(SECTIONS[i])?.scrollIntoView({ behavior: 'smooth' })}
            className={`relative z-10 w-[110px] h-full flex items-center justify-center text-[12px] tracking-wider transition-all duration-500 ${
              activeIdx === i ? 'text-white font-bold' : 'text-[#888888]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <button
        onClick={onToggleLang}
        className="bg-white/[0.03] backdrop-blur-[40px] border border-white/20 px-5 py-2.5 rounded-full text-[11px] flex items-center gap-2 text-[#888888] hover:text-white transition-all h-[52px] shadow-xl"
      >
        <span className={lang === 'cn' ? 'text-white font-bold' : ''}>中文</span>{' '}
        <span className="opacity-30">/</span>{' '}
        <span className={lang === 'en' ? 'text-white font-bold' : ''}>EN</span>
      </button>
      <button
        onClick={onToggleTheme}
        aria-label="toggle theme"
        className="bg-white/[0.03] backdrop-blur-[40px] border border-white/20 w-[52px] rounded-full flex items-center justify-center text-[#888888] hover:text-white transition-all h-[52px] shadow-xl"
      >
        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </motion.nav>
  )
}
