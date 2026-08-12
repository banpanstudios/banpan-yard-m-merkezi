import Link from "next/link"
import { LifeBuoy } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-md bg-primary-foreground/10">
            <LifeBuoy className="size-5 text-accent" strokeWidth={2.2} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-base font-bold tracking-tight">BANPAN</span>
            <span className="text-[11px] font-medium tracking-wide text-primary-foreground/70">
              Yardım Merkezi
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-primary-foreground/80 md:flex">
          <Link href="/#kategoriler" className="transition-colors hover:text-primary-foreground">
            Kategoriler
          </Link>
          <Link href="/#populer" className="transition-colors hover:text-primary-foreground">
            Popüler Konular
          </Link>
          <Link href="/#iletisim" className="transition-colors hover:text-primary-foreground">
            Bize Ulaşın
          </Link>
        </nav>

        <Link
          href="/#iletisim"
          className="rounded-md bg-accent px-3.5 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          Destek Al
        </Link>
      </div>
    </header>
  )
}
