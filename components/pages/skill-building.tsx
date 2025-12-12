import HeadingText from "@/components/heading-text"
import { buildSection } from "@/config/contents"

export default function SkillBuilding() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 space-y-8 py-12 lg:py-20" id="build">
      {buildSection.header || buildSection.subheader ? (
        <HeadingText subtext={buildSection.subheader} className="text-center">
          {buildSection.header}
        </HeadingText>
      ) : null}
    </section>
  )
}
