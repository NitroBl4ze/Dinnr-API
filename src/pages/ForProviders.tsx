import { motion } from "framer-motion";
import { DollarSign, Users, Calendar, BarChart3, Clock, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ForProviders = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Grow Your Income",
      description: "Turn your cooking passion into a profitable business with flexible earnings."
    },
    {
      icon: Users,
      title: "Reach New Customers",
      description: "Connect with food lovers in your neighborhood who are hungry for authentic meals."
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Cook when you want, how you want. Set your own schedule and menu."
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      description: "Track your sales, popular dishes, and customer feedback to grow your business."
    },
    {
      icon: Clock,
      title: "Easy Management",
      description: "Simple tools to manage orders, update menus, and communicate with customers."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Platform",
      description: "Manage everything from your phone - perfect for busy home chefs."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Manage Your Kitchen,{" "}
            <span className="text-gradient">Grow Your Business</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Transform your cooking skills into a thriving business. Connect with customers,
            manage orders, and grow your culinary venture with Dinnr.
          </p>
          <Button size="lg" className="button-gradient">
            Start Cooking Today
          </Button>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="container px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="card-warm p-6"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="card-warm p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            Everything You Need to Succeed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Simple Menu Management
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Create and update your daily menu with photos and descriptions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Set prices, portions, and availability for each dish
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Schedule menus in advance for better planning
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Order Management Made Easy
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Receive orders instantly on your phone
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Accept or decline orders based on your capacity
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Communicate directly with customers about their orders
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="card-warm p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Ready to Start Your Culinary Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of home chefs who are already earning money doing what they love.
            Start your journey with Dinnr today.
          </p>
          <Button size="lg" className="button-gradient">
            Become a Provider
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default ForProviders;