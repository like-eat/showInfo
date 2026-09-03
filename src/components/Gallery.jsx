import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { GlassCard } from './GlassCard.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } },
}

// Single project tile — cover stays full-color; hover lights up the border + glow halo.
function ProjectCard({ project, cover, index, onClick }) {
  const span = index < 3 ? 'md:col-span-2' : 'md:col-span-3'
  const fit = project.coverFit || 'object-cover'
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover="hover"
      onClick={() => onClick({ ...project, index })}
      className={`group relative rounded-[24px] cursor-pointer ${span} overflow-hidden`}
    >
      <GlassCard className="h-full border-white/10 transition-all duration-500 overflow-hidden bg-white/[0.02] group-hover:border-[#87CEFA]/60 group-hover:shadow-[0_0_50px_rgba(135,206,250,0.55)]">
        <div className="aspect-[16/10] overflow-hidden relative bg-white/[0.05]">
          <img
            src={cover}
            className={`w-full h-full ${fit} transition-transform duration-500 group-hover:scale-105 hd-image-fix`}
            alt={project.title}
          />
        </div>
        <div className="p-6 relative z-10 flex items-end justify-between">
          <div className="flex-1">
            <p className="text-[#555555] text-[10px] tracking-[0.02em] uppercase mb-1 font-premium">
              {project.tag}
            </p>
            <motion.h3
              initial={{ opacity: 0.8 }}
              variants={{ hover: { opacity: 1 } }}
              className="text-sm font-bold font-premium text-white leading-tight"
            >
              {project.title}
            </motion.h3>
          </div>
          <motion.div
            variants={{
              hover: {
                width: 52,
                scale: 1.1,
                border: '1px solid rgba(255,255,255,0.22)',
                backgroundColor: 'rgba(255,255,255,0.12)',
              },
              initial: {
                width: 28,
                scale: 1,
                border: '1px solid rgba(255,255,255,0)',
                backgroundColor: 'rgba(255,255,255,0)',
              },
            }}
            initial="initial"
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            style={{ borderRadius: 999 }}
            className="h-7 flex items-center justify-center shrink-0 origin-bottom-right"
          >
            <ArrowRight size={14} className="text-white" />
          </motion.div>
        </div>
      </GlassCard>
    </motion.div>
  )
}

export function Gallery({ data, covers, onOpen }) {
  return (
    <section
      id="gallery"
      className="min-h-screen flex items-center justify-center relative pt-[160px] pb-32"
    >
      <h2 className="absolute top-[132px] left-0 text-[#555555] text-[20px] font-bold tracking-[0.02em] uppercase font-premium leading-none">
        {data.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-12 w-full mt-10 max-w-5xl">
        {data.projects.map((p, i) => (
          <ProjectCard
            key={i}
            index={i}
            project={p}
            cover={covers[i]}
            onClick={(proj) => onOpen({ ...proj, cover: covers[i] })}
          />
        ))}
      </div>
    </section>
  )
}
