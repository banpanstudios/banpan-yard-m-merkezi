import { SiteHeader } from "@/components/help/site-header"
import { SiteFooter } from "@/components/help/site-footer"
import { SearchHero } from "@/components/help/search-hero"
import { CategoryGrid } from "@/components/help/category-grid"
import { PopularArticles } from "@/components/help/popular-articles"
import { ContactCta } from "@/components/help/contact-cta"
import { Separator } from "@/components/ui/separator"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <SearchHero />

        <div id="kategoriler">
          <CategoryGrid
            group="main"
            title="Ana destek konuları"
            description="Genel olarak en çok aranan başlık konuları"
          />
        </div>

        <PopularArticles />

        <Separator />

        <CategoryGrid
          group="other"
          title="Diğer konular"
          description="Yasal, kurumsal, kariyer ve geliştirici kaynakları dahil ek destek başlıkları."
        />

        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  )
}
