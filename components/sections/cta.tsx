export function CTASection() {
  return (
    <section className="w-full px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px]">
          <div className="rounded-3xl bg-zinc-950 px-8 py-16 text-center md:px-16">
            {/* Decorative elements */}
            <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-pink-500/20 blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">Ready to get started?</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-300">
                Join thousands of developers building the future. Start your free trial today — no credit card required.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button className="w-full rounded-xl bg-white px-8 py-4 text-sm font-semibold text-zinc-900 transition-transform hover:scale-105 sm:w-auto">
                  Start Free Trial
                </button>
                <button className="w-full rounded-xl border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto">
                  Talk to Sales
                </button>
              </div>
              <p className="mt-6 text-sm text-zinc-400">Free 14-day trial · No credit card required · Cancel anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
