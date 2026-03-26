"use client";

import React from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useBooking } from "./useBooking";

interface BookingFormProps {
  defaultService?: string;
  onSuccess?: () => void;
}

import { useVoiceToText } from "@/hooks/useVoiceToText";

export const BookingForm = ({ defaultService = "", onSuccess }: BookingFormProps) => {
  const { formData, errors, isSubmitting, handleChange, handleSubmit, setFormData } = useBooking(defaultService);
  const { isListening, transcript, startListening, stopListening, browserSupportsSpeechRecognition } = useVoiceToText();

  const onSubmit = (e: React.FormEvent) => {
    handleSubmit(e);
    if (Object.keys(errors).length === 0 && onSuccess) {
      onSuccess();
    }
  };

  // Sync transcript to formData
  React.useEffect(() => {
    if (transcript) {
      setFormData((prev: any) => ({
        ...prev,
        description: transcript
      }));
    }
  }, [transcript, setFormData]);

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold mb-1.5 text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">person</span>
            Full Name
          </label>
          <input 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3.5 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary transition-all text-on-surface text-sm" 
            placeholder="Enter your name" 
            type="text"
            required
          />
          {errors.name && <p className="text-error text-[10px] mt-1 ml-1 font-bold">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-xs font-bold mb-1.5 text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">call</span>
            Phone Number
          </label>
          <input 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3.5 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary transition-all text-on-surface text-sm" 
            placeholder="Enter mobile number" 
            type="tel"
            required
          />
          {errors.phone && <p className="text-error text-[10px] mt-1 ml-1 font-bold">{errors.phone}</p>}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold mb-1.5 text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
            Service Date
          </label>
          <input 
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            className="w-full p-3.5 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary transition-all text-on-surface text-sm" 
            type="date"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-bold mb-1.5 text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">home_repair_service</span>
            Service
          </label>
          <select 
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-3.5 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary transition-all text-on-surface text-sm appearance-none"
            required
          >
            <option value="">Select Service</option>
            <option value="AC Service">AC Service</option>
            <option value="Fridge Repair">Fridge Repair</option>
            <option value="Washing Machine">Washing Machine Fix</option>
          </select>
        </div>
      </div>
      <div className="relative">
        <label className="block text-xs font-bold mb-1.5 text-on-surface-variant flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px]">description</span>
          Issue Description
          {browserSupportsSpeechRecognition && (
            <span className="ml-auto text-[10px] text-primary/60 font-medium">Click mic to speak</span>
          )}
        </label>
        <div className="relative group/textarea">
          <textarea 
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3.5 pr-12 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-primary transition-all text-on-surface text-sm" 
            placeholder={isListening ? "Listening..." : "Tell us what's wrong..."} 
            rows={2}
          />
          {browserSupportsSpeechRecognition && (
            <button
              type="button"
              onClick={toggleListening}
              className={`absolute right-3 bottom-3 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                isListening 
                  ? "bg-primary text-on-primary animate-pulse scale-110 shadow-lg shadow-primary/20" 
                  : "bg-surface-container-highest text-on-surface-variant hover:text-primary"
              }`}
              title={isListening ? "Stop listening" : "Start voice dictation"}
            >
              <span className={`material-symbols-outlined text-[20px] ${isListening ? "filled-icon" : ""}`}>
                {isListening ? "mic" : "mic_none"}
              </span>
            </button>
          )}
        </div>
      </div>
      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-primary text-on-primary rounded-2xl font-bold text-base shadow-lg shadow-primary/20 transition-all active:scale-95 disabled:opacity-50 mt-2"
      >
        {isSubmitting ? "Opening WhatsApp..." : "Confirm Booking"}
      </button>
    </form>
  );
};
