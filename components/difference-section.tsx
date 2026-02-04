import { X } from "lucide-react"

const comparisons = [
  {
    title: "This is not a course",
    notThis: [
      "Pre-recorded lessons with fixed curriculum",
      "Certificates or completion tracking",
      "Step-by-step tutorials for beginners",
      "One-way knowledge transfer"
    ],
    instead: "Ongoing conversations with practitioners who are actively building. The curriculum is whatever problems we're facing now. Learning happens through participation, not consumption."
  },
  {
    title: "This is not coaching or consulting",
    notThis: [
      "1:1 sessions to solve your specific problems",
      "Personalized career guidance",
      "On-demand access to Alexey",
      "Guaranteed response times"
    ],
    instead: "Shared context with a group of peers. You'll get exposure to how I think through problems, but applied to your specific situation by you. The community helps each other—I participate, but I'm not the only source."
  },
  {
    title: "This is not a Slack group",
    notThis: [
      "Endless channels with low-signal chatter",
      "Quick questions expecting quick answers",
      "Networking for networking's sake",
      "Volume-based engagement metrics"
    ],
    instead: "Structured activities with clear purposes. Conversations are intentional. Silence is acceptable. Quality of interaction matters more than frequency."
  }
]

export function DifferenceSection() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
            What this is not
          </p>
          <h2 className="text-balance text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Clear expectations over vague promises
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Understanding what this isn't helps you decide if it's right for you.
          </p>
        </header>

        <div className="space-y-12">
          {comparisons.map((comparison) => (
            <div 
              key={comparison.title} 
              className="grid gap-8 rounded-lg border border-border bg-card p-8 md:grid-cols-2"
            >
              <div>
                <h3 className="mb-6 text-xl font-medium text-foreground">
                  {comparison.title}
                </h3>
                <ul className="space-y-3">
                  {comparison.notThis.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground/50" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-center border-t border-border pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                <p className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Instead
                </p>
                <p className="leading-relaxed text-foreground">
                  {comparison.instead}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
