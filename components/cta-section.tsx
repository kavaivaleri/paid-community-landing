import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="bg-foreground px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-medium tracking-tight text-background md:text-4xl">
          Ready to join?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-background/70">
          If this resonates with how you want to learn and grow professionally, choose the tier that fits how you want to participate. 
          If you're unsure, start with Supporter—you can always upgrade later.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button 
            size="lg"
            className="gap-2 rounded-full bg-background px-8 text-foreground hover:bg-background/90"
          >
            View Membership Options
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <p className="mt-8 text-sm text-background/50">
          Not ready yet? Follow my newsletter or YouTube channel. 
          The public work will help you decide if this is right for you.
        </p>
      </div>
    </section>
  )
}
