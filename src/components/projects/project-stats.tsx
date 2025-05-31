// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { BarChart3, Clock, DollarSign, Users2 } from "lucide-react"

// export function ProjectsStats() {
//   const stats = [
//     {
//       icon: BarChart3,
//       title: "Average ROI",
//       value: "340%",
//       description: "Return on investment for our clients",
//       color: "blue"
//     },
//     {
//       icon: Clock,
//       title: "Delivery Time",
//       value: "15%",
//       description: "Faster than industry average",
//       color: "green"
//     },
//     {
//       icon: DollarSign,
//       title: "Cost Savings",
//       value: "$2.5M",
//       description: "Average annual savings per client",
//       color: "purple"
//     },
//     {
//       icon: Users2,
//       title: "Team Efficiency",
//       value: "85%",
//       description: "Improvement in team productivity",
//       color: "pink"
//     }
//   ]

//   const colorClasses = {
//     blue: "bg-blue-100 text-blue-600",
//     green: "bg-green-100 text-green-600",
//     purple: "bg-purple-100 text-purple-600",
//     pink: "bg-pink-100 text-pink-600"
//   }

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800">
//               <BarChart3 className="w-4 h-4 mr-2" />
//               Impact & Results
//             </Badge>
//             <h2 className="text-3xl font-bold mb-4">Measurable Success</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Our projects deliver quantifiable results that drive business growth and operational excellence.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {stats.map((stat, index) => {
//               const IconComponent = stat.icon
//               return (
//                 <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
//                   <CardContent className="p-6 text-center">
//                     <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ${colorClasses[stat.color as keyof typeof colorClasses]}`}>
//                       <IconComponent className="w-8 h-8" />
//                     </div>
//                     <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
//                     <div className="text-lg font-semibold text-gray-700 mb-2">{stat.title}</div>
//                     <div className="text-sm text-gray-600">{stat.description}</div>
//                   </CardContent>
//                 </Card>
//               )
//             })}
//           </div>

//           <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
//             <h3 className="text-2xl font-bold mb-4">Ready to See Similar Results?</h3>
//             <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
//               Join our growing list of successful clients who have transformed their businesses 
//               through innovative technology solutions.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <Badge variant="outline" className="px-4 py-2">AI & Machine Learning</Badge>
//               <Badge variant="outline" className="px-4 py-2">Digital Transformation</Badge>
//               <Badge variant="outline" className="px-4 py-2">Cloud Solutions</Badge>
//               <Badge variant="outline" className="px-4 py-2">Enterprise Development</Badge>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }