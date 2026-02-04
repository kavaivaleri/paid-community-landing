import { 
  Users, 
  MessageSquare, 
  FileText, 
  Clock, 
  Shuffle, 
  FileSearch, 
  Wrench, 
  BookOpen, 
  Trophy, 
  HelpCircle, 
  Briefcase, 
  Eye, 
  Database, 
  Video,
  RefreshCw
} from "lucide-react"

const activities = [
  {
    icon: Users,
    title: "Biweekly Expert Sessions",
    description: "Structured sessions with practitioners on specific topics. Each session includes written summaries and key takeaways, not just recordings.",
    why: "Real expertise requires time to unpack. Written artifacts let you return to ideas later."
  },
  {
    icon: MessageSquare,
    title: "Structured Q&A with Alexey",
    description: "Submit questions in advance. Responses focus on reasoning, trade-offs, and how to think about the problem—not just the answer.",
    why: "Good questions deserve thoughtful answers. Async format allows depth over speed."
  },
  {
    icon: FileText,
    title: "Topic Proposals & Collaboration",
    description: "Propose topics for newsletter articles or YouTube workshops. Collaborate on research and help shape public content before release.",
    why: "The best content comes from real problems. Your input makes the work more relevant."
  },
  {
    icon: Clock,
    title: "Early Access to Drafts",
    description: "See unfinished work, early drafts, and content before public release. Provide feedback that shapes the final version.",
    why: "Early access means influence, not just preview. Your perspective matters."
  },
  {
    icon: Shuffle,
    title: "Monthly Randomized Conversations",
    description: "Randomized 1-on-1 or small-group conversations with other members. No agenda required—just structured serendipity.",
    why: "The best professional relationships often start unexpectedly."
  },
  {
    icon: FileSearch,
    title: "CV, LinkedIn & GitHub Teardowns",
    description: "Detailed reviews of professional materials as learning artifacts. Not career coaching—learning from real examples.",
    why: "Seeing how others present their work teaches you to see your own differently."
  },
  {
    icon: Wrench,
    title: "Opinionated Tool Briefs",
    description: "Short, opinionated takes on tools and practices. Includes maturity assessment, trade-offs, and when to use (or avoid) each.",
    why: "Most tool comparisons are shallow. These are written for people who will actually use them."
  },
  {
    icon: BookOpen,
    title: "Curated Resource Library",
    description: "Internal library of papers, posts, and talks with annotations explaining why each matters and how to read it.",
    why: "Curation is more valuable than aggregation. Context makes resources useful."
  },
  {
    icon: Trophy,
    title: "Project of the Month & Hackathons",
    description: "Internal hackathons and monthly project showcases. Build together, learn from each other's approaches.",
    why: "Showing your work to peers creates accountability and surfaces new ideas."
  },
  {
    icon: HelpCircle,
    title: "Reverse Q&A",
    description: "Alexey brings real problems from his work to the community. Help solve them and see how decisions get made.",
    why: "Learning happens in both directions. Real problems are better than hypotheticals."
  },
  {
    icon: Briefcase,
    title: "Curated Job Leads",
    description: "Selected job opportunities and recruiter connections. Quality over quantity—only roles worth considering.",
    why: "Generic job boards waste time. Curated leads respect your attention."
  },
  {
    icon: Eye,
    title: "Private Annotations",
    description: "Notes on public content explaining framing choices, what was left out, and why certain examples were used.",
    why: "The thinking behind content is often more valuable than the content itself."
  },
  {
    icon: Database,
    title: "Knowledge Synthesis Documents",
    description: "Community-generated summaries of discussions, debates, and shared learnings. Living documents updated over time.",
    why: "Collective knowledge compounds. These documents capture what we learn together."
  },
  {
    icon: Video,
    title: "Member Shadowing Sessions",
    description: "Watch other members work through real problems. Learn approaches you wouldn't encounter in your own work.",
    why: "Seeing how others think is different from hearing what they conclude."
  },
  {
    icon: RefreshCw,
    title: "Long-Lived Reference Pages",
    description: "Curated reference documents on key topics that are updated over time as understanding evolves. Not static posts—living resources.",
    why: "The best references improve with use. These grow with the community's collective knowledge."
  }
]

export function WhatHappensSection() {
  return (
    <section className="bg-card px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
            What happens inside
          </p>
          <h2 className="text-balance text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Concrete formats, not promises
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every activity exists for a reason. These are the actual things that happen—grouped by type, with explanations of why each matters.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <div 
              key={activity.title} 
              className="group rounded-lg border border-border bg-background p-6 transition-colors hover:border-foreground/20"
            >
              <activity.icon className="mb-4 h-5 w-5 text-foreground" />
              <h3 className="mb-2 font-medium text-foreground">
                {activity.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {activity.description}
              </p>
              <p className="text-sm italic text-muted-foreground/80">
                {activity.why}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
