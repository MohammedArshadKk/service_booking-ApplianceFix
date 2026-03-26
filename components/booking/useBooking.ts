"use client";

import { useState } from "react";
import { BookingDetails, redirectToWhatsApp } from "@/lib/whatsapp";

export const useBooking = (defaultService: string = "") => {
  const [formData, setFormData] = useState<BookingDetails>({
    name: "",
    phone: "",
    address: "",
    service: defaultService,
    preferredDate: "",
    description: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingDetails, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof BookingDetails]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof BookingDetails, string>> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      redirectToWhatsApp(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};
