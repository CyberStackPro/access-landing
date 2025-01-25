import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, ShoppingCart, Cloud } from "lucide-react";

const useCases = [
  {
    title: "IT Teams",
    icon: Server,
    description: "Monitor network performance and server health.",
  },
  {
    title: "E-commerce Platforms",
    icon: ShoppingCart,
    description: "Ensure smooth operations during peak traffic times.",
  },
  {
    title: "SaaS Businesses",
    icon: Cloud,
    description: "Track user engagement and service availability.",
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Who Benefits?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-black border-none">
              <CardHeader>
                <useCase.icon className="w-12 h-12 text-green-500 mb-4" />
                <CardTitle>{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
