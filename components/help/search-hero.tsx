"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Search } from "lucide-react"
import { InputGroup, InputGroupInput, InputGroupAddon, InputGroupButton } from "@/components/ui/input-group"

const shortcuts = ["Şifre sıfırlama", "Fatura iadesi", "Aboneliği iptal et", "Canlı destek", "Destek konuları", "Yardımcı konular"]

export function SearchHero() {
  const router = useRouter()
  const [query, setQuery] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (query.trim().length === 0) return
    router.push(`/ara?q=${encodeURIComponent(query.trim())}`)
  }

  return (
    <div className="relative overflow-hidden bg-primary py-16 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--primary-foreground) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground text-balance sm:text-5xl">
         BANPAN Help Center | BANPAN yardım merkezi
        </h1>
        <p className="mt-4 text-base text-primary-foreground/75 text-pretty sm:text-lg">
          Hesap merkeiziniz, faturalandırma adresleriniz, şifreleme bilgileriniz veya diğer konuları arayın.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl">
          <InputGroup className="h-13 rounded-full border-0 bg-card px-1.5 shadow-lg">
            <InputGroupAddon>
              <Search className="text-muted-foreground" />
            </InputGroupAddon>
            <InputGroupInput
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Size nasıl yardımcı olabiliriz? 'Şifremi unttum'"
              aria-label="Yardım merkezinde ara"
              className="text-base"
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton type="submit" size="sm" className="rounded-full bg-accent px-4 text-accent-foreground hover:bg-accent/90">
                Ara
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </form>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {shortcuts.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => router.push(`/ara?q=${encodeURIComponent(s)}`)}
              className="rounded-full border border-primary-foreground/20 px-3.5 py-1.5 text-xs font-medium text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
