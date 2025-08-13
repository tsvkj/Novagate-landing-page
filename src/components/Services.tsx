import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Ship,
  Wheat,
  Fuel,
  Car,
  CreditCard,
  Bitcoin,
  Factory,
} from "lucide-react";
import generalTradingImage from "@/assets/general-trading.jpg";
import foodstuffImage from "@/assets/foodstuff-trading.jpg";
import oilGasImage from "@/assets/oil-gas.jpg";
import glassFormingImage from "@/assets/glass-forming.jpg";
import cryptoExchangeImage from "@/assets/crypto-exchange.jpg";
import vehicleTradeImage from "@/assets/vehicle-trade.jpg";
import bankingInstrumentsImage from "@/assets/banking-instruments.jpg";

const Services = () => {
  const services = [
    {
      title: "General Trading",
      description:
        "We handle a wide range of commercial trading activities across multiple industries, offering global reach and smooth logistics from start to finish.",
      icon: Ship,
      image: generalTradingImage,
      features: [
        "Import & Export Services",
        "Worldwide Supply Chain",
        "Reliable Quality Control",
        "Efficient Logistics",
      ],
    },
    {
      title: "Foodstuff Import & Export",
      description:
        "We supply fresh fruits, vegetables, wheat, and fertilizers to international markets with a focus on quality and freshness.",
      icon: Wheat,
      image: foodstuffImage,
      features: [
        "Fresh Fruits & Vegetables",
        "Wheat & Grain Trading",
        "Fertilizer Distribution",
        "Cold Chain Logistics",
      ],
    },
    {
      title: "Oil & Gas Commodities",
      description:
        "We trade in crude oil, refined petroleum products, and energy equipment, backed by deep industry knowledge and market insight.",
      icon: Fuel,
      image: oilGasImage,
      features: [
        "Crude Oil & Petroleum Products",
        "Energy Equipment Supply",
        "Market Trends & Analysis",
        "Reliable Global Sourcing",
      ],
    },
    {
      title: "Glass Forming & Manufacturing",
      description:
        "We specialize in the trade and manufacturing of high-quality float glass, working closely with trusted global partners.",
      icon: Factory,
      image: glassFormingImage,
      features: [
        "Tempered & Float Glass",
        "Beveling & Custom Cuts",
        "Manufacturing Partnerships",
        "Global Trade & Logistics",
      ],
    },
    {
      title: "Vehicle Trade",
      description:
        "We export a wide range of vehicles — from passenger cars to commercial fleets — with all logistics handled smoothly.",
      icon: Car,
      image: vehicleTradeImage,
      features: [
        "Passenger Cars & SUVs",
        "Heavy Equipment",
        "Export Paperwork",
        "Shipping & Delivery",
      ],
    },
    {
      title: "Crypto Exchange Solutions",
      description:
        "We offer secure, compliant platforms for exchanging digital assets using the latest in blockchain technology.",
      icon: Bitcoin,
      image: cryptoExchangeImage,
      features: [
        "Buy & Sell Crypto",
        "Blockchain-Powered Systems",
        "Regulatory Compliance",
        "Secure, Fast Transactions",
      ],
    },
    {
      title: "Banking Instruments",
      description:
        "We provide financial instruments like Letters of Credit and SBLCs to support secure and trustworthy business deals.",
      icon: CreditCard,
      image: bankingInstrumentsImage,
      features: [
        "Letters of Credit (LC)",
        "Standby Letters of Credit (SBLC)",
        "Performance Guarantees",
        "Payment Assurances",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services & Divisions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From trading to financial solutions, we help businesses connect with
            global markets through experience you can rely on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-corporate transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  Learn More
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
