import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Award, MapPin, Building2, Globe2 } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Globe2, label: "Global Reach", value: "50+ Countries" },
    { icon: Building2, label: "Industries Served", value: "7+ Sectors" },
    { icon: Users, label: "Trusted Partners", value: "500+ Clients" },
    { icon: Award, label: "Years Experience", value: "10+ Years" },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "We’re here to create trusted opportunities in global trade and finance — offering end-to-end solutions that connect markets with confidence and consistency.",
    },
    {
      icon: Award,
      title: "Our Vision",
      description:
        "To become a global leader in trade and financial services, known for our integrity, forward-thinking approach, and unwavering focus on helping our clients succeed.",
    },
    {
      icon: Users,
      title: "Our Values",
      description:
        "We believe in trust, transparency, and delivering real results. Our work is built on lasting relationships, industry knowledge, and a commitment to doing things right.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            About Novagate
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your Trusted Global Trading Partner
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Headquartered in Ras Al Khaimah, UAE, Novagate General Trading FZ
            LLC offers a wide range of services — from import/export and
            financial instruments to digital asset solutions — serving clients
            around the world.
          </p>
        </div>

        {/* Location & Overview */}
        <div className="mb-16">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-0">
              <div className="flex items-center mb-6">
                <MapPin className="h-6 w-6 text-primary mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Headquartered in Ras Al Khaimah, UAE
                  </h3>
                  <p className="text-muted-foreground">
                    Serving international trade and finance clients globally
                  </p>
                </div>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                Novagate General Trading FZ LLC is a Ras Al Khaimah-based global
                trading and financial facilitation company. We specialize in
                diverse industries, offering import/export solutions, banking
                instruments, and digital asset services to clients worldwide.
                Our strategic location in the UAE provides us with unique
                advantages in connecting Eastern and Western markets.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="text-center p-6 hover:shadow-card transition-shadow"
            >
              <CardContent className="p-0">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <Card
              key={value.title}
              className="p-6 hover:shadow-corporate transition-all duration-300 group"
            >
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {value.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
