import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    content:
      "The real-time monitoring capabilities have transformed how we manage our infrastructure. The instant alerts and detailed analytics have helped us reduce downtime by 75%.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer at CloudScale",
    content:
      "The customizable dashboards are incredible. We've been able to create perfect monitoring solutions for each of our teams. The scalability is impressive!",
    image: "/placeholder.svg?height=100&width=100",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Users Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-neutral-800 border-none">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-sm">
                      {testimonial.name}
                    </CardTitle>
                    <p className="text-xs text-green-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
