import Link from "next/link"
import { FileText, Clock } from "lucide-react"
import { allArticles, popularArticleSlugs } from "@/lib/help-data"

export function PopularArticles() {
  const articles = popularArticleSlugs
    .map((slug) => allArticles.find((a) => a.slug === slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a))

  return (
    <section id="populer" className="bg-secondary/50 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 max-w-2xl">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Popüler konular
          </h2>
          <p className="mt-2 text-muted-foreground text-pretty">
            Kullanıcılarımızın en çok başvurduğu yardım makaleleri.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/makale/${article.slug}`}
              className="group flex items-start gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-ring"
            >
              <FileText className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2} />
              <div className="min-w-0">
                <p className="font-medium text-card-foreground text-pretty group-hover:text-primary">
                  {article.title}
                </p>
                <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{article.categoryName}</span>
                  <span aria-hidden>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="size-3" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
