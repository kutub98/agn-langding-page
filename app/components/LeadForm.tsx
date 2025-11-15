"use client";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const LeadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Phone must be at least 6 characters"),
  businessType: z.string().optional(),
  supportNeeded: z.string().optional(),
});

type LeadFormValues = z.infer<typeof LeadSchema>;

export default function LeadForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<LeadFormValues>({
    resolver: zodResolver(LeadSchema),
    defaultValues: { businessType: "", supportNeeded: "" },
  });

  async function onSubmit(values: LeadFormValues) {
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Network error");
      reset();
      alert("Thanks! We'll reach out shortly. You can also book a call below.");
    } catch (err) {
      console.error(err);
      alert("Failed to submit. Try again.");
    }
  }

  return (
    <section
      id="lead-form"
      className="py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10"
      >
        <h2 className="text-3xl font-extrabold text-center mb-4">
          Get a Free Quote
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Fill out the form below — we’ll review and reach out within one
          business day.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label className="block text-sm font-medium mb-1">Name</label>
            <Input {...register("name")} className="rounded-xl" />
            {errors.name && (
              <div className="text-sm text-red-600 mt-1">
                {errors.name.message}
              </div>
            )}
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input {...register("email")} className="rounded-xl" />
            {errors.email && (
              <div className="text-sm text-red-600 mt-1">
                {errors.email.message}
              </div>
            )}
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-sm font-medium mb-1">Phone</label>
            <Input {...register("phone")} className="rounded-xl" />
            {errors.phone && (
              <div className="text-sm text-red-600 mt-1">
                {errors.phone.message}
              </div>
            )}
          </motion.div>

          {/* Business Type */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <label className="block text-sm font-medium mb-1">
              Business Type
            </label>
            <Controller
              control={control}
              name="businessType"
              render={({ field }) => (
                <Select {...field}>
                  <SelectItem value="ecommerce">Ecommerce</SelectItem>
                  <SelectItem value="agency">Agency</SelectItem>
                  <SelectItem value="saas">SaaS</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </Select>
              )}
            />
          </motion.div>

          {/* Support Needed */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2"
          >
            <label className="block text-sm font-medium mb-1">
              What support do you need?
            </label>
            <Textarea
              {...register("supportNeeded")}
              rows={4}
              className="rounded-xl"
            />
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="md:col-span-2 flex gap-4 justify-center mt-4"
          >
            <Button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full hover:from-purple-500 hover:to-blue-500 shadow-lg transition-all duration-300"
            >
              Get a Free Quote
            </Button>

            <Button
              variant="outline"
              className="px-8 py-3 rounded-full border-blue-500 text-blue-600 hover:bg-blue-50 transition-colors duration-300"
              onClick={() => {
                const widget = document.getElementById("calendly-embed");
                if (widget) widget.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book a Call
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
}
