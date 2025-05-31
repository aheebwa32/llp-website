import { HelpCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FAQItem } from "./faq-item"

const faqs = [
  {
    question: "How can I become a member of LLP Technology Partners?",
    answer:
      "To become a member, your company should be an innovative technology firm with proven expertise in your field. We evaluate potential members based on technical capabilities, market reputation, financial stability, and alignment with our collaborative values. Contact our partnership team to start the evaluation process.",
  },
  {
    question: "What types of partnerships do you offer?",
    answer:
      "We offer various partnership models including strategic technology partnerships, joint venture opportunities, research collaborations, market expansion partnerships, and innovation lab participations. Each partnership is tailored to meet specific business objectives and technical requirements.",
  },
  {
    question: "Do you provide technical support for member companies?",
    answer:
      "Yes, we provide comprehensive technical support including shared R&D resources, cross-company knowledge sharing, joint technical workshops, and access to our innovation lab facilities. Members also benefit from collaborative problem-solving and technical expertise exchange.",
  },
  {
    question: "What industries do your member companies serve?",
    answer:
      "Our member companies serve diverse industries including healthcare technology, financial services, manufacturing automation, cybersecurity, cloud computing, artificial intelligence, quantum computing, and IoT solutions. We focus on cutting-edge technology applications across multiple sectors.",
  },
  {
    question: "How long does the partnership evaluation process take?",
    answer:
      "The partnership evaluation process typically takes 4-6 weeks and includes initial assessment, technical evaluation, financial review, cultural fit analysis, and final partnership agreement negotiation. We ensure thorough evaluation to maintain our high partnership standards.",
  },
  {
    question: "Do you work with international companies?",
    answer:
      "We welcome partnerships with international companies looking to expand into the Japanese market or collaborate on global technology initiatives. We provide cultural bridging, market entry support, and facilitate international business development.",
  },
  {
    question: "What are the benefits of joining LLP Technology Partners?",
    answer:
      "Benefits include access to collaborative innovation opportunities, shared R&D resources, expanded market reach, networking with industry leaders, joint marketing initiatives, technical knowledge sharing, and participation in exclusive industry events and conferences.",
  },
  {
    question: "How do you ensure intellectual property protection?",
    answer:
      "We have comprehensive IP protection frameworks including strict confidentiality agreements, IP sharing protocols, joint IP development guidelines, and legal frameworks that protect individual company innovations while enabling collaborative development projects.",
  },
]

export function EnhancedFAQSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about LLP Technology Partners and our services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} defaultOpen={index === 0} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-600 to-pink-600">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">Still have questions?</h3>
                <p className="text-purple-100 mb-6">
                  Our team is here to help. Get personalized answers to your specific inquiries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:info@llp-tech-partners.com"
                    className="bg-white text-purple-600 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Email Us Directly
                  </a>
                  <a
                    href="tel:+81362734000"
                    className="bg-purple-700 text-white hover:bg-purple-800 px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Call Our Team
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
