import { MessageCircle, Phone, Mail, Ticket } from "lucide-react"
import { describe } from "node:test"

const channels = [
  {
    icon: MessageCircle,
    title: "Canlı Sohbet",
    description: "Hafta içi saat ÖÖ 10.00 ÖS 08.00 arası destek",
    action: "Sohbeti başlat",
  },
  {
    icon: Phone,
    title: "Telefon Desteği",
    description: "TR - 0542 831 04 69 Numaralı destek hattımızdan ücretsiz arayarak destek alın.",
    action: "Numarayı gör",
  },
  {
    icon: Ticket,
    title: "Destek Talebi Aç",
    description: "Detaylı sorunlar için bir destek bileti oluşturun.",
    action: "Talep oluştur",
  },
  {
    icon: Mail,
    title: "E-posta",
    description: "support@banpansoftware.com veya support-ban-pan-lap-seki@banpansoftware.com ulaşın.",
    action: "E-posta gönder",
  },
  {
    icon: Mail,
    title: "E - işlemler"
    description: "Yardım almak için E - işemler sayfanıza gidin."
    action: "E - yönetim panelimi aç "
  }

]

export function ContactCta() {
  return (
    <section id="iletisim" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mb-8 max-w-2xl">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Aradığınızı bulamadınız mı?
        </h2>
        <p className="mt-2 text-muted-foreground text-pretty">
          Destek ekibimiz size yardımcı olmak için burada. Size en uygun iletişim kanalını seçin.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {channels.map((channel) => {
          const Icon = channel.icon
          return (
            <div
              key={channel.title}
              className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Icon className="size-5" strokeWidth={2} />
              </span>
              <div>
                <h3 className="font-heading text-base font-semibold text-card-foreground">{channel.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground text-pretty leading-relaxed">
                  {channel.description}
                </p>
              </div>
              <button
                type="button"
                className="mt-auto text-left text-sm font-semibold text-primary hover:underline"
              >
                {channel.action} →
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
