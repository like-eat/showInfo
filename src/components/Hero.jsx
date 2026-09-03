import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { HoverHeading } from './HoverHeading.jsx'
import { GlassCard } from './GlassCard.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } },
}

export function Hero({ data }) {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative"
    >
      <div className="flex flex-col md:flex-row items-start justify-between w-full">
        <div className="flex-1">
          <HoverHeading text={data.line1} />
          <HoverHeading text={data.line2} variant="solid" />
          <HoverHeading
            text={data.line3}
            sizeClass="text-[60px] md:text-[96px]"
            className="mt-8 opacity-60"
          />
        </div>
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="pt-32 self-end">
          <button
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-6"
          >
            <div className="text-right">
              <p className="text-[#888888] text-[11px] uppercase mb-1">{data.scroll}</p>
              <p className="text-white text-sm font-bold font-premium uppercase tracking-widest">
                NEXT SPACE
              </p>
            </div>
            <GlassCard className="w-14 h-14 flex items-center justify-center group-hover:bg-white/10 transition-colors border-white/20">
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                <ArrowDown size={20} />
              </motion.div>
            </GlassCard>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
