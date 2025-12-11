import Image from "next/image"
import HeadingText from "@/components/heading-text"
import { outcomeCards } from "@/config/contents"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export default function OutcomeCards() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900">
      <div className="container space-y-8 py-12 text-center lg:py-20">
        {outcomeCards.header ? (
          <HeadingText subtext={outcomeCards.subheader}>
            {outcomeCards.header}
          </HeadingText>
        ) : null}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {outcomeCards.content.map((cards) => {
            const Icon = Icons[cards.icon || "blank"]

            return (
              <Card
                key={cards.title}
                className="flex flex-grow flex-col items-center justify-between gap-4 p-8 dark:bg-secondary"
              >
                <div className="flex">
                  <Icon className="h-[6rem] w-[6rem]" />
                </div>
                <div className="space-y-2">
                  <CardTitle>{cards.title}</CardTitle>
                  <CardDescription>{cards.text1}</CardDescription>
                  <CardDescription>{cards.text2}</CardDescription>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
