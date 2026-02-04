export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-medium text-foreground">Alexey&apos;s Technical Community</p>
            <p className="mt-1 text-sm text-muted-foreground">
              For practitioners building AI, data, and engineering systems.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Newsletter
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              YouTube
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Courses
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            Questions about membership? Reach out directly. I read every message, though response times vary.
          </p>
        </div>
      </div>
    </footer>
  )
}
