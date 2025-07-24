import { motion } from "framer-motion";
import { Search, ShoppingCart, Truck, UserPlus, ChefHat, Package } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HowItWorks = () => {
  const customerSteps = [
    {
      icon: Search,
      title: "Browse Nearby Menus",
      description: "Discover local home chefs and their daily menus in your neighborhood."
    },
    {
      icon: ShoppingCart,
      title: "Place Your Order",
      description: "Select your favorite meals and place your order with just a few taps."
    },
    {
      icon: Truck,
      title: "Get It Delivered",
      description: "Enjoy fresh, home-cooked meals delivered right to your door."
    }
  ];

  const providerSteps = [
    {
      icon: UserPlus,
      title: "Create Your Profile",
      description: "Set up your account and showcase your culinary specialties."
    },
    {
      icon: ChefHat,
      title: "Post Your Daily Menu",
      description: "Upload today's offerings with photos, descriptions, and prices."
    },
    {
      icon: Package,
      title: "Accept Orders & Deliver",
      description: "Receive orders through the app and deliver delicious meals to customers."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="container px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            How <span className="text-gradient">Dinnr</span> Works
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connecting local chefs with food lovers in just a few simple steps
          </p>
        </motion.div>

        {/* For Customers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            For Customers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customerSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="card-warm p-8 h-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* For Providers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            For Service Providers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {providerSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="card-warm p-8 h-full">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;