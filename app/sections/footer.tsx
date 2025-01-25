import Link from "next/link";
import { Activity, Mail, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Activity className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">ActiveMonitor</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Empowering businesses with real-time monitoring solutions for
              better performance and reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Navigation</h4>
            <ul className="space-y-3">
              {["Home", "Features", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Get in Touch</h4>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Stay updated with our latest features and releases.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2025 ActiveMonitor. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Crafted with care for better monitoring
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
