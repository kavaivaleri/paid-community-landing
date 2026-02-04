import { Check, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"

const tiers = [
  {
    name: "Supporter",
    tagline: "Read and watch",
    purpose: "For those who want access to content and reasoning without active community participation.",
    monthlyPrice: 15,
    annualPrice: 150,
    priceNote: "Annual saves two months",
    includes: [
      "All written content and session recordings",
      "Early access to drafts and works in progress",
      "Private annotations on public content",
      "Curated resource library with annotations",
      "Opinionated tool briefs"
    ],
    excludes: [
      "Community discussion access",
      "Live session participation",
      "Q&A submission",
      "Voting on topics"
    ],
    positioning: "You're supporting the work and getting the artifacts. No pressure to participate—just access to thinking."
  },
  {
    name: "Community Member",
    tagline: "Discuss, vote, build together",
    purpose: "For those who want to participate in the community and help shape what happens.",
    monthlyPrice: 35,
    annualPrice: 350,
    priceNote: "Annual saves two months",
    includes: [
      "Everything in Supporter tier",
      "Full community discussion access",
      "Live participation in expert sessions",
      "Submit questions for structured Q&A",
      "Vote on topics and propose ideas",
      "Monthly randomized conversations",
      "Project of the Month and hackathons",
      "Curated job leads"
    ],
    excludes: [
      "Direct feedback from Alexey",
      "CV/LinkedIn/GitHub reviews",
      "Shadowing session participation"
    ],
    positioning: "You're part of the conversation. Your input shapes what we work on. You learn from peers as much as from content.",
    featured: true
  },
  {
    name: "Inner Circle",
    tagline: "Feedback and direct access",
    purpose: "For those who want calibration-focused access and direct feedback on their work.",
    monthlyPrice: 85,
    annualPrice: 850,
    priceNote: "Annual saves two months",
    includes: [
      "Everything in Community Member tier",
      "CV, LinkedIn, and GitHub teardowns",
      "Participate in member shadowing sessions",
      "Priority in topic proposals",
      "Reverse Q&A participation",
      "Knowledge synthesis contribution"
    ],
    excludes: [
      "Guaranteed response times",
      "1:1 consulting or coaching",
      "Unlimited direct access"
    ],
    positioning: "Access is rotational and selective. Feedback is calibration-focused—helping you see your work more clearly, not solving problems for you.",
    note: "Inner Circle membership is limited and occasionally closed to new members to maintain quality of interaction."
  }
]

export function TiersSection() {
  return (
    <section className="bg-card px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Membership tiers
          </p>
          <h2 className="text-balance text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Choose based on how you want to participate
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Each tier serves a different purpose. More expensive doesn't mean better—it means different involvement.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div 
              key={tier.name} 
              className={`flex flex-col rounded-lg border bg-background p-8 ${
                tier.featured 
                  ? "border-foreground" 
                  : "border-border"
              }`}
            >
              <div className="mb-6">
                <h3 className="text-xl font-medium text-foreground">{tier.name}</h3>
                <p className="text-sm text-muted-foreground">{tier.tagline}</p>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {tier.purpose}
              </p>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-medium text-foreground">${tier.monthlyPrice}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  or ${tier.annualPrice}/year <span className="text-xs">({tier.priceNote})</span>
                </p>
              </div>

              <div className="mb-6 flex-grow space-y-6">
                <div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Includes
                  </p>
                  <ul className="space-y-2">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-foreground" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Does not include
                  </p>
                  <ul className="space-y-2">
                    {tier.excludes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Minus className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-6 border-t border-border pt-6">
                <p className="text-sm italic leading-relaxed text-muted-foreground">
                  {tier.positioning}
                </p>
              </div>

              {tier.note && (
                <p className="mb-6 rounded bg-muted p-3 text-xs text-muted-foreground">
                  {tier.note}
                </p>
              )}

              <Button 
                variant={tier.featured ? "default" : "outline"}
                className={`w-full rounded-full ${
                  tier.featured 
                    ? "bg-foreground text-background hover:bg-foreground/90" 
                    : ""
                }`}
              >
                Join as {tier.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
