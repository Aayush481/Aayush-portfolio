

import React, { useState } from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import { motion } from 'framer-motion';
import img1 from '../assets/a ceramic planter wi.png'


const SERVICE_ID = import.meta.env.SERVICE_ID;
const TEAMPLATE_ID = import.meta.env.TEAMPLATE_ID;
const PUBLIC_ID = import.meta.env.PUBLIC_ID;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    idea: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "budget" && value && !/^\d+$/.test(value)) return;

    setFormData((p) => ({
      ...p,
      [name]: value,
    }));

    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const ValidateForm = () => {
    const required = ["name", "email", "service", "idea"];
    const newError = {};

    required.forEach(
      (ele) => !formData[ele].trim() && (newError[ele] = "This field is required")
    );
    if (formData.service !== "other" && !formData.budget.trim())
      newError.budget = "This field is required";

    setErrors(newError);
    return !Object.keys(newError).length;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!ValidateForm()) return;
    setStatus("sending");
    try {
      await EmailJSResponseStatus.send(
        SERVICE_ID,
        TEAMPLATE_ID,
        {
          ...formData,
          from_name: formData.name,
          reply_to: formData.email,
        },
        PUBLIC_ID
      );
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        service: "",
        budget: "",
        idea: "",
      });
    } catch (err) {
      console.error("EmailJs error", err);
      setStatus("error");
    }
  };

  return (
<section
  id="contact"
  className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center items-center bg-black text-white"
>
  <ParticlesBackground />

  {/* Background gradients */}
  <div className="absolute inset-0">
    <div className="absolute -left-32 -top-32 w-[70vw] h-[70vw] sm:w-[50vw] sm:h-[50vw] md:w-[40vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-85 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"></div>
    <div className="absolute right-0 bottom-0 w-[70vw] h-[70vw] sm:w-[50vw] sm:h-[50vw] md:w-[40vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-70 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500"></div>
  </div>

  {/* Content grid */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-12 items-center">
    
    {/* Left image */}
    <div className="flex justify-center items-center relative">
      <div className="w-3/4 sm:w-2/3 md:w-1/2 max-w-md aspect-auto absolute hidden lg:block left-0 sm:-left-2 md:-left-13 lg:-left-48 -bottom-10 sm:-bottom-14 md:-bottom-16">
        <img src={img1} className="w-full h-auto object-contain" alt="Decorative" />
      </div>

      <motion.img
        src="../src/assets/laptop-8556518_1280.png"
        alt="Profile"
        initial={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        animate={{ x: [0, -30, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain shadow-lg"
      />
    </div>

    {/* Right form */}
    <motion.div
      className="w-full max-w-lg mx-auto bg-white/5 rounded-2xl shadow-lg border border-white/10 p-6 sm:p-8 md:p-10 lg:p-12"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
        Let's Work Together
      </h1>

      <form className="flex flex-col gap-6 sm:gap-7 text-white" onSubmit={handleSubmit}>
        
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="mb-0.5">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            onChange={handleChange}
            value={formData.name}
            className={`p-2 w-full border ${
              errors.name ? "border-red-500" : "border-white/10"
            } rounded-lg text-white bg-black/5 shadow-lg focus:outline-none focus:border-blue-500`}
            type="text"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="mb-0.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className={`p-2 w-full border ${
              errors.email ? "border-red-500" : "border-white/10"
            } rounded-lg text-white bg-black/5 shadow-lg focus:outline-none focus:border-blue-500`}
            type="email"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>

        {/* Services */}
        <div className="flex flex-col gap-2">
          <label htmlFor="service" className="mb-0.5">
            Services <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`p-2 w-full border text-white ${
              errors.service ? "border-red-500" : "border-white/10"
            } rounded-lg text-black bg-black/5 shadow-lg focus:outline-none focus:border-blue-500`}
          >
            <option value="" disabled className="text-black">
              Something in Mind?
            </option>
            <option value="web applications" className="text-black">Web Applications</option>
            <option value="mobile applications" className="text-black">Mobile Applications</option>
            <option value="others" className="text-black">Others</option>
          </select>
          {errors.service && <p className="text-red-500 text-xs">{errors.service}</p>}
        </div>

        {/* Budget (conditional) */}
        {formData.service && formData.service !== "others" && (
          <div className="flex flex-col gap-2 text-white">
            <label htmlFor="budget" className="mb-0.5">
              Budget <span className="text-red-500">*</span>
            </label>
            <input
              id="budget"
              name="budget"
              onChange={handleChange}
              value={formData.budget}
              className={`p-2 w-full border ${
                errors.budget ? "border-red-500" : "border-white/10"
              } rounded-lg text-white bg-black/5 shadow-lg focus:outline-none focus:border-blue-500`}
              type="text"
              placeholder="Enter your budget"
            />
            {errors.budget && <p className="text-red-500 text-xs">{errors.budget}</p>}
          </div>
        )}

        {/* Idea */}
        <div className="flex flex-col gap-2 text-white">
          <label htmlFor="idea" className="mb-0.5">
            Explain your idea <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={5}
            id="idea"
            name="idea"
            placeholder="Enter your idea/message"
            value={formData.idea}
            onChange={handleChange}
            className={`p-2 w-full border ${
              errors.idea ? "border-red-500" : "border-white/10"
            } rounded-lg text-white bg-black/5 shadow-lg focus:outline-none focus:border-blue-500`}
          />
          {errors.idea && <p className="text-red-500 text-xs">{errors.idea}</p>}
        </div>

        {/* Status */}
        {status && (
          <p>
            {status === "sending"
              ? "Sending..."
              : status === "success"
              ? "Message sent successfully! ✅"
              : "Something went wrong. Please try again ❌"}
          </p>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={status === "sending"}
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 font-semibold text-white rounded-xl w-full p-3 mt-10"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </motion.button>
      </form>
    </motion.div>
  </div>
</section>
);
};

export default Contact;
















