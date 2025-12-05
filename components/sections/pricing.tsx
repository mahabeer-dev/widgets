import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for side projects and learning.",
    features: ["5 projects", "Basic analytics", "Community support", "1 team member"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "Best for growing teams and businesses.",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "10 team members",
      "Custom domains",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom needs.",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "SSO & SAML",
      "Dedicated support",
      "SLA guarantee",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="w-full bg-zinc-950 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">Pricing</span>
          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-lg text-zinc-400">
            Start for free, upgrade when you need. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.popular ? "border-indigo-500 bg-indigo-500/10" : "border-white/10 bg-white/5"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-500 px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <div>
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="ml-2 text-zinc-400">/month</span>}
                </div>
                <p className="mt-2 text-sm text-zinc-400">{plan.description}</p>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-zinc-300">
                    <Check className="h-5 w-5 text-emerald-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full rounded-xl py-3 text-sm font-semibold transition-colors ${
                  plan.popular
                    ? "bg-indigo-500 text-white hover:bg-indigo-600"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
