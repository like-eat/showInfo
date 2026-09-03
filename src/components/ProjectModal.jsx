import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

// Right-side slide-in panel showing project cover, title, paragraph, role/year and image strip.
export function ProjectModal({ project, lang, onClose }) {
  const detail = project.detail
  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      className="fixed inset-0 z-[1000] bg-[#010103] overflow-y-auto pt-[40px]"
    >
      <motion.div className="fixed top-[80px] right-12 z-[1100] scale-[0.9] origin-right font-premium">
        <button
          onClick={onClose}
          className="bg-white/[0.03] backdrop-blur-[40px] border border-white/20 px-8 rounded-full h-[52px] group hover:bg-white/10 transition-all flex items-center gap-3"
        >
          <ArrowLeft size={16} className="text-[#888888] group-hover:text-white" />
          <span className="text-[12px] font-bold text-[#888888] group-hover:text-white uppercase tracking-wider">
            {lang === 'cn' ? '返回项目' : 'Back to Projects'}
          </span>
        </button>
      </motion.div>
      <div className="max-w-6xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-24">
          <img
            src={project.cover}
            className="w-full rounded-[24px] border border-white/10 hd-image-fix"
            alt="Detail"
          />
          <div className="space-y-8 max-w-full font-premium">
            <h1 className="text-[36px] font-black uppercase leading-tight">{project.title}</h1>
            <p className="text-sm text-[#888888] leading-relaxed block whitespace-pre-line">
              {lang === 'cn' ? detail?.cn : detail?.en}
            </p>
            <div className="grid grid-cols-2 gap-10 border-t border-white/5 pt-10 uppercase text-[10px] font-bold">
              <div>
                <p className="text-[#555555] mb-1">Role</p>
                <p>{lang === 'cn' ? detail?.role : detail?.roleEn}</p>
              </div>
              <div>
                <p className="text-[#555555] mb-1">Year</p>
                <p>{detail?.year}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-16">
          {(detail?.images || []).map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[26px] p-[1.5px] bg-gradient-to-b from-[#d4af37]/55 via-white/10 to-transparent shadow-[0_10px_50px_rgba(212,175,55,0.14)]"
            >
              <img
                src={src}
                className="w-full h-auto rounded-[24px] block bg-[#010103] hd-image-fix"
                alt="Detail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
