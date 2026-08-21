import Link from "next/link"
import { categories } from "@/lib/help-data"

export function SiteFooter() {
  const main = categories.filter((c) => c.group === "main")
  const other = categories.filter((c) => c.group === "other")

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground">Ana Konular</h3>
            <ul className="mt-3 flex flex-col gap-2">
              {main.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link href={`/kategori/${c.slug}`} className="text-sm text-muted-foreground hover:text-foreground">
                    {c.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground">Diğer Konular</h3>
            <ul className="mt-3 flex flex-col gap-2">
              {other.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link href={`/kategori/${c.slug}`} className="text-sm text-muted-foreground hover:text-foreground">
                    {c.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground">Diğer kaynaklar</h3>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <Link href="/kategori/gelistirici" className="text-sm text-muted-foreground hover:text-foreground">
                  Geliştirici ekibi konuları
                </Link>
              </li>
              <li>
                <Link href="/kategori/topluluk" className="text-sm text-muted-foreground hover:text-foreground">
                  Topluluk Forumu
                </Link>
              </li>
              <li>
                <Link href="/kategori/kariyer" className="text-sm text-muted-foreground hover:text-foreground">
                  Kariyer
                </Link>
              </li>
              <li>
                <Link href="/kategori/erisilebilirlik" className="text-sm text-muted-foreground hover:text-foreground">
                  Erişilebilirlik
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground">Yasal</h3>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <Link href="/kategori/gizlilik-politikasi" className="text-sm text-muted-foreground hover:text-foreground">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/kategori/yasal" className="text-sm text-muted-foreground hover:text-foreground">
                  Kullanım Şartları
                </Link>
              </li>
              <li>
                <Link href="/kategori/iade-garanti" className="text-sm text-muted-foreground hover:text-foreground">
                  İade &amp; Garanti
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            ©2014 - 2026 BANPAN Corporation. Tüm hakları saklıdır. BANPAN Ticari marka ilkeleri kapsamında tüm sorumluluk reddi kullanıcıya aiitir.
          </p>
          <p className="text-sm text-muted-foreground">Türkiye · Türkçe</p>
          <p className="text-sm text-muted-foreground">Amerika Birleşik Devletleri · İnglizce</p>
          <p className="text-sm text-muted-foreground">Dil yok  · Dil yok</p>
          <p className="text-sm text-muted-foreground">Dil yok · Dil yok</p>
        </div>
      </div>
    </footer>
  )
}
