import Hero from "@/components/pages/hero"
import OutcomeCards from "@/components/pages/outcome-cards"
import Build from "@/components/pages/build"
import SkillBuilding from "@/components/pages/skill-building"

export default function Home() {
  return (
    <main>
      <Hero />
      <Build />
      <OutcomeCards />
      <SkillBuilding />
    </main>
  )
}
