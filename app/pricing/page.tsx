import { PricingCards } from "@/components/pricing"
import { Footer as DashboardFooter } from "@/app/dashboard/_components/footer"

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-black flex flex-col">
            <div className="flex-1">
                <PricingCards />
            </div>
            <DashboardFooter />
        </main>
    )
}
