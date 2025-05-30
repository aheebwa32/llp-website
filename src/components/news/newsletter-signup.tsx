import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Bell, Mail, Newspaper } from "lucide-react"

export function NewsletterSignup() {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-white">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Newspaper className="h-10 w-10 text-blue-600" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4">Never Miss an Update</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our news alerts and be the first to know about breakthrough innovations, 
              strategic partnerships, and major achievements from our member companies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1"
              />
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Bell className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Weekly digest
              </div>
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4" />
                Breaking news alerts
              </div>
            </div>
            
            <p className="text-sm text-gray-500">
              Join 15,000+ technology professionals. Unsubscribe anytime.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}