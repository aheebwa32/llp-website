// import { Card, CardContent } from "@/components/ui/card"
// import { FileText, Users, Code, CheckCircle } from "lucide-react"

// const steps = [
//   {
//     step: 1,
//     icon: FileText,
//     title: "Submit Application",
//     description: "Send us your resume and cover letter through our online portal",
//     duration: "5 minutes",
//     color: "text-blue-600",
//     bgColor: "bg-blue-100",
//   },
//   {
//     step: 2,
//     icon: Users,
//     title: "Initial Screening",
//     description: "HR team reviews your application and conducts a brief phone interview",
//     duration: "1 week",
//     color: "text-purple-600",
//     bgColor: "bg-purple-100",
//   },
//   {
//     step: 3,
//     icon: Code,
//     title: "Technical Assessment",
//     description: "Complete a technical challenge or participate in a technical interview",
//     duration: "3-5 days",
//     color: "text-green-600",
//     bgColor: "bg-green-100",
//   },
//   {
//     step: 4,
//     icon: CheckCircle,
//     title: "Final Interview",
//     description: "Meet with the team and leadership to discuss culture fit and expectations",
//     duration: "1-2 weeks",
//     color: "text-red-600",
//     bgColor: "bg-red-100",
//   },
// ]

// export function ApplicationProcess() {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Hiring Process</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             A transparent and efficient process designed to find the best mutual fit
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {steps.map((step, index) => {
//             const IconComponent = step.icon
//             return (
//               <Card
//                 key={index}
//                 className="relative group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
//               >
//                 <CardContent className="p-8 text-center">
//                   <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                     <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200">
//                       <span className="text-sm font-bold text-gray-700">{step.step}</span>
//                     </div>
//                   </div>

//                   <div
//                     className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4 group-hover:scale-110 transition-transform duration-300`}
//                   >
//                     <IconComponent className={`h-8 w-8 ${step.color}`} />
//                   </div>

//                   <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
//                   <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
//                   <div className={`text-sm font-medium ${step.color}`}>Timeline: {step.duration}</div>
//                 </CardContent>

//                 {/* Connector Line */}
//                 {index < steps.length - 1 && (
//                   <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 transform -translate-y-1/2 z-10">
//                     <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-300 rotate-45"></div>
//                   </div>
//                 )}
//               </Card>
//             )
//           })}
//         </div>

//         <div className="text-center mt-12">
//           <div className="bg-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About the Process?</h3>
//             <p className="text-gray-600 mb-6">
//               Our HR team is here to help guide you through every step of the application process.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a href="mailto:careers@llp-tech-partners.com" className="text-blue-600 hover:text-blue-700 font-medium">
//                 careers@llp-tech-partners.com
//               </a>
//               <span className="hidden sm:block text-gray-400">|</span>
//               <a href="tel:+81-3-1234-5678" className="text-blue-600 hover:text-blue-700 font-medium">
//                 +81-3-1234-5678
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
