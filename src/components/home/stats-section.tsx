export function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600 font-medium">Member Companies</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">200+</div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Industry Awards</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-red-600 mb-2">99%</div>
            <div className="text-gray-600 font-medium">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
