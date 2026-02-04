import { HeroSection } from "@/components/hero-section"
import { WhatHappensSection } from "@/components/what-happens-section"
import { DifferenceSection } from "@/components/difference-section"
import { TiersSection } from "@/components/tiers-section"
import { ConstraintsSection } from "@/components/constraints-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <WhatHappensSection />
      <DifferenceSection />
      <TiersSection />
      <ConstraintsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
