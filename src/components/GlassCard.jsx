// Frosted-glass card primitive used across hero/about/footer (white/5 + backdrop-blur + 1px ring)
export function GlassCard({ children, className = '' }) {
  return (
    <div
      className={`relative bg-white/5 backdrop-blur-[25px] border border-white/10 rounded-[24px] ${className}`}
    >
      {children}
    </div>
  )
}
