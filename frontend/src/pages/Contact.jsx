import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Users,
  Building,
  CheckCircle,
} from "lucide-react";
import emailjs from "emailjs-com";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICEID,
        import.meta.env.VITE_EMAILJS_TEMPLATEID,
        e.target,
        import.meta.env.VITE_EMAILJS_USERID
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setIsLoading(false);
          setSubmitted(true);
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setIsLoading(false);
          alert("Failed to send message, please try again later.");
        }
      );
    console.log("Form Data:", formData);
  };

  const contactInfo = [
    {
      icon: <Phone className="text-primary" size={24} />,
      title: "Phone",
      content: "+1 (123) 456-7890",
      link: "tel:+11234567890",
    },
    {
      icon: <Mail className="text-primary" size={24} />,
      title: "Email",
      content: "info@homepricer.com",
      link: "mailto:info@homepricer.com",
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: "Address",
      content: "123 Property Lane, Real Estate City, RE 54321",
      link: "#",
    },
  ];

  const features = [
    {
      icon: <MessageSquare className="text-white" size={24} />,
      title: "24/7 Support",
      description: "Our team is always here to help you with any questions.",
    },
    {
      icon: <Users className="text-white" size={24} />,
      title: "Expert Team",
      description:
        "Get assistance from our experienced real estate professionals.",
    },
    {
      icon: <Building className="text-white" size={24} />,
      title: "Property Insights",
      description:
        "Detailed analysis and valuable market insights for your property.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#E6F7F6 ] to-[#EEEAFD] py-20">
          <div className="container px-4 text-center max-w-3xl mx-auto">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get in Touch with <span className="text-primary">HomePricer</span>
            </motion.h1>
            <motion.p
              className="text-lg text-neutral-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Have questions about our AI-powered house price prediction? We're
              here to help you make informed property decisions.
            </motion.p>
          </div>
        </section>

        {/* Contact Features */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="opacity-90">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-neutral-600 mb-8">
                  Choose the most convenient way to reach us.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      className="flex items-start p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="mr-4">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-neutral-600">{info.content}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                  <div className="space-y-2 text-neutral-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div>
                {submitted ? (
                  <motion.div
                    className="bg-success-500 text-white p-8 rounded-xl text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="mx-auto mb-4" size={48} />
                    <h3 className="text-2xl font-semibold mb-2">
                      Message Sent!
                    </h3>
                    <p className="mb-6">Thanks for contacting us.</p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      className=" text-white"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-xl p-6 shadow-lg border border-neutral-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-semibold mb-6">
                      Send us a Message
                    </h2>
                    <div className="space-y-4">
                      <Input
                        label="Full Name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <Input
                        label="Phone Number"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Subject
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="input-field"
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="pricing">Pricing Questions</option>
                          <option value="feedback">Feedback</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="input-field"
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        isLoading={isLoading}
                        rightIcon={<Send size={20} />}
                      >
                        Send Message
                      </Button>
                    </div>
                  </motion.form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
