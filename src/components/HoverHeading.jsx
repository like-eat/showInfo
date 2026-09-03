import { motion } from 'framer-motion'

// Per-character hover-lift heading; mirrors original `ib`/`rb` pair.
// Colors are driven by CSS variables so the light/dark theme toggle can flip them
// (framer-motion only owns the vertical lift, not the color).
function HoverChar({ char }) {
  return (
    <motion.span
      className="hover-char inline-block cursor-default"
      whileHover={{ y: -25 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18, mass: 1.2 }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  )
}

export function HoverHeading({
  text,
  className = '',
  sizeClass = 'text-[60px] md:text-[115px]',
  variant = 'muted',
}) {
  return (
    <h1
      data-variant={variant}
      className={`hover-heading ${sizeClass} font-black leading-[0.95] tracking-[0.06em] font-premium whitespace-nowrap ${className}`}
    >
      {Array.from(text).map((c, i) => (
        <HoverChar char={c} key={i} />
      ))}
    </h1>
  )
}
