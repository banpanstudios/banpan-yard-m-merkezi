import Link from "next/link"
import { notFound } from "next/navigation"
import { FileText, Clock, ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/help/site-header"
import { SiteFooter } from "@/components/help/site-footer"
import { categories, getCategory } from "@/lib/help-data"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { cn } from "@/lib/utils"

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }))
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) notFound()

  const Icon = category.icon
  const otherCategories = categories.filter((c) => c.slug !== category.slug)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink render={<Link href="/" />}>Yardım Merkezi</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{category.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="mt-5 flex items-start gap-4">
              <span
                className={cn(
                  "flex size-12 shrink-0 items-center justify-center rounded-xl",
                  category.color === "primary" && "bg-primary/10 text-primary",
                  category.color === "accent" && "bg-accent/20 text-accent-foreground",
                  category.color === "neutral" && "bg-muted text-foreground",
                )}
              >
                <Icon className="size-6" strokeWidth={2} />
              </span>
              <div>
                <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {category.name}
                </h1>
                <p className="mt-1.5 max-w-2xl text-muted-foreground text-pretty">{category.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_280px]">
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {category.articles.length} makale
            </h2>
            {category.articles.map((article) => (
              <Link
                key={article.slug}
                href={`/makale/${article.slug}`}
                className="group flex items-start justify-between gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-ring"
              >
                <div className="flex items-start gap-3">
                  <FileText className="mt-0.5 size-4 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground group-hover:text-primary">{article.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground text-pretty leading-relaxed">
                      {article.summary}
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="size-3" />
                        {article.readTime} okuma
                      </span>
                      <span aria-hidden>·</span>
                      <span>Güncellendi: {article.updated}</span>
                    </div>
                  </div>
                </div>
                <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          <aside className="flex flex-col gap-4">
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-heading text-sm font-semibold text-card-foreground">Diğer kategoriler</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {otherCategories.slice(0, 8).map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/kategori/${c.slug}`}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-primary p-5 text-primary-foreground">
              <h3 className="font-heading text-sm font-semibold">Yanıt bulamadınız mı?</h3>
              <p className="mt-1.5 text-sm text-primary-foreground/75 text-pretty">
                Destek ekibimiz size yardımcı olmaktan mutluluk duyar.
              </p>
              <Link
                href="/#iletisim"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
              >
                Bize ulaşın
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
