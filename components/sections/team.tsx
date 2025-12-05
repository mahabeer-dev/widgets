import { Twitter, Linkedin, Github } from "lucide-react"

const team = [
  {
    name: "Alex Morgan",
    role: "CEO & Founder",
    avatar: "/ceo-man-professional.jpg",
    bio: "Former Google engineer with 15+ years in tech.",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    name: "Jordan Lee",
    role: "CTO",
    avatar: "/cto-woman-professional.jpg",
    bio: "Built systems handling billions of requests daily.",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  {
    name: "Sam Taylor",
    role: "Head of Design",
    avatar: "/designer-man-creative.jpg",
    bio: "Award-winning designer from Apple and Airbnb.",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Casey Rivera",
    role: "Head of Engineering",
    avatar: "/engineer-woman-tech.jpg",
    bio: "Open source contributor and Rust enthusiast.",
    social: { twitter: "#", github: "#" },
  },
]

export function TeamSection() {
  return (
    <section className="w-full bg-zinc-950 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">Our Team</span>
          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">Meet the people behind the product</h2>
          <p className="mt-4 text-lg text-zinc-400">
            A diverse team of talented individuals passionate about building great software.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-all hover:border-white/20 hover:bg-white/10"
            >
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full">
                <img
                  src={member.avatar || "/placeholder.svg"}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">{member.name}</h3>
              <span className="inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400">
                {member.role}
              </span>
              <p className="mt-3 text-sm text-zinc-400">{member.bio}</p>
              <div className="mt-4 flex justify-center gap-3">
                {member.social.twitter && (
                  <a href={member.social.twitter} className="text-zinc-400 transition-colors hover:text-white">
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
                {member.social.linkedin && (
                  <a href={member.social.linkedin} className="text-zinc-400 transition-colors hover:text-white">
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {member.social.github && (
                  <a href={member.social.github} className="text-zinc-400 transition-colors hover:text-white">
                    <Github className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
