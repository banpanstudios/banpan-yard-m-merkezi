import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { categories } from "@/lib/help-data"
import { cn } from "@/lib/utils"

export function CategoryGrid({ group, title, description }: { group: "main" | "other"; title: string; description?: string }) {
  const items = categories.filter((c) => c.group === group)

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mb-8 max-w-2xl">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{title}</h2>
        {description && <p className="mt-2 text-muted-foreground text-pretty">{description}</p>}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((category) => {
          const Icon = category.icon
          return (
            <Link
              key={category.slug}
              href={`/kategori/${category.slug}`}
              className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-ring hover:shadow-md"
            >
              <span
                className={cn(
                  "flex size-10 items-center justify-center rounded-lg",
                  category.color === "primary" && "bg-primary/10 text-primary",
                  category.color === "accent" && "bg-accent/20 text-accent-foreground",
                  category.color === "neutral" && "bg-muted text-foreground",
                )}
              >
                <Icon className="size-5" strokeWidth={2} />
              </span>
              <div>
                <h3 className="font-heading text-base font-semibold tracking-tight text-card-foreground">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground text-pretty leading-relaxed">
                  {category.description}
                </p>
              </div>
              <span className="mt-auto flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Tüm konuları görüntüle
                <ArrowRight className="size-3.5" />
              </span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
