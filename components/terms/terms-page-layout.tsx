import { TermsHero } from "./terms-hero"
import { TermsNavigation } from "./terms-navigation"
import { TermsContact } from "./terms-contact"
import { TermsContent, termsData } from "./terms-content"

interface TermsPageLayoutProps {
  showContact?: boolean
  showNavigation?: boolean
}

export const TermsPageLayout = ({ 
  showContact = true, 
  showNavigation = true 
}: TermsPageLayoutProps) => {
  const navigationItems = termsData.map(({ id, title }) => ({ id, title }))

  return (
    <div className="flex flex-col w-full">
      <TermsHero />

      {/* Main Content */}
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className={`grid gap-10 ${showNavigation ? 'lg:grid-cols-[1fr_280px]' : ''}`}>
            {/* Terms Content */}
            <TermsContent />

            {/* Sidebar Navigation */}
            {showNavigation && <TermsNavigation items={navigationItems} />}
          </div>
        </div>
      </section>

      {showContact && <TermsContact />}
    </div>
  )
}

