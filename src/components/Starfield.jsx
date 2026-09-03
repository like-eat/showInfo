import { useEffect, useRef } from 'react'

// 2D canvas star field — replaces the original three.js 3000-particle scene with a lighter
// equivalent that still drifts/rotates behind the page. Pure DOM, no extra deps.
export function Starfield({ count = 1200, dark = true }) {
  const ref = useRef(null)
  const darkRef = useRef(dark)
  darkRef.current = dark

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    let w = 0
    let h = 0
    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const stars = Array.from({ length: count }, () => ({
      a: Math.random() * Math.PI * 2,
      r: 80 + Math.random() * 360,
      tilt: (Math.random() - 0.5) * 0.6,
      s: 0.4 + Math.random() * 1.2,
      o: 0.3 + Math.random() * 0.7,
    }))

    let rafId
    let t0 = performance.now()
    const draw = (now) => {
      const dt = (now - t0) / 1000
      t0 = now
      const cx = w / 2
      const cy = h / 2
      ctx.clearRect(0, 0, w, h)
      for (const st of stars) {
        st.a += dt * 0.04
        const x = cx + Math.cos(st.a) * st.r
        const y = cy + Math.sin(st.a) * st.r * (0.4 + st.tilt)
        ctx.globalAlpha = st.o
        ctx.fillStyle = darkRef.current ? '#ffffff' : '#9aa3b2'
        ctx.beginPath()
        ctx.arc(x, y, st.s, 0, Math.PI * 2)
        ctx.fill()
      }
      rafId = requestAnimationFrame(draw)
    }
    rafId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [count])

  return <canvas ref={ref} className="fixed inset-0 pointer-events-none z-0" />
}
