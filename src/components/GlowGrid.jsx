import { memo } from "react"
export default memo(function GlowGrid() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[70vh] w-[90vw] rounded-full blur-3xl opacity-30"
           style={{ background: "radial-gradient(600px 300px at 50% 30%, rgba(96,165,250,.25), transparent 70%)" }} />
      <svg className="absolute inset-0 h-full w-full opacity-[0.08]" role="img">
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" className="text-white"/>
      </svg>
    </div>
  )
})
