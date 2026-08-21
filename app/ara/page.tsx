import Link from "next/link"
import { FileText, Clock, SearchX } from "lucide-react"
import { SiteHeader } from "@/components/help/site-header"
import { SiteFooter } from "@/components/help/site-footer"
import { SearchBox } from "@/components/help/search-box"
import { allArticles } from "@/lib/help-data"

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q } = await searchParams
  const query = (q ?? "").trim().toLowerCase()

  const results = query
    ? allArticles.filter((a) =>
        [a.title, a.summary, a.categoryName].some((field) => field.toLowerCase().includes(query)),
      )
    : []

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="border-b border-border bg-secondary/40 py-10">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground">Makale arama sonuçlarımız</h1>
            <div className="mt-4">
              <SearchBox initialQuery={q ?? ""} />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          {query && (
            <p className="mb-6 text-sm text-muted-foreground">
              “{q}” için <strong className="text-foreground">{results.length}</strong> sonuç bulundu
            </p>
          )}

          {query && results.length === 0 && (
            <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card py-16 text-center">
              <SearchX className="size-8 text-muted-foreground" />
              <p className="font-medium text-foreground">404 Sonuç bulunamamıştır.</p>
              <p className="max-w-sm text-sm text-muted-foreground text-pretty">
                Apple için sorunlarınızı apple.support.banpansoftware.com üzerinden bakın eğer aradığınızı bulamadıysanız şimdi iletişime geçin.
              </p>
              <Link href="/#iletisim" className="text-sm font-semibold text-primary hover:underline">
                Bize ulaşın →
              </Link>
            </div>
          )}

          <div className="flex flex-col gap-3">
            {results.map((article) => (
              <Link
                key={article.slug}
                href={`/makale/${article.slug}`}
                className="group flex items-start gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-ring"
              >
                <FileText className="mt-0.5 size-4 shrink-0 text-primary" />
                <div className="min-w-0">
                  <p className="font-medium text-card-foreground group-hover:text-primary text-pretty">
                    {article.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground text-pretty leading-relaxed">
                    {article.summary}
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
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
      </main>
      <SiteFooter />
    </div>
  )
}
