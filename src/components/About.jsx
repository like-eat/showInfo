import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Sparkles, Send, LoaderCircle } from 'lucide-react'
import { GlassCard } from './GlassCard.jsx'
import { PORTRAIT } from '../data.js'

// Brand icons: CDN (Simple Icons) where an official mark exists; letter badges for
// Adobe AE / OpenAI Codex / Trae, which have no public brand SVG.
const SKILLS = [
  { n: 'Figma', src: 'https://cdn.simpleicons.org/figma' },
  { n: 'After Effects', letters: 'Ae', fg: '#9999FF', bg: '#00005B' },
  { n: 'Codex', letters: '⌘', fg: '#FFFFFF', bg: '#0B0B0B' },
  { n: 'Python', src: 'https://cdn.simpleicons.org/python' },
  { n: 'Trae', letters: 'T', fg: '#FFFFFF', bg: '#E03E2F' },
  { n: 'Coze', src: 'https://cdn.simpleicons.org/coze' },
]

export function About({ data, lang }) {
  const [q, setQ] = useState('')
  const [reply, setReply] = useState('')
  const [loading, setLoading] = useState(false)

  const onAsk = async (e) => {
    e.preventDefault()
    if (!q || loading) return
    setLoading(true)
    setReply('')
    // Stubbed Deepseek response — original site posts to a Deepseek endpoint.
    await new Promise((r) => setTimeout(r, 700))
    setReply(
      lang === 'cn'
        ? '你好，我是 Fiona 的 AI 助手（演示版）。完整对话需要接入 Deepseek API。'
        : "Hi, I'm Fiona's AI assistant (demo). Full chat requires the Deepseek API."
    )
    setLoading(false)
  }

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative pt-[160px] pb-32"
    >
      <h2 className="absolute top-[132px] left-0 text-[#555555] text-[20px] font-bold tracking-[0.02em] uppercase font-premium leading-none">
        {data.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-[80px] items-start w-full max-w-5xl">
        {/* Left column: portrait + contact + AI assistant */}
        <div className="flex flex-col w-full">
          <img
            src={PORTRAIT}
            className="w-full aspect-square rounded-[32px] object-cover hd-image-fix shadow-2xl"
            alt="Portrait"
          />
          <div className="mt-[46px] space-y-1.5 pl-3 border-l border-white/10">
            <p className="text-[12px] text-[#888888] italic">{data.contact.email}</p>
            <p className="text-[12px] text-[#888888] italic">{data.contact.wechat}</p>
          </div>
          <motion.div layout className="mt-[30px] w-full">
            <GlassCard className="p-4 flex flex-col justify-start overflow-hidden h-auto">
              <div className="flex items-center gap-3 mb-2 text-purple-400 font-premium text-[12px]">
                <Sparkles size={14} /> {data.aiAssistant} (Deepseek)
              </div>
              <form onSubmit={onAsk} className="flex gap-2 h-8 items-center">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  className="flex-1 bg-white/5 rounded-full px-4 text-[10px] outline-none text-white h-full"
                  placeholder={data.aiPlaceholder}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
                >
                  {loading ? (
                    <LoaderCircle size={12} className="animate-spin text-[#888888]" />
                  ) : (
                    <Send
                      size={12}
                      className={`${q.length > 0 ? 'text-purple-500' : 'text-white'} transition-colors duration-300`}
                    />
                  )}
                </button>
              </form>
              <AnimatePresence>
                {reply && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-3 border-t border-white/5 mt-3"
                  >
                    <p className="text-[10px] text-[#BBBBBB] leading-relaxed italic whitespace-pre-line">
                      {reply}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </motion.div>
        </div>

        {/* Right column: education / skills / awards */}
        <div className="space-y-12 w-full">
          <div>
            <h3 className="text-[#555555] text-[20px] font-bold mb-6">{data.edu}</h3>
            {data.schools.map((s, i) => (
              <div
                key={i}
                className="flex justify-between border-b border-white/5 pb-2 mb-4"
              >
                <span className="text-white font-bold">{s.name}</span>
                <span className="text-[12px] text-[#888888]">{s.degree}</span>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-[#555555] text-[20px] font-bold mb-6">{data.skills}</h3>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((s, i) => (
                <motion.div whileHover={{ y: -5 }} className="cursor-default" key={i}>
                  <GlassCard className="px-4 py-2 flex items-center gap-2 border-white/5 bg-white/5">
                    {s.src ? (
                      <img src={s.src} alt={s.n} className="w-3.5 h-3.5 object-contain" />
                    ) : (
                      <span
                        className="w-3.5 h-3.5 rounded-[3px] flex items-center justify-center text-[7px] font-black leading-none"
                        style={{ background: s.bg, color: s.fg }}
                      >
                        {s.letters}
                      </span>
                    )}
                    <span className="text-[10px] font-bold uppercase">{s.n}</span>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[#555555] text-[20px] font-bold mb-6">{data.award}</h3>
            {data.awards.map((a, i) => (
              <p
                key={i}
                className="text-[12px] text-[#888888] italic border-l border-white/10 pl-3 mb-3"
              >
                {a}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
