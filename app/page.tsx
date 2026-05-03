export default function Home() {
  const faqs = [
    {
      q: "How does it connect to Notion?",
      a: "You authenticate via Notion OAuth. We read your selected habit database and never write or modify your data."
    },
    {
      q: "What does the $8/mo subscription include?",
      a: "Full dashboard access, streak calculations, charts, goal progress tracking, and unlimited habit databases."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Cancel anytime from your billing portal with no questions asked and no hidden fees."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Notion Integration
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Beautiful habit tracking<br />
          <span className="text-[#58a6ff]">powered by your Notion</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your Notion habit database and instantly get streak counters, visual charts, and goal progress — without leaving your workflow.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start tracking for $8/mo
        </a>
        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["🔥", "Streak Tracking", "Never lose sight of your momentum"],
            ["📊", "Visual Charts", "See habits at a glance with rich graphs"],
            ["🎯", "Goal Progress", "Set targets and watch yourself hit them"]
          ].map(([icon, title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{icon}</div>
              <div className="text-white font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-[#58a6ff] text-xs font-bold uppercase tracking-widest mb-3">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$8</div>
          <div className="text-[#8b949e] text-sm mb-6">per month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Notion OAuth integration",
              "Unlimited habit databases",
              "Streak & analytics dashboard",
              "Goal progress tracking",
              "Auto-sync with Notion"
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-[#8b949e] text-xs mt-12">
          © {new Date().getFullYear()} Notion Habit Streak Tracker. Not affiliated with Notion Labs.
        </p>
      </section>
    </main>
  );
}
