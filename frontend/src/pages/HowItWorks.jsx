import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Database,
  Clock,
  CheckCircle,
  ArrowRight,
  Home,
  BarChart,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="text-primary" size={36} />,
      title: "Enter Property Details",
      description:
        "Input key property features like lot size, quality ratings, year built, and more for accurate predictions.",
      details: [
        "Lot frontage and area",
        "Overall quality and condition",
        "Year built and remodeled",
        "Basement specifications",
      ],
    },
    {
      icon: <Database className="text-primary" size={36} />,
      title: "AI Analysis",
      description:
        "Our machine learning model processes 20+ features using advanced algorithms trained on extensive real estate data.",
      details: [
        "Feature processing",
        "Market data integration",
        "Historical comparison",
        "Price trend analysis",
      ],
    },
    {
      icon: <Clock className="text-primary" size={36} />,
      title: "Instant Results",
      description:
        "Get your property valuation in seconds with our high-performance prediction engine.",
      details: [
        "Real-time processing",
        "Accurate predictions",
        "Confidence scores",
        "Market comparisons",
      ],
    },
    {
      icon: <CheckCircle className="text-primary" size={36} />,
      title: "Detailed Report",
      description:
        "Review comprehensive valuation insights, market comparisons, and investment potential.",
      details: [
        "Detailed breakdown",
        "Price justification",
        "Market analysis",
        "Investment recommendations",
      ],
    },
  ];

  const features = [
    {
      icon: <Home className="text-white" size={24} />,
      title: "20+ Property Features",
      description:
        "Our model analyzes over 20 different property characteristics for accurate predictions.",
    },
    {
      icon: <BarChart className="text-white" size={24} />,
      title: "Advanced Analytics",
      description:
        "Sophisticated algorithms process complex real estate market data.",
    },
    {
      icon: <Award className="text-white" size={24} />,
      title: "95% Accuracy",
      description:
        "Our predictions have shown to be highly accurate in real-world testing.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#E6F7F6 ] to-[#EEEAFD] py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                How <span className="text-primary">HomePricer</span> Works
              </motion.h1>
              <motion.p
                className="text-lg text-neutral-700 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Discover how our AI-powered platform delivers accurate house
                price predictions in just a few simple steps.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-[rgb(12,182,167)] to-[#6246ea] rounded-xl p-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="opacity-90">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col md:flex-row items-center gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="md:w-1/3 text-center md:text-left">
                    <div className="inline-block bg-primary-50 p-4 rounded-xl mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600">{step.description}</p>
                  </div>
                  <div className="md:w-2/3 bg-neutral-50 rounded-xl p-6">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          <span className="text-neutral-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-20 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                  See It in Action
                </h2>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-6">
                  <img
                    src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="House prediction demo"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-center">
                  <Link to="/signup">
                    <Button size="lg" rightIcon={<ArrowRight size={20} />}>
                      Try It Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[rgb(12,182,167)] to-[#6246ea] py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Join thousands of users who are already using HomePricer to make
                data-driven property decisions.
              </p>
              <Link to="/signup">
                <Button
                  size="lg"
                  className="bg-white text-white hover:bg-neutral-100"
                  rightIcon={<ArrowRight size={20} />}
                >
                  Start Free Trial
                </Button>
              </Link>
              <p className="mt-4 text-sm opacity-75">
                No credit card required. 14-day free trial.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
