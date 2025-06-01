import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowLeft } from "lucide-react";
import axios from "axios";

import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const { data } = await axios.post(`${backendUrl}/api/auth/login`, {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("token", data.token);

      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
      setErrors({
        form:
          error.response?.data?.message ||
          "Invalid email or password. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-primary to-secondary flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Navbar></Navbar>
      <motion.div
        className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Logo />
          </div>
          <h2 className="text-3xl font-bold text-neutral-800">Welcome back</h2>
          <p className="mt-2 text-neutral-600">
            Please sign in to your account
          </p>
        </div>

        {errors.form && (
          <div className="bg-error-500 text-error-500 p-3 rounded-lg text-sm">
            {errors.form}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <Input
              label="Email Address"
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="your@email.com"
              leftIcon={<Mail size={18} />}
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />

            <Input
              label="Password"
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              placeholder="••••••••"
              leftIcon={<Lock size={18} />}
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 text-primary border-neutral-300 rounded focus:ring-primary-500"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-neutral-700"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="text-primary hover:text-primary font-medium"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            isLoading={isLoading}
          >
            Sign In
          </Button>

          <div className="text-center text-sm">
            <p className="text-neutral-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-primary hover:text-primary-600 font-medium"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>

        <div className="pt-4 text-center">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-primary hover:text-primary-600"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to home
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
