"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <header className="mb-16">
          <p className="mb-8 text-sm font-medium tracking-wide text-muted-foreground">
            Alexey&apos;s Technical Community
          </p>
        </header>

        <div className="space-y-8">
          <h1 className="text-balance text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Filtered signal for practitioners who build AI and data systems
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A paid community for experienced engineers and technical leads. Not a course, not a Slack group, not consulting. 
            A space for shared reasoning, calibrated decision-making, and long-term professional growth.
          </p>

          <Button 
            size="lg" 
            className="mt-4 gap-2 rounded-full bg-foreground px-8 text-background hover:bg-foreground/90"
          >
            Request Access
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-20 grid gap-8 border-t border-border pt-12 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-foreground">
              This is for you if
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                <span>You are already building production AI, ML, or data systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                <span>You make technical decisions that affect teams and products</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                <span>You value judgment and reasoning over tutorials and hype</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                <span>You are familiar with my work, newsletter, or courses</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-foreground">
              This is not for you if
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground/50" />
                <span>You are looking for a beginner-friendly learning path</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground/50" />
                <span>You want quick answers without context or trade-offs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground/50" />
                <span>You expect 1:1 consulting or personalized coaching</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground/50" />
                <span>You prefer passive content consumption over active participation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
