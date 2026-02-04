const constraints = [
  {
    title: "Time and attention are limited",
    description: "I can only participate meaningfully with a certain number of people. Growth is intentionally slow. If the community gets too large, quality suffers."
  },
  {
    title: "Quality over scale",
    description: "The goal is not to maximize membership. It's to maintain a space where experienced practitioners can learn from each other without noise."
  },
  {
    title: "Not everyone will be active in the same way",
    description: "Some members participate heavily. Others read quietly. Both are valid. The community works because different people engage differently."
  },
  {
    title: "Expectations should be calibrated",
    description: "This is not a service with SLAs. Response times vary. Some weeks are busier than others. The value compounds over time, not instantly."
  }
]

export function ConstraintsSection() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <header className="mb-12 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Constraints and expectations
          </p>
          <h2 className="text-balance text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            What you should know before joining
          </h2>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {constraints.map((constraint) => (
            <div 
              key={constraint.title} 
              className="border-l-2 border-border pl-6"
            >
              <h3 className="mb-2 font-medium text-foreground">
                {constraint.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {constraint.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
