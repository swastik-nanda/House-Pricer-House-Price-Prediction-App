import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Map,
  TrendingUp,
  Calculator,
  Database,
  Home,
  Zap,
  Shield,
  Users,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const Features = () => {
  const features = useMemo(
    () => [
      {
        icon: (
          <BarChart className="text-primary" size={36} aria-hidden="true" />
        ),
        title: "AI-Powered Predictions",
        description:
          "Our advanced machine learning model provides highly accurate property valuations using 20+ key features and market data.",
        details: [
          "Advanced regression algorithms",
          "Real-time market data integration",
          "Historical price trend analysis",
          "Accuracy validation metrics",
        ],
      },
      {
        icon: <Map className="text-primary" size={36} aria-hidden="true" />,
        title: "Location Analysis",
        description:
          "Detailed insights into neighborhood statistics, school ratings, crime rates, and local amenities.",
        details: [
          "School district ratings",
          "Crime rate statistics",
          "Proximity to amenities",
          "Transportation access",
        ],
      },
      {
        icon: (
          <TrendingUp className="text-primary" size={36} aria-hidden="true" />
        ),
        title: "Market Trends",
        description:
          "Stay updated with real-time market trends, price movements, and future projections.",
        details: [
          "Price trend forecasting",
          "Market volatility analysis",
          "Seasonal pricing patterns",
          "Investment opportunity alerts",
        ],
      },
      {
        icon: (
          <Calculator className="text-primary" size={36} aria-hidden="true" />
        ),
        title: "Investment ROI",
        description:
          "Calculate potential return on investment with our comprehensive investment analysis tools.",
        details: [
          "Rental income projection",
          "Maintenance cost estimation",
          "Property appreciation forecast",
          "Tax impact calculation",
        ],
      },
      {
        icon: (
          <Database className="text-primary" size={36} aria-hidden="true" />
        ),
        title: "Historical Data",
        description:
          "Access years of historical property data to make informed decisions about property value trajectories.",
        details: [
          "Price history tracking",
          "Previous sale records",
          "Renovation history",
          "Market cycle analysis",
        ],
      },
      {
        icon: <Home className="text-primary" size={36} aria-hidden="true" />,
        title: "Property Comparison",
        description:
          "Compare multiple properties side-by-side to find the best value for your investment.",
        details: [
          "Side-by-side comparison",
          "Feature-based scoring",
          "Value-for-money analysis",
          "Investment potential ranking",
        ],
      },
      {
        icon: <Zap className="text-primary" size={36} aria-hidden="true" />,
        title: "Instant Results",
        description:
          "Get property valuations in seconds using our high-performance prediction engine.",
        details: [
          "Real-time processing",
          "Instant price updates",
          "Quick comparison tools",
          "Fast report generation",
        ],
      },
      {
        icon: <Shield className="text-primary" size={36} aria-hidden="true" />,
        title: "Data Security",
        description:
          "Your property data is protected with enterprise-grade security and encryption.",
        details: [
          "End-to-end encryption",
          "Secure data storage",
          "Privacy compliance",
          "Regular security audits",
        ],
      },
      {
        icon: <Users className="text-primary" size={36} aria-hidden="true" />,
        title: "Expert Support",
        description:
          "Access our team of real estate experts for guidance and insights on your property decisions.",
        details: [
          "Professional consultation",
          "Market insights",
          "Investment strategy",
          "24/7 support access",
        ],
      },
    ],
    []
  );

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
                Powerful Features for Precise{" "}
                <span className="text-primary">House Price Prediction</span>
              </motion.h1>
              <motion.p
                className="text-lg text-neutral-700 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Discover our comprehensive suite of tools and features designed
                to provide you with the most accurate property valuations and
                market insights.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link to="/signup">
                  <Button size="lg" rightIcon={<ArrowRight size={20} />}>
                    Start Free Trial
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.article
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100 hover:border-primary transition-all hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-neutral-700"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[rgb(12,182,167)] to-[#6246ea] py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Experience These Features?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Join thousands of users who are making data-driven property
                decisions with HomePricer.
              </p>
              <Link to="/signup">
                <Button
                  size="lg"
                  className="bg-white text-white hover:bg-neutral-100"
                  rightIcon={<ArrowRight size={20} />}
                >
                  Get Started Now
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

export default Features;
