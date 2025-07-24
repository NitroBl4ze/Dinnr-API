import { motion } from "framer-motion";
import { ArrowRight, Heart, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import LogoCarousel from "@/components/LogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Index = () => {
  const features = [
    {
      icon: Heart,
      title: "Support Local",
      description: "Connect with home chefs in your neighborhood"
    },
    {
      icon: Clock,
      title: "Daily Menu Variety",
      description: "Fresh new options every day"
    },
    {
      icon: Users,
      title: "Easy Ordering",
      description: "Simple, fast, and reliable food delivery"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-32 pb-20 hero-pattern"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-6 px-4 py-2 rounded-full glass"
        >
          <span className="text-sm font-medium text-foreground">
            🍽️ Your local dinner service app
          </span>
        </motion.div>
        
        <div className="max-w-5xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-left">
            <span className="text-foreground">
              <TextGenerateEffect words="Home-Cooked Dinners," />
            </span>
            <br />
            <span className="text-gradient font-bold">
              <TextGenerateEffect words="Delivered to Your Door" />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl text-left"
          >
            Connect with local chefs and discover delicious, affordable meals in your neighborhood.{" "}
            <span className="text-foreground font-medium">Fresh, authentic, and made with love.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start mb-16"
          >
            <Button size="lg" className="button-gradient">
              Join as a Customer
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Become a Provider <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <div key={index} className="card-warm p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card-warm p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ready to start enjoying home-cooked meals?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of food lovers who have already discovered the joy of local, authentic dining.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="button-gradient">
              Download the App
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
              Learn More
            </Button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
