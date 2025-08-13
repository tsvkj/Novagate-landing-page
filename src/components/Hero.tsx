import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Globe, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Global Trade &
            <span className="block text-white/90">Financial Solutions</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Novagate General Trading FZ LLC bridges opportunity and trust in
            international trade and finance, serving clients worldwide.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center space-x-2 text-white/90">
              <Shield className="h-5 w-5" />
              <span className="font-medium">Trusted Partner</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Globe className="h-5 w-5" />
              <span className="font-medium">Global Reach</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <TrendingUp className="h-5 w-5" />
              <span className="font-medium">Premium Service</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-4 group"
              onClick={() => {
                const contactSection = document.getElementById("services");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
