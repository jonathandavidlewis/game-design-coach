import HeadingText from "@/components/heading-text"
import { skillBuildingSection } from "@/config/contents"
import type { SkillBuilding } from "@/types/contents"

export default function SkillBuilding() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 space-y-8 py-12 lg:py-20" id="build">
      {skillBuildingSection.header || skillBuildingSection.subheader ? (
        <HeadingText subtext={skillBuildingSection.subheader} className="text-center">
          {skillBuildingSection.header}
        </HeadingText>
      ) : null}
      <div className="flex flex-col gap-4">
        {skillBuildingSection.content.map((content: SkillBuilding) => {
          return (
            <div key={content.text}>{content.text}</div>
          )
        })}
      </div>
    </section>
  )
}
