import { Users, ArrowRight, Shield } from "lucide-react"

export function CollaborationBenefits() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Strength in Unity</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our member companies work together to deliver comprehensive solutions that no single company could provide
            alone
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Shared Expertise</h3>
            <p className="text-blue-100">Access to specialized knowledge across multiple domains and industries</p>
          </div>
          <div className="text-center">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Seamless Integration</h3>
            <p className="text-blue-100">Coordinated project delivery with unified communication and management</p>
          </div>
          <div className="text-center">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Quality Assurance</h3>
            <p className="text-blue-100">Peer review and collective accountability ensure the highest standards</p>
          </div>
        </div>
      </div>
    </section>
  )
}
