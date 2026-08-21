"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Search } from "lucide-react"
import { InputGroup, InputGroupInput, InputGroupAddon, InputGroupButton } from "@/components/ui/input-group"

export function SearchBox({ initialQuery }: { initialQuery: string }) {
  const router = useRouter()
  const [query, setQuery] = useState(initialQuery)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (query.trim().length === 0) return
    router.push(`/ara?q=${encodeURIComponent(query.trim())}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup className="h-12 rounded-full bg-card px-1.5 shadow-sm">
        <InputGroupAddon>
          <Search className="text-muted-foreground" />
        </InputGroupAddon>
        <InputGroupInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Yardım merkezinde araba yapın"
          aria-label="Makalelerde veya yardım konularında arama yapın"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton type="submit" size="sm" className="rounded-full bg-accent px-4 text-accent-foreground hover:bg-accent/90">
            Arama yapın
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </form>
  )
}
