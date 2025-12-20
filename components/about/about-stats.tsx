
const stats = [
  { number: "1M+", label: "Users Worldwide" },
  { number: "50M+", label: "Conversations Secured" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "150+", label: "Countries Served" }
]

export const AboutStats = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Our Impact in Numbers
          </h2>
          <p className="max-w-[900px] text-purple-100 md:text-xl/relaxed">
            Growing every day, trusted by millions around the world
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="flex flex-col items-center space-y-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white">{stat.number}</div>
              <div className="text-sm text-purple-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
