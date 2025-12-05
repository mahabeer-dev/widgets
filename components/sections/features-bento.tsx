import { Zap, Shield, Globe, Sparkles, BarChart3, Users } from "lucide-react"

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast",
    description: "Built for speed with optimized performance at every level.",
    className: "md:col-span-2",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Enterprise Security",
    description: "Bank-grade encryption and security protocols.",
    className: "md:col-span-1",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global CDN",
    description: "Deployed across 50+ regions worldwide for minimal latency.",
    className: "md:col-span-1",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "AI-Powered",
    description: "Intelligent automation and smart suggestions built-in.",
    className: "md:col-span-1",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Real-time Analytics",
    description: "Monitor everything with live dashboards and insights.",
    className: "md:col-span-1",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Team Collaboration",
    description: "Work together seamlessly with real-time sync and sharing.",
    className: "md:col-span-2",
  },
]

export function FeaturesBentoSection() {
  return (
    <section className="w-full bg-zinc-950 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-400">Features</span>
          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">Everything you need to scale</h2>
          <p className="mt-4 text-lg text-zinc-400">
            Powerful features designed to help your team move faster and ship better products.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-white/20 hover:bg-white/10 ${feature.className}`}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl transition-all group-hover:bg-indigo-500/20" />
              <div className="relative">
                <div className="inline-flex rounded-xl bg-indigo-500/10 p-3 text-indigo-400">{feature.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-zinc-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
