import { CareersHero } from "@/components/careers/hero"
import { WhyWorkWithUs } from "@/components/careers/why-work-with-us"
import { OpenPositions } from "@/components/careers/open-positions"
import { Benefits } from "@/components/careers/benefits"
// import { ApplicationProcess } from "@/components/careers/application-process"
import { EmployeeTestimonials } from "@/components/careers/employee-testimonials"
import { CareersCTA } from "@/components/careers/cta"

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CareersHero />
      <WhyWorkWithUs />
      <OpenPositions />
      <Benefits />
      {/* <ApplicationProcess /> */}
      <EmployeeTestimonials />
      <CareersCTA />
    </div>
  )
}
