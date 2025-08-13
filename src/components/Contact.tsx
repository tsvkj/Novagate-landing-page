import { useRef, useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, Building2 } from "lucide-react";
// import { toast } from "react-toastify";
import { toast } from "sonner";
import { useForm, ValidationError } from "@formspree/react";
import { CiCircleCheck } from "react-icons/ci";

type FormData = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

type ContactInfo = {
  icon: React.ElementType;
  title: string;
  details: string;
};

const Contact = () => {
  const [state, handleSubmit] = useForm("mrblayoz");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const hasHandledSubmit = useRef<boolean>(false);

  useEffect(() => {
    if (state.submitting) {
      hasHandledSubmit.current = false;
    }

    if (state.succeeded && !hasHandledSubmit.current) {
      toast.success("Thank you for your message! We'll get back to you soon.", {
        position: "top-right",
        style: {
          background: "#07EB31", // Green background
          color: "white", // Text color
        },
        icon: (
          <div>
            <span>✔️</span>
          </div>
        ), // White check mark
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
      hasHandledSubmit.current = true;
    }

    const errors = Array.isArray(state.errors) ? state.errors : [];

    const errorMessages = errors
      .map((error) => error.message || "Unknown error")
      .join(", ");
  }, [state]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: Building2,
      title: "Company",
      details: "Novagate General Trading FZ LLC",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Ras Al Khaimah, UAE",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@novagate-trading.com",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+971 XX XXX XXXX",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Sun - Thu: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to explore new opportunities? Contact us today to discuss your
            trading and financial needs. Our expert team is here to help you
            succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <Card
                key={info.title}
                className="p-4 hover:shadow-card transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground">{info.details}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-2">
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>

              <CardContent className="p-0">
                <form
                  action="https://formspree.io/f/mrblayoz"
                  method="POST"
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder="Your full name"
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder="your.email@company.com"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="Your company name"
                      />
                      <ValidationError
                        prefix="Company"
                        field="company"
                        errors={state.errors}
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder="Subject of your inquiry"
                      />
                      <ValidationError
                        prefix="Subject"
                        field="subject"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="mt-2 resize-none"
                      placeholder="Tell us about your project, requirements, or any questions you may have..."
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="corporate"
                    size="lg"
                    className="w-full md:w-auto px-8"
                    disabled={state.submitting}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
