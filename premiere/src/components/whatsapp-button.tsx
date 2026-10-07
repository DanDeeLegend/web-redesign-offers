"use client";

import { motion } from "motion/react";
import { WhatsappIcon } from "@/components/icons";
import { site } from "@/lib/site";

/** Floating "Chat on WhatsApp" button, kept from the current site but redesigned. */
export function WhatsappButton() {
  return (
    <motion.a
      href={site.whatsapp}
      target="_blank"
      rel="noopener"
      aria-label="Chat with Premiere Academy on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
      className="group fixed right-4 bottom-4 z-40 flex items-center gap-2 rounded-full bg-[#25d366] p-3.5 text-white shadow-[0_16px_40px_-12px_rgba(37,211,102,.8)] transition hover:pr-5 sm:right-6 sm:bottom-6"
    >
      <WhatsappIcon className="size-6" />
      <span className="max-w-0 overflow-hidden text-sm font-bold whitespace-nowrap transition-all duration-300 group-hover:max-w-40">Chat with us</span>
    </motion.a>
  );
}
