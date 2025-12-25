import {
  AboutHero,
  AboutCTA
} from "@/components/about"

export const metadata = {
  title: 'About Us - ChatSecure',
  description: 'Learn about ChatSecure, our mission, and the team behind the secure AI chat platform'
}

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <AboutHero />
      
      <AboutCTA />
    </div>
  )
}
