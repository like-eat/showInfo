import { useEffect, useRef } from 'react'

// Custom paper-plane cursor with mix-blend-difference (page hides native cursor via cursor-none)
export function Cursor() {
  const ref = useRef(null)
  useEffect(() => {
    const onMove = (e) => {
      if (ref.current) {
        ref.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 w-6 h-6 z-[9999] pointer-events-none mix-blend-difference"
      style={{ transition: 'transform 0.05s ease-out' }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    </div>
  )
}
