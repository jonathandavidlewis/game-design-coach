import { HeroHeader, ContentSection } from "@/types/contents"
import { OutcomeCards } from "@/types/contents"

/* ====================
[> CUSTOMIZING CONTENT <]
-- Setup image by typing `/image-name.file` (Example: `/header-image.jpg`)
-- Add images by adding files to /public folder
-- Leave blank `` if you don't want to put texts or images
 ==================== */

export const heroHeader: HeroHeader = {
  header: `Build Your Dream Game`,
  subheader: `Got a game idea swirling in your head? Awesome—but staring at a blank screen and wondering where to even begin can quickly kill your momentum. You’re not alone.`,
  subtext: `That’s why we’re here. We’ve built a platform that helps you bring your vision to life, step by step. Whether you’re a solo developer or part of a team, our tools and resources are designed to help you turn your ideas into reality.`,
  image: `/hero-img.webp`,
}

export const outcomeCards: OutcomeCards = {
  header: `Stop guessing, start building.`,
  subheader: `Our AI-powered coach helps you cut through the noise and identify the single most important step to take next.`,
  content: [
    {
      title: `Passion Project`,
      text1: `Clarify your vision`,
      text2: `Focus on what feels meaningful`,
      icon: "check",
    },
    {
      title: `Income-generating game`,
      text1: `Scope for sustainability`,
      text2: `Prioritize features that support revenue`,
      icon: "check",
    },
  ],
}

export const features: ContentSection = {
  header: `Designed for your goals.`,
  subheader: `Our AI-powered coach helps you cut through the noise and identify the single most important step to take next.`,
  image: `/features-img.webp`,
  content: [
    {
      text: `SEO Optimized`,
      subtext: `Improved website visibility on search engines`,
      icon: "fileSearch",
    },
    {
      text: `Highly Performant`,
      subtext: `Fast loading times and smooth performance`,
      icon: "barChart",
    },
    {
      text: `Easy Customizability`,
      subtext: `Change your content and layout with little effort`,
      icon: "settings",
    },
  ],
}
