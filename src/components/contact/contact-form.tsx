"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { FormField } from "./form-field"

const inquiryTypes = [
  { value: "partnership", label: "Partnership Inquiry" },
  { value: "business", label: "Business Collaboration" },
  { value: "media", label: "Media & Press" },
  { value: "careers", label: "Career Opportunities" },
  { value: "support", label: "Technical Support" },
  { value: "general", label: "General Information" },
]

const companySize = [
  { value: "startup", label: "Startup (1-50 employees)" },
  { value: "small", label: "Small Business (51-200 employees)" },
  { value: "medium", label: "Medium Enterprise (201-1000 employees)" },
  { value: "large", label: "Large Enterprise (1000+ employees)" },
  { value: "individual", label: "Individual" },
]

export function EnhancedContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    companySize: "",
    inquiryType: "",
    message: "",
    newsletter: false,
    privacy: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.inquiryType) newErrors.inquiryType = "Please select an inquiry type"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    if (!formData.privacy) newErrors.privacy = "You must agree to the privacy policy"

    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        position: "",
        companySize: "",
        inquiryType: "",
        message: "",
        newsletter: false,
        privacy: false,
      })
    }, 5000)
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-white flex items-center justify-center" id="contact-form">
        <Card className="max-w-md mx-auto border-0 shadow-xl">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
            <p className="text-gray-600 mb-6">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-700">
                <strong>What's next?</strong> Our team will review your inquiry and respond with relevant information
                and next steps.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white" id="contact-form">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="border-0 shadow-xl">
          <CardHeader className="pb-6 bg-gradient-to-r from-purple-50 to-pink-50">
            <CardTitle className="text-2xl font-bold text-center text-gray-900">Send Us a Message</CardTitle>
            <p className="text-gray-600 text-center">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  label="First Name"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(value) => handleInputChange("firstName", value)}
                  required
                  className={errors.firstName ? "text-red-600" : ""}
                />
                <FormField
                  label="Last Name"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(value) => handleInputChange("lastName", value)}
                  required
                  className={errors.lastName ? "text-red-600" : ""}
                />
              </div>

              {/* Contact Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  label="Email Address"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(value) => handleInputChange("email", value)}
                  required
                  className={errors.email ? "text-red-600" : ""}
                />
                <FormField
                  label="Phone Number"
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(value) => handleInputChange("phone", value)}
                  placeholder="+81-3-xxxx-xxxx"
                />
              </div>

              {/* Company Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  label="Company Name"
                  id="company"
                  value={formData.company}
                  onChange={(value) => handleInputChange("company", value)}
                />
                <FormField
                  label="Position/Title"
                  id="position"
                  value={formData.position}
                  onChange={(value) => handleInputChange("position", value)}
                />
              </div>

              {/* Select Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  label="Company Size"
                  id="companySize"
                  type="select"
                  value={formData.companySize}
                  onChange={(value) => handleInputChange("companySize", value)}
                  options={companySize}
                />
                <FormField
                  label="Inquiry Type"
                  id="inquiryType"
                  type="select"
                  value={formData.inquiryType}
                  onChange={(value) => handleInputChange("inquiryType", value)}
                  required
                  options={inquiryTypes}
                  className={errors.inquiryType ? "text-red-600" : ""}
                />
              </div>

              {/* Message Field */}
              <FormField
                label="Message"
                id="message"
                type="textarea"
                value={formData.message}
                onChange={(value) => handleInputChange("message", value)}
                required
                rows={6}
                placeholder="Please provide details about your inquiry, including any specific requirements or questions you may have..."
                className={errors.message ? "text-red-600" : ""}
              />

              {/* Error Display */}
              {Object.keys(errors).length > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-medium text-red-800">Please fix the following errors:</span>
                  </div>
                  <ul className="text-sm text-red-700 space-y-1">
                    {Object.values(errors).map((error, index) => (
                      <li key={index}>• {error}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Checkboxes */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked:any) => handleInputChange("newsletter", checked as boolean)}
                    className="mt-1"
                  />
                  <Label htmlFor="newsletter" className="text-sm leading-relaxed">
                    I would like to receive newsletters and updates about LLP Technology Partners and member companies.
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacy}
                    onCheckedChange={(checked:any) => handleInputChange("privacy", checked as boolean)}
                    required
                    className="mt-1"
                  />
                  <Label htmlFor="privacy" className="text-sm leading-relaxed">
                    I agree to the{" "}
                    <a href="/privacy" className="text-purple-600 hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and consent to the processing of my personal data. *
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting || !formData.privacy}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
