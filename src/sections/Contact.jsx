import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";
import decorativeImg from "../assets/a ceramic planter wi.png";
import laptopImg from "../assets/laptop-8556518_1280.png";


// const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
// const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
// const PUBLIC_ID = import.meta.env.VITE_PUBLIC_ID;

const InputField = ({ label, name, value, onChange, error, type = "text" }) => (
  <div>
    <label className="block mb-1">{label} <span className="text-red-600">*</span></label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2 rounded-lg bg-black/30 border border-white/10"
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);


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

   
    if ((name === "budget") && value && !/^\d+$/.test(value)) {
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Required";
    if (!formData.email.trim()) newErrors.email = "Required";
    if (!formData.service.trim()) newErrors.service = "Required";
    if (formData.service !== "others" && !formData.budget.trim())
      newErrors.budget = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  setStatus("sending");

  try {
    const response = await fetch("/.netlify/functions/sendEmail", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});

    if (response.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", service: "", budget: "", idea: "" });
    } else {
      setStatus("error");
    }
  } catch (err) {
    console.error(err);
    setStatus("error");
  }
};
  return (
    <section
      id="contact"
      className="relative min-h-screen w-full overflow-hidden bg-black text-white flex items-center justify-center py-20"
    >
      <ParticlesBackground />

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl w-full px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* left image */}
        <div className="relative flex justify-center">
          <img
            src={decorativeImg}
            alt="Decorative"
            className=" hidden sm:block absolute -left-17 bottom-0 w-52 opacity-80"
          />

          <motion.img
            src={laptopImg}
            alt="Laptop"
            animate={{ x: [0, -25, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>

        {/* rightform */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6">
            Let’s Work Together
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <InputField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />

            {/* Email */}
            <InputField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />

            {/* Service */}
            <div>
              <label className="block mb-1">Service <span className="text-red-600">*</span></label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-2 rounded-lg bg-black/30 border border-white/10"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="web">Web Application</option>
                <option value="mobile">Mobile Application</option>
                <option value="others">Others</option>
              </select>
              {errors.service && (
                <p className="text-red-500 text-sm">{errors.service}</p>
              )}
            </div>

            {/* Budget */}
            {formData.service && formData.service !== "others" && (
              <InputField
                label="Budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                error={errors.budget}
              />
            )}

            {/* Idea */}
            <div>
              <label className="block mb-1">Your Idea <span className="text-red-600">*</span></label>
              <textarea
                rows="4"
                name="idea"
                value={formData.idea}
                onChange={handleChange}
                className="w-full p-2 rounded-lg bg-black/30 border border-white/10"
              />
              {errors.idea && (
                <p className="text-red-500 text-sm">{errors.idea}</p>
              )}
            </div>

            {/* Status */}
            {status && (
              <p className="text-sm">
                {status === "sending" && "Sending..."}
                {status === "success" && "Message sent successfully ✅"}
                {status === "error" && "Something went wrong ❌"}
              </p>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={status === "sending"}
              className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl py-3 font-semibold"
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


