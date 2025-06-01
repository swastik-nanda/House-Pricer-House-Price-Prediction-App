import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building2, ArrowRight } from "lucide-react";

import Button from "../components/Button";
import Input from "../components/Input";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [formData, setFormData] = useState({
    lotFrontage: 0,
    lotArea: 0,
    overallQual: 1,
    overallCond: 1,
    yearBuilt: new Date().getFullYear(),
    yearRemodAdd: new Date().getFullYear(),
    masVnrArea: 0,
    bsmtFinSF1: 0,
    bsmtFinSF2: 0,
    bsmtUnfSF: 0,
    saleType: "WD",
    saleCondition: "Normal",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [predictedPrice, setPredictedPrice] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const predictURL = import.meta.env.VITE_BACKEND_URL_PREDICT;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Transform the data to match the model's input format
      const modelInput = {
        "Lot Frontage": Number(formData.lotFrontage),
        "Lot Area": Number(formData.lotArea),
        "Overall Qual": Number(formData.overallQual),
        "Overall Cond": Number(formData.overallCond),
        "Year Built": Number(formData.yearBuilt),
        "Year Remod/Add": Number(formData.yearRemodAdd),
        "Mas Vnr Area": Number(formData.masVnrArea),
        "BsmtFin SF 1": Number(formData.bsmtFinSF1),
        "BsmtFin SF 2": Number(formData.bsmtFinSF2),
        "Bsmt Unf SF": Number(formData.bsmtUnfSF),
        "Sale Type_ConLw": formData.saleType === "ConLw" ? 1 : 0,
        "Sale Type_New": formData.saleType === "New" ? 1 : 0,
        "Sale Type_Oth": formData.saleType === "Oth" ? 1 : 0,
        "Sale Type_VWD": formData.saleType === "VWD" ? 1 : 0,
        "Sale Type_WD ": formData.saleType === "WD" ? 1 : 0,
        "Sale Condition_AdjLand": formData.saleCondition === "AdjLand" ? 1 : 0,
        "Sale Condition_Alloca": formData.saleCondition === "Alloca" ? 1 : 0,
        "Sale Condition_Family": formData.saleCondition === "Family" ? 1 : 0,
        "Sale Condition_Normal": formData.saleCondition === "Normal" ? 1 : 0,
        "Sale Condition_Partial": formData.saleCondition === "Partial" ? 1 : 0,
      };

      // TODO: Replace with your actual API endpoint
      const response = await fetch(`${predictURL}/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(modelInput),
      });

      const data = await response.json();
      setPredictedPrice(data.predicted_price);
    } catch (error) {
      console.error("Prediction failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-primary-50 to-secondary-50 py-12 px-4">
      <Navbar></Navbar>
      <div className={`container mx-auto`} style={{ paddingTop: "5rem" }}>
        <motion.div
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-6">
            <Building2 className="text-primary mr-3" size={32} />
            <h1 className="text-2xl md:text-3xl font-bold">
              House Price Prediction
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Lot Frontage (ft)"
                type="number"
                name="lotFrontage"
                value={formData.lotFrontage}
                onChange={handleInputChange}
                required
              />

              <Input
                label="Lot Area (sq ft)"
                type="number"
                name="lotArea"
                value={formData.lotArea}
                onChange={handleInputChange}
                required
              />

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Overall Quality
                </label>
                <select
                  name="overallQual"
                  value={formData.overallQual}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Overall Condition
                </label>
                <select
                  name="overallCond"
                  value={formData.overallCond}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>

              <Input
                label="Year Built"
                type="number"
                name="yearBuilt"
                value={formData.yearBuilt}
                onChange={handleInputChange}
                min="1800"
                max={new Date().getFullYear()}
                required
              />

              <Input
                label="Year Remodeled/Added"
                type="number"
                name="yearRemodAdd"
                value={formData.yearRemodAdd}
                onChange={handleInputChange}
                min="1800"
                max={new Date().getFullYear()}
                required
              />

              <Input
                label="Masonry Veneer Area (sq ft)"
                type="number"
                name="masVnrArea"
                value={formData.masVnrArea}
                onChange={handleInputChange}
                required
              />

              <Input
                label="Basement Finished Area 1 (sq ft)"
                type="number"
                name="bsmtFinSF1"
                value={formData.bsmtFinSF1}
                onChange={handleInputChange}
                required
              />

              <Input
                label="Basement Finished Area 2 (sq ft)"
                type="number"
                name="bsmtFinSF2"
                value={formData.bsmtFinSF2}
                onChange={handleInputChange}
                required
              />

              <Input
                label="Basement Unfinished Area (sq ft)"
                type="number"
                name="bsmtUnfSF"
                value={formData.bsmtUnfSF}
                onChange={handleInputChange}
                required
              />

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Sale Type
                </label>
                <select
                  name="saleType"
                  value={formData.saleType}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                >
                  <option value="WD">Warranty Deed - Conventional</option>
                  <option value="ConLw">Contract Low</option>
                  <option value="New">New</option>
                  <option value="Oth">Other</option>
                  <option value="VWD">Warranty Deed - VA Loan</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Sale Condition
                </label>
                <select
                  name="saleCondition"
                  value={formData.saleCondition}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                >
                  <option value="Normal">Normal Sale</option>
                  <option value="Abnormal">Abnormal Sale</option>
                  <option value="AdjLand">Adjoining Land Purchase</option>
                  <option value="Alloca">Allocation</option>
                  <option value="Family">Sale between family members</option>
                  <option value="Partial">
                    Home was not completed when assessed
                  </option>
                </select>
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              isLoading={isLoading}
              rightIcon={<ArrowRight size={20} />}
            >
              Predict Price
            </Button>
          </form>

          {predictedPrice !== null && (
            <motion.div
              className="mt-8 p-6 bg-primary rounded-lg border border-primary"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-semibold mb-2">
                Predicted House Price
              </h2>
              <p className="text-3xl font-bold text-white">
                ${predictedPrice.toLocaleString()}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
