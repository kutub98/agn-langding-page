"use client";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

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
    <section id="lead-form" className="py-12 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">
          Get a Free Quote
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Short form — we’ll review and reach out within one business day.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <Input {...register("name")} />
            {errors.name && (
              <div className="text-sm text-red-600 mt-1">
                {errors.name.message}
              </div>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input {...register("email")} />
            {errors.email && (
              <div className="text-sm text-red-600 mt-1">
                {errors.email.message}
              </div>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <Input {...register("phone")} />
            {errors.phone && (
              <div className="text-sm text-red-600 mt-1">
                {errors.phone.message}
              </div>
            )}
          </div>

          {/* Business Type */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Business type
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
          </div>

          {/* Support Needed */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">
              What support do you need?
            </label>
            <Textarea {...register("supportNeeded")} rows={4} />
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex gap-3 justify-center">
            <Button type="submit">Get a Free Quote</Button>

            <Button
              variant="outline"
              onClick={() => {
                const widget = document.getElementById("calendly-embed");
                if (widget) widget.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book a Call
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
