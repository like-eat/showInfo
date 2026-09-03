import { motion } from 'framer-motion'

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

// Big glowing year — pulses gently, scales on hover.
function YearBadge({ year }) {
  return (
    <motion.div
      className="font-premium text-[52px] font-black tracking-tighter cursor-default relative"
      animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.01, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.1, opacity: 1 }}
      style={{ color: '#E0F2FE', textShadow: '0 0 20px rgba(14, 165, 233, 0.4)' }}
    >
      {year}
    </motion.div>
  )
}

export function Experience({ data }) {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center relative pt-[160px] pb-32"
    >
      <h2 className="absolute top-[132px] left-0 text-[#555555] text-[20px] font-bold tracking-[0.02em] uppercase font-premium leading-none">
        {data.title}
      </h2>
      <div className="relative mt-20 w-full max-w-5xl">
        {/* Center dashed timeline (md+) */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          transition={{ duration: 1.2 }}
          className="absolute left-1/2 top-0 w-[1px] bg-white/5 border-l border-dashed hidden md:block"
        />
        <div className="space-y-32">
          {data.list.map((e, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className={`relative flex flex-col md:flex-row items-center gap-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
                  visible: { opacity: 1, x: 0 },
                }}
                className={`flex-1 flex flex-col ${
                  i % 2 === 0 ? 'md:items-end md:text-right' : 'md:text-left md:items-start'
                } font-premium`}
              >
                <h4 className="text-2xl font-bold text-white mb-1">{e.c}</h4>
                <p className="text-blue-400 text-[10px] font-bold uppercase mb-3">{e.r}</p>
                <p
                  className={`text-[#888888] text-[12px] leading-relaxed max-w-md ${
                    i % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  {e.desc}
                </p>
              </motion.div>
              <motion.div
                variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
                className="z-10 bg-[#010103] p-2"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-white ring-8 ring-white/5" />
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: i % 2 === 0 ? 40 : -40 },
                  visible: { opacity: 1, x: 0 },
                }}
                className={`flex-1 ${i % 2 === 0 ? 'text-left' : 'md:text-right'}`}
              >
                <YearBadge year={e.d} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
