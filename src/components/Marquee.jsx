export default function Marquee() {
  const tech = ["Java", "Spring Boot", "React", "Redux", "AWS", "Docker", "MySQL", "MongoDB", "CI/CD", "Jenkins"]
  return (
    <div className="overflow-hidden border-t border-b border-white/5">
      <div className="animate-[marquee_18s_linear_infinite] whitespace-nowrap py-4">
        {tech.concat(tech).map((t, i) => (
          <span key={i} className="mx-6 text-text-muted">{t} •</span>
        ))}
      </div>
    </div>
  )
}
