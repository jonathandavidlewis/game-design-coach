import { IconKeys } from "@/components/icons"

export type HeroHeader = {
  header: string
  subheader: string
  subtext: string
  image: string
}

export type Outcomes = {
  title: string
  text1: string
  text2: string
  icon?: IconKeys
}

export type BuildSection = {
  header: string
  subheader: string
}

export type OutcomeCards = {
  header: string
  subheader: string
  content: Array<Outcomes>
}

export type SkillBuildingSection = {
  header: string
  subheader: string
  content: Array<SkillBuilding>
}

export type SkillBuilding = {
  text: string
}