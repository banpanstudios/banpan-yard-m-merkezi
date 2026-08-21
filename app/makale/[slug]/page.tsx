import Link from "next/link"
import { notFound } from "next/navigation"
import { Clock, CalendarClock, ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/help/site-header"
import { SiteFooter } from "@/components/help/site-footer"
import { ArticleFeedback } from "@/components/help/article-feedback"
import { allArticles, getArticle, getCategory } from "@/lib/help-data"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function generateStaticParams() {
  return allArticles.map((a) => ({ slug: a.slug }))
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const category = getCategory(article.categorySlug)
  const related = allArticles
    .filter((a) => a.categorySlug === article.categorySlug && a.slug !== article.slug)
    .slice(0, 4)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink render={<Link href="/" />}>Yardım Merkezi</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink render={<Link href={`/kategori/${article.categorySlug}`} />}>
                  {article.categoryName}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="line-clamp-1">{article.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="mt-5 font-heading text-3xl font-bold tracking-tight text-foreground text-balance">
            {article.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" />
              {article.readTime} okuma
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarClock className="size-4" />
              Güncellendi: {article.updated}
            </span>
          </div>

          <article className="mt-8 flex flex-col gap-6 border-t border-border pt-8">
            {article.content.map((block, i) => (
              <div key={i}>
                {block.heading && (
                  <h2 className="font-heading text-lg font-semibold text-foreground">{block.heading}</h2>
                )}
                {block.body && (
                  <p className="mt-2 leading-relaxed text-foreground/90 text-pretty">{block.body}</p>
                )}
                {block.steps && (
                  <ol className="mt-3 flex flex-col gap-2">
                    {block.steps.map((step, si) => (
                      <li key={si} className="flex gap-3 leading-relaxed text-foreground/90">
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                          {si + 1}
                        </span>
                        <span className="text-pretty">{step}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
          </article>

          {article.faq && article.faq.length > 0 && (
            <div className="mt-10 border-t border-border pt-8">
              <h2 className="font-heading text-lg font-semibold text-foreground">Sık sorulan sorular</h2>
              <Accordion className="mt-3">
                {article.faq.map((item, i) => (
                  <AccordionItem key={i} value={i}>
                    <AccordionTrigger>{item.q}</AccordionTrigger>
                    <AccordionContent>{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}

          <ArticleFeedback />

          {related.length > 0 && (
            <div className="mt-10 border-t border-border pt-8">
              <h2 className="font-heading text-lg font-semibold text-foreground">
                {category?.name} Yardımcı dğer makaleler
              </h2>
              <div className="mt-4 flex flex-col gap-2">
                {related.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/makale/${a.slug}`}
                    className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-ring"
                  >
                    <span className="text-sm font-medium text-card-foreground group-hover:text-primary">
                      {a.title}
                    </span>
                    <ArrowRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
