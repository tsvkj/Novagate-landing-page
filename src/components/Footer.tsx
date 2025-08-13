import { Globe2, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "General Trading",
    "Foodstuff Import & Export",
    "Oil & Gas Commodities",
    "Vehicle Trade",
    "Banking Instruments",
    "Crypto Exchange"
  ];

  const legal = [
    "Privacy Policy",
    "Terms of Service", 
    "Cookie Policy",
    "Compliance"
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Globe2 className="h-8 w-8 text-primary" />
              <div className="flex flex-col">
                <span className="text-lg font-bold">Novagate</span>
                <span className="text-xs text-background/70 -mt-1">General Trading FZ LLC</span>
              </div>
            </div>
            
            <p className="text-background/80 mb-6 leading-relaxed">
              Your trusted global trading partner, bridging opportunity and trust in international trade and finance from Ras Al Khaimah, UAE.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-background/80">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">Ras Al Khaimah, UAE</span>
              </div>
              <div className="flex items-center space-x-3 text-background/80">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">info@novagate-trading.com</span>
              </div>
              <div className="flex items-center space-x-3 text-background/80">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+971 XX XXX XXXX</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-background/80 hover:text-primary transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item}>
                  <span className="text-background/80 hover:text-primary transition-colors duration-300 cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/70 text-sm">
              © {currentYear} Novagate General Trading FZ LLC. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-background/70">
              <span>UAE Business License: XXXXXXX</span>
              <span>•</span>
              <span>Regulated by RAKEZ</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;