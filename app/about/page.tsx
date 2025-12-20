import {
  AboutHero,
  AboutMission,
  AboutValues,
  AboutTeam,
  AboutStats,
  AboutTimeline,
  AboutCTA
} from "@/components/about"

export const metadata = {
  title: 'About Us - ChatSecure',
  description: 'Learn about ChatSecure, our mission, values, and the team behind the secure AI chat platform'
}

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutStats />
      <AboutTeam />
      <AboutTimeline />
      <AboutCTA />
    </div>
  )
}
