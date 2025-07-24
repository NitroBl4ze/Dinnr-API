import { motion } from "framer-motion";
import { Heart, Clock, Star, Shield, MapPin, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ForCustomers = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Support Local Chefs",
      description: "Every order helps local home chefs and small businesses in your community thrive."
    },
    {
      icon: Clock,
      title: "Convenient Ordering",
      description: "Order fresh, home-cooked meals with just a few taps, saving you time and effort."
    },
    {
      icon: Star,
      title: "Quality You Can Taste",
      description: "Experience authentic, homemade flavors that restaurants simply can't match."
    },
    {
      icon: Shield,
      title: "Safe & Reliable",
      description: "All our chefs are verified, and we ensure food safety standards are met."
    },
    {
      icon: MapPin,
      title: "Hyper-Local Selection",
      description: "Discover hidden culinary gems right in your neighborhood."
    },
    {
      icon: Smartphone,
      title: "Easy Tracking",
      description: "Track your order in real-time and get updates every step of the way."
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
            Your Next Favorite Meal is Just a{" "}
            <span className="text-gradient">Tap Away</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Discover delicious, home-cooked meals from local chefs in your neighborhood.
            Fresh, authentic, and delivered with love.
          </p>
          <Button size="lg" className="button-gradient">
            Start Ordering Today
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
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
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
          className="card-warm p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Features You'll Love
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Personalized Accounts
              </h3>
              <p className="text-muted-foreground mb-6">
                Save your favorite dishes, reorder with ease, and get personalized recommendations based on your taste preferences.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Real-Time Order Tracking
              </h3>
              <p className="text-muted-foreground mb-6">
                Know exactly when your meal is being prepared and when it will arrive at your doorstep.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Daily Menu Variety
              </h3>
              <p className="text-muted-foreground">
                Explore new cuisines and dishes every day as our chefs update their menus with fresh offerings.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Community Reviews
              </h3>
              <p className="text-muted-foreground">
                Read authentic reviews from your neighbors and share your own experiences to help others discover great food.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default ForCustomers;