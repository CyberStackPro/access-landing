import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">About Our Platform</h2>
            <p className="text-gray-300 mb-6">
              We are committed to providing the most reliable and innovative
              monitoring solution in the industry. Our platform is designed to
              empower businesses with real-time insights and proactive
              management capabilities.
            </p>
            <Card className="bg-green-500 text-black inline-block">
              <CardHeader>
                <CardTitle className="text-4xl font-bold">99.99%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl">uptime guaranteed</p>
              </CardContent>
            </Card>
          </div>
          <div className="md:w-1/2">
            <Card className="bg-neutral-800 border-none">
              <CardHeader>
                <CardTitle className="text-green-500">
                  Platform Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Advanced Analytics Integration
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Real-time Data Processing
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Enterprise-grade Security
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
