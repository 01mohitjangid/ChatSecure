import { Shield, Lock, Zap } from "lucide-react"

export const AboutMission = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        {/* Mission Statement */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe everyone deserves access to powerful AI technology without compromising 
            privacy. ChatSecure makes AI conversations secure, private, and accessible to all.
          </p>
        </div>

        {/* Simple 3-column features */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center space-y-3">
            <div className="mx-auto w-fit rounded-lg bg-purple-100 dark:bg-purple-950 p-3">
              <Shield className="size-6 text-purple-600" />
            </div>
            <h3 className="font-semibold">Secure</h3>
            <p className="text-sm text-muted-foreground">
              Enterprise-grade encryption protects every conversation.
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="mx-auto w-fit rounded-lg bg-purple-100 dark:bg-purple-950 p-3">
              <Lock className="size-6 text-purple-600" />
            </div>
            <h3 className="font-semibold">Private</h3>
            <p className="text-sm text-muted-foreground">
              Your data stays yours. We never sell or share it.
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="mx-auto w-fit rounded-lg bg-purple-100 dark:bg-purple-950 p-3">
              <Zap className="size-6 text-purple-600" />
            </div>
            <h3 className="font-semibold">Fast</h3>
            <p className="text-sm text-muted-foreground">
              Lightning-fast responses powered by cutting-edge AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
