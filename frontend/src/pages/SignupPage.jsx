import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Mail, Lock, ArrowLeft, Check } from "lucide-react";

import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user types
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

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getPasswordStrength = (password) => {
    if (!password)
      return { strength: 0, label: "None", color: "bg-neutral-200" };

    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    const strengthMap = [
      { label: "Weak", color: "bg-error-500" },
      { label: "Fair", color: "bg-warning-500" },
      { label: "Good", color: "bg-warning-500" },
      { label: "Strong", color: "bg-success-500" },
      { label: "Very Strong", color: "bg-success-500" },
    ];

    return {
      strength,
      ...strengthMap[strength],
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({}); // clear previous errors

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        // Adjust URL as per your backend
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Backend returned an error
        setErrors({
          form: data.message || "Registration failed. Please try again.",
        });
      } else {
        // Registration successful
        console.log("Signup successful:", data);
        // Optionally save token in localStorage/sessionStorage
        localStorage.setItem("token", data.token);
        navigate("/home");
      }
    } catch (error) {
      console.error("Signup failed:", error);
      setErrors({ form: "Registration failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <div className="min-h-screen bg-gradient-to-r from-primary-50 to-secondary-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Navbar></Navbar>
      <motion.div
        className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Logo />
          </div>
          <h2 className="text-3xl font-bold text-neutral-800">
            Create an account
          </h2>
          <p className="mt-2 text-neutral-600">
            Sign up to get started with HomePricer
          </p>
        </div>

        {errors.form && (
          <div className="bg-error-50 text-error-500 p-3 rounded-lg text-sm">
            {errors.form}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <Input
              label="Full Name"
              type="text"
              name="fullName"
              id="fullName"
              autoComplete="name"
              placeholder="John Doe"
              leftIcon={<User size={18} />}
              value={formData.fullName}
              onChange={handleChange}
              error={errors.fullName}
              required
            />

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

            <div>
              <Input
                label="Password"
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                leftIcon={<Lock size={18} />}
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                required
              />

              {formData.password && (
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-neutral-500">
                      Password strength:
                    </span>
                    <span className="text-xs font-medium">
                      {passwordStrength.label}
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-neutral-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${passwordStrength.color} transition-all duration-300`}
                      style={{
                        width: `${(passwordStrength.strength / 4) * 100}%`,
                      }}
                    ></div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="flex items-center text-xs">
                      <Check
                        size={12}
                        className={
                          formData.password.length >= 8
                            ? "text-success"
                            : "text-neutral-400"
                        }
                      />
                      <span className="ml-1">At least 8 characters</span>
                    </div>
                    <div className="flex items-center text-xs">
                      <Check
                        size={12}
                        className={
                          /[A-Z]/.test(formData.password)
                            ? "text-success"
                            : "text-neutral-400"
                        }
                      />
                      <span className="ml-1">Uppercase letter</span>
                    </div>
                    <div className="flex items-center text-xs">
                      <Check
                        size={12}
                        className={
                          /[0-9]/.test(formData.password)
                            ? "text-success"
                            : "text-neutral-400"
                        }
                      />
                      <span className="ml-1">Number</span>
                    </div>
                    <div className="flex items-center text-xs">
                      <Check
                        size={12}
                        className={
                          /[^A-Za-z0-9]/.test(formData.password)
                            ? "text-success"
                            : "text-neutral-400"
                        }
                      />
                      <span className="ml-1">Special character</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="••••••••"
              leftIcon={<Lock size={18} />}
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              required
            />
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="acceptTerms"
                name="acceptTerms"
                type="checkbox"
                className="h-4 w-4 text-primary-500 border-neutral-300 rounded focus:ring-primary-500"
                checked={formData.acceptTerms}
                onChange={handleChange}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="acceptTerms" className="text-neutral-700">
                I agree to the{" "}
                <a
                  href="#"
                  className="text-primary hover:text-primary-600 font-medium"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-primary hover:text-primary-600 font-medium"
                >
                  Privacy Policy
                </a>
              </label>
              {errors.acceptTerms && (
                <p className="mt-1 text-error-500 text-xs">
                  {errors.acceptTerms}
                </p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            isLoading={isLoading}
          >
            Create Account
          </Button>

          <div className="text-center text-sm">
            <p className="text-neutral-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary hover:text-primary-600 font-medium"
              >
                Sign in
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

export default SignupPage;
