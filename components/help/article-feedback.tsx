"use client"

import { useState } from "react"
import { ThumbsUp, ThumbsDown, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ArticleFeedback() {
  const [choice, setChoice] = useState<"yes" | "no" | null>(null)

  return (
    <div className="mt-10 flex flex-col items-center gap-3 rounded-xl border border-border bg-secondary/40 p-6 text-center">
      {choice ? (
        <p className="flex items-center gap-2 text-sm font-medium text-foreground">
          <Check className="size-4 text-primary" />
          Geri bildiriminiz için teşekkürler.
        </p>
      ) : (
        <>
          <p className="text-sm font-medium text-foreground">Bu makale yardımcı oldu mu?</p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setChoice("yes")}
              className={cn("gap-1.5")}
            >
              <ThumbsUp data-icon="inline-start" />
              Evet
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setChoice("no")}
              className={cn("gap-1.5")}
            >
              <ThumbsDown data-icon="inline-start" />
              Hayır
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
