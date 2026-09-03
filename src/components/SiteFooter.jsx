import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { GlassCard } from './GlassCard.jsx'

export function SiteFooter({ data }) {
  return (
    <footer className="h-screen flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.8 }}
        transition={{ duration: 1 }}
        className="text-[50px] md:text-[90px] font-black text-white/80 uppercase mb-32 tracking-[0.02em] select-none leading-[1.2] font-premium"
      >
        <p>Thanks for</p>
        <p>watching</p>
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="group"
      >
        <GlassCard className="px-12 py-6 flex items-center gap-6 group-hover:bg-white/10 transition-all border-white/20">
          <span className="text-sm font-bold tracking-[0.2em] text-white uppercase font-premium">
            {data.btn}
          </span>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <ArrowUp className="text-black" size={20} />
          </div>
        </GlassCard>
      </motion.button>
    </footer>
  )
}
