import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart,
  Home,
  TrendingUp,
  Calculator,
  Map,
  Database,
  Search,
  Clock,
  CheckCircle,
  Award,
  Zap,
  Shield,
  Users,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const LandingPage = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div
              className="lg:w-1/2 mb-10 lg:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Predict House Prices with{" "}
                <span className="text-primary">AI</span> Precision
              </h1>
              <p className="text-lg md:text-xl text-neutral-700 mb-8">
                Get accurate property valuations powered by advanced machine
                learning algorithms. Make confident real estate decisions with
                HomePricer.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/home">
                  <Button size="lg" rightIcon={<ArrowRight size={20} />}>
                    Get Started
                  </Button>
                </Link>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="btn btn-outline text-lg px-6 py-3"
                >
                  Learn More
                </button>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 lg:pl-10"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-card p-6 md:p-8 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary-100 rounded-full -mr-20 -mt-20 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-secondary-100 rounded-full -ml-20 -mb-20 opacity-50"></div>

                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-6">
                    <img
                      src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Modern house"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>

                  <div className="bg-white shadow-lg rounded-lg p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-4">
                      Property Valuation
                    </h3>

                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-neutral-600">Lot Frontage:</span>
                        <span className="font-medium">80 ft</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-600">Lot Area:</span>
                        <span className="font-medium">9,600 sq ft</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-600">
                          Overall Quality:
                        </span>
                        <span className="font-medium">7/10</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-600">Year Built:</span>
                        <span className="font-medium">2003</span>
                      </div>

                      <div className="pt-2 mt-2 border-t border-neutral-200">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-semibold">
                            Predicted Price:
                          </span>
                          <span className="text-xl font-bold text-primary">
                            $285,000
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 text-primary">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our advanced platform offers a comprehensive suite of tools to
              help you make informed real estate decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart className="text-primary" size={36} />,
                title: "AI-Powered Predictions",
                description:
                  "Our advanced machine learning model provides highly accurate property valuations using 20+ key features and market data.",
              },
              {
                icon: <Map className="text-primary" size={36} />,
                title: "Location Analysis",
                description:
                  "Detailed insights into neighborhood statistics, school ratings, crime rates, and local amenities.",
              },
              {
                icon: <TrendingUp className="text-primary" size={36} />,
                title: "Market Trends",
                description:
                  "Stay updated with real-time market trends, price movements, and future projections.",
              },
              {
                icon: <Calculator className="text-primary" size={36} />,
                title: "Investment ROI",
                description:
                  "Calculate potential return on investment with our comprehensive investment analysis tools.",
              },
              {
                icon: <Database className="text-primary" size={36} />,
                title: "Historical Data",
                description:
                  "Access years of historical property data to make informed decisions about property value trajectories.",
              },
              {
                icon: <Home className="text-primary" size={36} />,
                title: "Property Comparison",
                description:
                  "Compare multiple properties side-by-side to find the best value for your investment.",
              },
              {
                icon: <Zap className="text-primary" size={36} />,
                title: "Instant Results",
                description:
                  "Get property valuations in seconds using our high-performance prediction engine.",
              },
              {
                icon: <Shield className="text-primary" size={36} />,
                title: "Data Security",
                description:
                  "Your property data is protected with enterprise-grade security and encryption.",
              },
              {
                icon: <Users className="text-primary" size={36} />,
                title: "Expert Support",
                description:
                  "Access our team of real estate experts for guidance and insights on your property decisions.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100 hover:border-primary-200 transition-all hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Get accurate property valuations in just a few simple steps using
              our advanced AI model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Search className="text-primary" size={36} />,
                title: "Enter Property Details",
                description:
                  "Input key property features like lot size, quality ratings, year built, and more for accurate predictions.",
              },
              {
                icon: <Database className="text-primary" size={36} />,
                title: "AI Analysis",
                description:
                  "Our machine learning model processes 20+ features using advanced algorithms trained on extensive real estate data.",
              },
              {
                icon: <Clock className="text-primary" size={36} />,
                title: "Instant Results",
                description:
                  "Get your property valuation in seconds with our high-performance prediction engine.",
              },
              {
                icon: <CheckCircle className="text-primary" size={36} />,
                title: "Detailed Report",
                description:
                  "Review comprehensive valuation insights, market comparisons, and investment potential.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="mx-auto w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary-200">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-primary-500 rounded-full"></div>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-neutral-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our users have to say
              about HomePricer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "HomePricer's AI model provided an incredibly accurate valuation. The predicted price was within 2% of the final sale price!",
                author: "Sarah Johnson",
                title: "Home Seller",
                image:
                  "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              },
              {
                quote:
                  "As a real estate investor, I rely on accurate valuations. HomePricer's predictions have been spot-on for my last 5 property acquisitions.",
                author: "Michael Rodriguez",
                title: "Real Estate Investor",
                image:
                  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              },
              {
                quote:
                  "The detailed property analysis and market insights helped me make an informed decision. Saved me thousands on my home purchase!",
                author: "Jennifer Williams",
                title: "First-time Homebuyer",
                image:
                  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-neutral-50 rounded-xl p-6 shadow-sm border border-neutral-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-neutral-500">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                <p className="text-neutral-700 italic">"{testimonial.quote}"</p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} size={16} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 md:py-24 text-white bg-gradient-to-b from-[rgb(12,182,167)] to-[#6246ea]"
      >
        <div className="container mx-auto px-4 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Your Property's True Value?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Join thousands of satisfied users who have made confident real
              estate decisions with HomePricer's AI-powered predictions.
            </p>
            <Link to="/home">
              <Button
                size="lg"
                className="bg-white text-white hover:bg-neutral-100"
                rightIcon={<ArrowRight size={20} />}
              >
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
